// 0.9.9.9.6.4: group chats, like Telegram — make a group (a name, a picture, your friends), and its info page: the
// picture and name (the owner and admins change them, or everyone if the owner allows it), the members with their
// roles and status, adding people, what members may do (the owner decides), notifications, leaving and deleting.
import { api, type Friend, type GroupInfo, type GroupMemberView, type GroupPerms, type NotifyMode } from './api';
import { knownFriends } from './friendrail';
import { shrink } from './photopick';
import { tr } from './i18n';
import * as ui from './ui';

function h(tag: string, cls = '', text?: string): HTMLElement {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}
const btn = (text: string, cls = 'pill', fn?: () => void) => { const b = h('button', cls, text) as HTMLButtonElement; b.type = 'button'; if (fn) b.onclick = fn; return b; };

let dlg: HTMLDialogElement | null = null;
function dialog() {
  if (!dlg) {
    dlg = document.createElement('dialog');
    dlg.className = 'friend-dialog group-dialog';
    dlg.onclick = (e) => { if (e.target === dlg) dlg!.close(); };
    document.body.append(dlg);
  }
  return dlg;
}
function closeX(d: HTMLDialogElement) { const x = btn('✕', 'pill dlg-x', () => d.close()); x.setAttribute('aria-label', tr('Close')); return x; }

async function friendsNow(): Promise<Friend[]> {
  const k = knownFriends();
  const list = k && Date.now() - k.at < 60_000 ? k.friends : (await api.friends()).friends;
  return list.filter((f) => f.status === 'accepted').sort((a, b) => Number(b.online) - Number(a.online) || (a.name ?? a.username).localeCompare(b.name ?? b.username));
}
function avatar(pic: string | null | undefined, name: string, cls = 'gp-av') {
  const a = h('span', cls);
  const img = ui.picEl(pic ?? null, 'pic fill');
  if (img) a.append(img); else a.textContent = (name || '?').slice(0, 1).toUpperCase();
  return a;
}
/** friends to tick (a search on top when there are many) */
function friendPicker(friends: Friend[], skip: Set<string>, onChange: (ids: string[]) => void) {
  const box = h('div', 'gp-pick');
  const chosen = new Set<string>();
  const search = document.createElement('input');
  search.className = 'gp-search'; search.placeholder = tr('Search friends'); search.setAttribute('aria-label', tr('Search friends'));
  const list = h('div', 'gp-list');
  const paint = () => {
    const q = search.value.trim().toLowerCase();
    const rows = friends.filter((f) => !skip.has(f.id) && (!q || (f.name ?? '').toLowerCase().includes(q) || f.username.includes(q)));
    list.replaceChildren(...(rows.length ? rows.map((f) => {
      const r = h('label', 'gp-row');
      const cb = document.createElement('input');
      cb.type = 'checkbox'; cb.checked = chosen.has(f.id);
      cb.onchange = () => { if (cb.checked) chosen.add(f.id); else chosen.delete(f.id); onChange([...chosen]); };
      const t = h('span', 'gp-t');
      t.append(h('b', '', f.name ?? f.username), h('small', '', f.online ? tr('Online') : `@${f.username}`));
      r.append(cb, avatar(f.pic, f.name ?? f.username), t);
      return r;
    }) : [h('p', 'hint', friends.length ? tr('No one by that name') : tr('Add friends first — then you can put them in a group.'))]));
  };
  search.oninput = paint;
  paint();
  if (friends.length > 6) box.append(search);
  box.append(list);
  return box;
}

