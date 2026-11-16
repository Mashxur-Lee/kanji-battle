const L = require('./lib.cjs');
(async () => {
  const av = JSON.parse(L.fs.readFileSync(process.argv[2], 'utf8'));
  for (const [n, image] of Object.entries(av)) { const me = await L.login(n); const r = await L.api('PUT', '/api/me/avatar', { image }, me.token); console.log(n, r.error || 'ok'); }
  process.exit(0);
})();
