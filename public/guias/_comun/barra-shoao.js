/*
 * Barra superior de Shoao para las guías de bosses.
 * Uso: poner esta línea justo después de <body> en el index.html de cada guía:
 *   <script src="/guias/_comun/barra-shoao.js"></script>
 * Si cambias el logo o el diseño aquí, se actualiza en todas las guías.
 */
(function () {
  var css = ".site{background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.06)}\n.site-in{max-width:1280px;margin:0 auto;padding:16px 32px;display:flex;align-items:center;justify-content:space-between;gap:12px}\n.site-logo{display:block;line-height:0}\n.site-logo img{height:48px;width:auto;object-fit:contain}\n.site-back{display:inline-block;white-space:nowrap;text-decoration:none;color:var(--ink);font-size:16px;font-weight:500;padding:8px 14px;border-radius:999px;border:1px solid var(--line)}\n.site-back:hover{background:var(--bg)}\n@media (max-width:640px){\n  .site-in{padding:12px 16px}\n  .site-logo img{height:40px}\n  .site-back{font-size:14px;padding:6px 12px}\n  .site-back .long{display:none}\n}\n";
  var html = "<header class=\"site\"><div class=\"site-in\"><a class=\"site-logo\" href=\"/\" aria-label=\"Shoao, ir al inicio\"><img src=\"/guias/_comun/shoao-logo.png\" alt=\"Shoao\" width=\"543\" height=\"193\"></a><a class=\"site-back\" href=\"/#bosses\">← Volver<span class=\"long\">&nbsp;a guías</span></a></div></header>";
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
  var me = document.currentScript;
  if (me) { me.insertAdjacentHTML("afterend", html); }
  else { document.body.insertAdjacentHTML("afterbegin", html); }
})();
