# Regenerates the light theme rules (0.9.9.7) from the dark ones in public/style.css: python3 scripts/lightgen.py
# Each dark background becomes the same hue near white, light text becomes var(--text); hand-written overrides follow the block.
import re, sys
import os
P=os.path.join(os.path.dirname(__file__), '..', 'public', 'style.css')
css=open(P).read()
START='/* ── light theme: generated from the dark rules (scripts/lightgen) ── */'
END='/* ── end of generated light rules ── */'
if START in css: css=css[:css.index(START)]+css[css.index(END)+len(END):]
base=css[:css.index('/* ══ 0.9.9.7: light theme')] if '/* ══ 0.9.9.7: light theme' in css else css
NAMED={'#fff':(255,255,255),'#000':(0,0,0),'white':(255,255,255),'black':(0,0,0)}
def parse(c):
    c=c.strip().lower()
    if c in NAMED: return NAMED[c]+(1.0,)
    m=re.fullmatch(r'#([0-9a-f]{3,8})',c)
    if m:
        h=m.group(1)
        if len(h) in (3,4): h=''.join(x*2 for x in h)
        r,g,b=int(h[0:2],16),int(h[2:4],16),int(h[4:6],16); a=int(h[6:8],16)/255 if len(h)==8 else 1
        return (r,g,b,a)
    m=re.fullmatch(r'rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)',c)
    if m: return (float(m.group(1)),float(m.group(2)),float(m.group(3)),float(m.group(4)) if m.group(4) else 1)
    return None
COL=r'#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|\bwhite\b|\bblack\b'
lum=lambda r,g,b:(0.2126*r+0.7152*g+0.0722*b)/255
def sat(r,g,b): mx,mn=max(r,g,b),min(r,g,b); return 0 if mx==0 else (mx-mn)/mx
def lighten(m):
    p=parse(m.group(0))
    if not p: return m.group(0)
    r,g,b,a=p
    if lum(r,g,b)>=0.3 or a<0.15: return m.group(0)
    # a dark tone → the same hue, near white
    k=0.9; R,G,B=[round(x+(255-x)*k) for x in (r,g,b)]
    return f'rgba({R}, {G}, {B}, {max(a,.82):.2f})'.replace('0.','.')
def is_dark_bg(v):
    cs=[parse(x) for x in re.findall(COL,v)]; cs=[c for c in cs if c]
    return bool(cs) and any(lum(*c[:3])<0.3 and c[3]>=0.3 for c in cs) and not any(lum(*c[:3])>=0.45 and sat(*c[:3])>0.35 and c[3]>0.5 for c in cs)
def is_vivid_bg(v):
    cs=[parse(x) for x in re.findall(COL,v)]; cs=[c for c in cs if c]
    return any(sat(*c[:3])>0.35 and lum(*c[:3])>0.2 and c[3]>0.5 for c in cs) or 'var(--accent' in v or 'var(--good' in v or 'var(--bad' in v
SKIP=re.compile(r'svg|canvas|sprite|scene|orb\b|::backdrop|\.flame|glyph|stroke|tt-|kanji-fx|#bg\b|\.bg-|\.dragon|\.wizard|\.combo|@keyframes|\.gk|\.fx-|\.spark|\.hp-|\.mana|::before|::after|\.arena|#battle .stage|\.ach |\.ach-|\.badge|\.ach\b|\.ach-pin')
out=[]
def walk(text, media=None):
    i=0
    while i<len(text):
        j=text.find('{',i)
        if j<0: break
        sel=text[i:j].split('}')[-1].strip()
        if sel.startswith('@media') or sel.startswith('@supports'):
            depth=1;k=j+1
            while depth: 
                if text[k]=='{': depth+=1
                elif text[k]=='}': depth-=1
                k+=1
            walk(text[j+1:k-1], sel); i=k; continue
        if sel.startswith('@keyframes') or sel.startswith('@font-face'):
            depth=1;k=j+1
            while depth:
                if text[k]=='{': depth+=1
                elif text[k]=='}': depth-=1
                k+=1
            i=k; continue
        k=text.find('}',j); body=text[j+1:k]; i=k+1
        sel=re.sub(r'/\*.*?\*/','',sel,flags=re.S).strip()
        if not sel or SKIP.search(sel) or ':root' in sel: continue
        decls=[d.strip() for d in re.sub(r'/\*.*?\*/','',body,flags=re.S).split(';') if ':' in d]
        props={}
        for d in decls:
            n,v=d.split(':',1); props[n.strip()]=v.strip()
        bg=props.get('background',props.get('background-color',''))
        new=[]
        dark=is_dark_bg(bg) if bg else False
        if dark:
            nb=re.sub(COL,lighten,bg)
            new.append(f'background: {nb}')
        vivid=is_vivid_bg(bg) if bg and not dark else False
        col=props.get('color')
        if col:
            p=parse(col)
            if p and lum(*p[:3])>0.72 and p[3]>0.4 and not vivid and (dark or not bg):
                new.append('color: var(--text)')
        for bn in ('border','border-color','border-top','border-bottom'):
            if bn in props:
                v=props[bn]
                cs=[parse(x) for x in re.findall(COL,v)]
                if any(c and lum(*c[:3])<0.3 for c in cs): new.append(f'{bn}: '+re.sub(COL,'var(--line)',v))
                elif dark and any(c and lum(*c[:3])>0.85 and c[3]<0.4 for c in cs): new.append(f'{bn}: '+re.sub(COL,'rgba(60, 50, 120, .16)',v))
        if not new: continue
        if dark: new.append('--text: #1d1838; --muted: #5d5880; --accent: #6b3fd6; --accent2: #0b7d9c; --gold: #a26300; --good: #12895a; --bad: #c8284a')
        if dark and not any(x.startswith('color:') for x in new): new.append('color: var(--text)')  # a light panel: dark text inside (0.9.9.7.1)
        sels=', '.join(':root[data-theme="light"] '+s.strip() for s in sel.split(','))
        rule=f'{sels} {{ {"; ".join(new)}; }}'
        out.append(f'{media} {{ {rule} }}' if media else rule)
walk(base)
gen=START+'\n'+'\n'.join(out)+'\n'+END+'\n'
# generated rules go before the hand-written light block so those win
idx=css.index('/* ══ 0.9.9.7: light theme')
css=css[:idx]+gen+css[idx:]
open(P,'w').write(css)
print(len(out),'rules')