/** a round picture you can tap to choose (and its upload, when the group is made) */
function picChooser(initial: string | null, name: () => string) {
  let data: string | null = null;
  const wrap = h('button', 'gp-pic') as HTMLButtonElement;
  wrap.type = 'button'; wrap.title = tr('Choose a picture');
  const paint = () => {
    wrap.replaceChildren();
    const src = data ?? initial;
    if (src) { const img = document.createElement('img'); img.src = src; img.alt = ''; img.className = 'pic fill'; wrap.append(img); } else wrap.append(h('span', 'gp-pic-l', (name() || '').slice(0, 1).toUpperCase() || '+'));
    const cam = h('i', 'gp-cam');
    cam.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';
    wrap.append(cam);
  };
  const file = document.createElement('input');
  file.type = 'file'; file.accept = 'image/*'; file.hidden = true;
  file.onchange = async () => {
    const f = file.files?.[0]; file.value = '';
    if (!f) return;
    try { data = (await shrink(f, 512)).data; paint(); onPicked?.(); } catch (e) { ui.toast((e as Error).message); }
  };
  wrap.onclick = () => file.click();
  let onPicked: (() => void) | null = null;
  paint();
  return {
    el: wrap, file, repaint: paint,
    onPick: (fn: () => void) => { onPicked = fn; },
    /** the chosen picture uploaded: its id (null: none chosen) */
    upload: async () => (data ? (await api.uploadPhoto(data)).id : null),
  };
}

export async function openNewGroup(onCreated: (id: string) => void) {
  const d = dialog();
  d.setAttribute('aria-label', tr('New group'));
  const nameIn = document.createElement('input');
  nameIn.className = 'gp-name-in'; nameIn.maxLength = 48; nameIn.placeholder = tr('Group name'); nameIn.setAttribute('aria-label', tr('Group name'));
  const pic = picChooser(null, () => nameIn.value);
  nameIn.oninput = () => pic.repaint();
  let ids: string[] = [];
  const create = btn(tr('Create group'), 'pill primary big gp-create');
  const count = h('small', 'gp-count', '');
  const paintCount = () => { count.textContent = ids.length ? tr(ids.length === 1 ? '1 friend chosen' : `${ids.length} friends chosen`) : ''; };
  const top = h('div', 'gp-top');
  top.append(pic.el, nameIn);
  d.replaceChildren(closeX(d), h('h3', '', tr('New group')), top, h('h4', 'gp-sub', tr('Add friends')), h('p', 'hint', tr('Loading…')), pic.file);
  if (!d.open) d.showModal();
  nameIn.focus();
  let friends: Friend[] = [];
  try { friends = await friendsNow(); } catch (e) { ui.toast((e as Error).message); }
  const picker = friendPicker(friends, new Set(), (x) => { ids = x; paintCount(); });
  d.querySelector('.hint')?.replaceWith(picker);
  const foot = h('div', 'gp-foot');
  foot.append(count, create);
  d.append(foot);
  create.onclick = async () => {
    const name = nameIn.value.trim();
    if (!name) { nameIn.focus(); ui.toast(tr('Give the group a name'), 2500); return; }
    create.disabled = true;
    try {
      const picId = await pic.upload();
      const r = await api.createGroup(name, ids, picId ?? undefined);
      d.close();
      onCreated(r.id);
    } catch (e) { ui.toast((e as Error).message, 3500); create.disabled = false; }
  };
}

const ROLE_LABEL: Record<string, string> = { owner: 'Owner', admin: 'Admin', member: '' };
export interface GroupHooks { me: () => string; view: (userId: string) => void; changed: (g: GroupInfo) => void; left: (id: string) => void; message: (userId: string) => void; notify: (id: string, mode: NotifyMode) => Promise<void> }

export async function openGroupInfo(key: string, hooks: GroupHooks) {
  const d = dialog();
  d.setAttribute('aria-label', tr('Group info'));
  d.replaceChildren(closeX(d), h('p', 'hint', tr('Loading…')));
  if (!d.open) d.showModal();
  let g: GroupInfo;
  try { g = (await api.group(key)).group; } catch (e) { d.replaceChildren(closeX(d), h('p', 'hint', (e as Error).message)); return; }
  const render = () => {
    const canInfo = g.role !== 'member' || g.perms.info === 'all';
    const canInvite = g.role !== 'member' || g.perms.invite === 'all';
    const online = g.members.filter((m) => m.online).length;
    // the picture and the name
    const pic = picChooser(g.pic, () => g.name);
    if (!canInfo) { pic.el.disabled = true; pic.el.classList.add('ro'); }
    pic.onPick(async () => {
      try { const id = await pic.upload(); g = (await api.updateGroup(g.id, { pic: id })).group; hooks.changed(g); render(); } catch (e) { ui.toast((e as Error).message); }
    });
    const title = h('div', 'gp-title');
    const nm = h('h3', 'gp-name', g.name);
    title.append(nm, h('small', 'gp-meta', `${tr(g.members.length === 1 ? '1 member' : `${g.members.length} members`)} · ${tr(`${online} online`)}`));
    if (canInfo) {
      const ed = btn('✎', 'pill gp-rename', () => {
        const inp = document.createElement('input');
        inp.className = 'gp-name-in'; inp.maxLength = 48; inp.value = g.name;
        const ok = btn(tr('Save'), 'pill primary', async () => {
          try { g = (await api.updateGroup(g.id, { name: inp.value })).group; hooks.changed(g); render(); } catch (e) { ui.toast((e as Error).message); }
        });
        inp.onkeydown = (e) => { if (e.key === 'Enter') ok.click(); if (e.key === 'Escape') render(); };
        nm.replaceWith(inp); ed.replaceWith(ok); inp.focus(); inp.select();
      });
      ed.title = tr('Rename'); ed.setAttribute('aria-label', tr('Rename'));
      title.append(ed);
    }
    const top = h('div', 'gp-top');
    top.append(pic.el, title);
    // notifications (Discord's bell: all, only @mentions, nothing)
    const notif = h('div', 'gp-sec gp-notify');
    notif.append(h('h4', '', tr('Notifications')));
    const seg = h('div', 'seg gp-seg');
    for (const [m, label] of [['all', 'All messages'], ['mentions', 'Only @mentions'], ['none', 'Nothing']] as const) {
      const b = btn(tr(label), m === g.notify ? 'on' : '', async () => {
        try { await hooks.notify(g.id, m); g.notify = m; render(); } catch (e) { ui.toast((e as Error).message); }
      });
      b.setAttribute('aria-pressed', String(m === g.notify));
      seg.append(b);
    }
    notif.append(seg);
    // what members may do — the owner decides
    const perms = h('div', 'gp-sec gp-perms');
    if (g.role === 'owner') {
      perms.append(h('h4', '', tr('What members can do')));
      for (const [k, label] of [['send', 'Send messages'], ['invite', 'Add people'], ['info', 'Change the name and picture']] as const) {
        const row = h('label', 'gp-perm');
        const sw = document.createElement('input');
        sw.type = 'checkbox'; sw.className = 'gp-switch'; sw.checked = g.perms[k] === 'all';
        sw.onchange = async () => {
          const next: Partial<GroupPerms> = { [k]: sw.checked ? 'all' : 'admins' };
          try { g = (await api.updateGroup(g.id, { perms: next })).group; hooks.changed(g); render(); } catch (e) { ui.toast((e as Error).message); sw.checked = !sw.checked; }
        };
        row.append(h('span', '', tr(label)), sw);
        perms.append(row);
      }
    }
    // the members
    const mem = h('div', 'gp-sec gp-members');
    const mh = h('div', 'gp-mh');
    mh.append(h('h4', '', tr(g.members.length === 1 ? '1 member' : `${g.members.length} members`)));
    if (canInvite) mh.append(btn(`+ ${tr('Add members')}`, 'pill primary', () => void addMembers()));
    mem.append(mh);
    for (const m of g.members) mem.append(memberRow(m));
    // leave / delete
    const foot = h('div', 'gp-sec gp-danger');
    foot.append(btn(tr('Leave group'), 'pill danger', async () => {
      if (!(await ui.confirmBox(tr('Leave the group?'), g.role === 'owner' ? tr('You own it: the oldest admin (or member) takes over.') : tr('You can be added again by a member.'), tr('Leave'), tr('Stay')))) return;
      try { await api.leaveGroup(g.id); d.close(); hooks.left(g.id); } catch (e) { ui.toast((e as Error).message); }
    }));
    if (g.role === 'owner') foot.append(btn(tr('Delete group'), 'pill danger', async () => {
      if (!(await ui.confirmBox(tr('Delete the group?'), tr('Its messages are deleted for everyone.'), tr('Delete'), tr('Keep')))) return;
      try { await api.deleteGroup(g.id); d.close(); hooks.left(g.id); } catch (e) { ui.toast((e as Error).message); }
    }));
    d.replaceChildren(closeX(d), top, notif, ...(perms.childElementCount ? [perms] : []), mem, foot, pic.file);
  };
  const memberRow = (m: GroupMemberView) => {
    const r = h('div', `gp-mrow${m.online ? ' on' : ''}`);
    const t = h('span', 'gp-t');
    const nm = h('b', '', m.name);
    // (their whole profile above this page — the small card would open under it)
    if (m.id !== hooks.me()) { nm.classList.add('plink'); nm.setAttribute('role', 'button'); nm.tabIndex = 0; nm.onclick = () => hooks.view(m.id); }
    t.append(nm, m.status ? ui.statusLine(m.status) : h('small', '', m.online ? tr('Online') : `@${m.login}`));
    r.append(avatar(m.pic, m.name), t);
    if (ROLE_LABEL[m.role]) r.append(h('span', `gp-role ${m.role}`, tr(ROLE_LABEL[m.role])));
    // what you can do to them
    const acts: Array<[string, () => Promise<void>, boolean?]> = [];
    if (m.id !== hooks.me()) {
      acts.push([tr('Message'), async () => { d.close(); hooks.message(m.id); }]);
      if (g.role === 'owner') {
        acts.push(m.role === 'admin' ? [tr('Remove admin'), async () => { g = (await api.setGroupRole(g.id, m.id, 'member')).group; }] : [tr('Make admin'), async () => { g = (await api.setGroupRole(g.id, m.id, 'admin')).group; }]);
        acts.push([tr('Make owner'), async () => {
          if (!(await ui.confirmBox(tr('Make them the owner?'), tr('You stay in the group as an admin.'), tr('Make owner'), tr('Cancel')))) return;
          g = (await api.setGroupRole(g.id, m.id, 'owner')).group;
        }]);
      }
      if (g.role === 'owner' || (g.role === 'admin' && m.role === 'member')) acts.push([tr('Remove from group'), async () => {
        if (!(await ui.confirmBox(tr('Remove them from the group?'), m.name, tr('Remove'), tr('Cancel')))) return;
        g = (await api.removeFromGroup(g.id, m.id)).group;
      }, true]);
    }
    if (acts.length) {
      const more = btn('⋯', 'pill gp-more');
      more.setAttribute('aria-label', tr('More'));
      more.onclick = (e) => {
        e.stopPropagation();
        document.querySelector('.gp-menu')?.remove();
        const menu = h('div', 'gp-menu');
        for (const [label, fn, danger] of acts) menu.append(btn(label, danger ? 'danger' : '', async () => { menu.remove(); try { await fn(); hooks.changed(g); render(); } catch (err) { ui.toast((err as Error).message); } }));
        r.append(menu);
        setTimeout(() => document.addEventListener('pointerdown', function away(ev) { if (!menu.contains(ev.target as Node)) { menu.remove(); document.removeEventListener('pointerdown', away, true); } }, true));
      };
      r.append(more);
    }
    return r;
  };
  const addMembers = async () => {
    let friends: Friend[] = [];
    try { friends = await friendsNow(); } catch (e) { ui.toast((e as Error).message); return; }
    let ids: string[] = [];
    const go = btn(tr('Add'), 'pill primary big');
    const back = btn(`← ${tr('Back')}`, 'pill', () => render());
    const picker = friendPicker(friends, new Set(g.members.map((m) => m.id)), (x) => { ids = x; go.disabled = !ids.length; });
    go.disabled = true;
    go.onclick = async () => { go.disabled = true; try { g = (await api.addToGroup(g.id, ids)).group; hooks.changed(g); render(); } catch (e) { ui.toast((e as Error).message); go.disabled = false; } };
    const foot = h('div', 'gp-foot'); foot.append(back, go);
    d.replaceChildren(closeX(d), h('h3', '', tr('Add members')), picker, foot);
  };
  render();
}
