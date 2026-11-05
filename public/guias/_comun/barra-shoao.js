/*
 * Barra superior de Shoao para las guías de bosses.
 * Uso: poner esta línea justo después de <body> en el index.html de cada guía:
 *   <script src="/guias/_comun/barra-shoao.js"></script>
 * Si cambias el logo o el diseño aquí, se actualiza en todas las guías.
 * En páginas con <html lang="en"> muestra los textos en inglés.
 * También pone el icono de la pestaña (/favicon.png) si la página no tiene uno.
 *
 * Modo oscuro: botón Claro | Oscuro. Usa la misma elección que la página
 * principal (localStorage "tema") y, si nunca eligió, el modo del sistema.
 * Los colores oscuros de la guía se cambian aquí abajo (CSS_OSCURO) sin
 * tocar el HTML de la guía: las guías usan variables (--bg, --ink, ...).
 */
(function () {
  var root = document.documentElement;
  var en = (root.lang || "").toLowerCase().indexOf("en") === 0;

  // 1. Aplicar el tema guardado ANTES de que se pinte la guía (sin parpadeo).
  var tema = null;
  try { tema = localStorage.getItem("tema"); } catch (e) {}
  if (tema === "oscuro" || (!tema && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches)) {
    root.classList.add("dark");
  }

  var css =
    ".site{background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.06)}\n" +
    ".site-in{max-width:1280px;margin:0 auto;padding:16px 32px;display:flex;align-items:center;justify-content:space-between;gap:12px}\n" +
    ".site-logo{display:block;line-height:0;flex:none}\n" +
    ".site-logo img{height:48px;width:auto;object-fit:contain}\n" +
    ".site-logo .logo-dark{display:none}\n" +
    ".site-right{display:flex;align-items:center;gap:12px}\n" +
    ".site-back{display:inline-block;white-space:nowrap;text-decoration:none;color:var(--ink);font-size:16px;font-weight:500;padding:8px 14px;border-radius:999px;border:1px solid var(--line)}\n" +
    ".site-back:hover{background:var(--bg)}\n" +
    ".site-theme{display:inline-flex;align-items:center;padding:2px;border-radius:999px;border:1px solid var(--line);background:var(--surface)}\n" +
    ".site-theme button{display:inline-flex;align-items:center;gap:4px;border:0;background:none;cursor:pointer;font:600 14px/1.4 var(--body,sans-serif);color:var(--muted);padding:4px 12px;border-radius:999px}\n" +
    ".site-theme button:hover{color:var(--ink)}\n" +
    ".site-theme button[aria-pressed=true]{background:var(--ink);color:var(--surface)}\n" +
    "@media (max-width:640px){\n" +
    "  .site-in{padding:12px 16px}\n" +
    "  .site-logo img{height:40px}\n" +
    "  .site-right{gap:8px}\n" +
    "  .site-back{font-size:14px;padding:6px 12px}\n" +
    "  .site-back .long,.site-theme .t{display:none}\n" +
    "  .site-theme button{padding:4px 10px}\n" +
    "}\n";

  // 2. Colores del modo oscuro para la barra y para las guías.
  var CSS_OSCURO =
    "html.dark{--bg:#0b0d12;--surface:#161a22;--ink:#e8eaef;--muted:#9aa1ad;--line:#2a2f3a;--silver:#4a5160;--steel:#b9c0cc;--red:#ff6b7f;--purple:#b08cf0;color-scheme:dark}\n" +
    "html.dark body{background:var(--bg);color:var(--ink)}\n" +
    "html.dark .site{background:#0b0d12;box-shadow:none;border-bottom:1px solid var(--line)}\n" +
    "html.dark .site-logo .logo-light{display:none}\n" +
    "html.dark .site-logo .logo-dark{display:block}\n" +
    "html.dark .nav{background:rgba(11,13,18,.86)}\n" +
    "html.dark .tri span:nth-child(3),html.dark .tri span:nth-child(2):last-child{background:#1e232d}\n" +
    "html.dark .tag.purple{border-color:#4b3a6e;background:#221a33}\n" +
    "html.dark .tag.red{border-color:#6e2a36;background:#2e161b}\n" +
    "html.dark .tag.silver{background:#1e232d}\n" +
    "html.dark figure video,html.dark figure img{background:var(--surface)}\n" +
    "html.dark .sysmsg{background:#1e232d}\n" +
    "html.dark th{background:#1b1f28}\n" +
    "html.dark .verify::after{background:#262b36}\n";

  var t = en
    ? { home: "Shoao, go to home page", back: "← Back<span class=\"long\">&nbsp;to guides</span>", grupo: "Page theme", claro: "Light", oscuro: "Dark" }
    : { home: "Shoao, ir al inicio", back: "← Volver<span class=\"long\">&nbsp;a guías</span>", grupo: "Tema de la página", claro: "Claro", oscuro: "Oscuro" };

  var html =
    "<header class=\"site\"><div class=\"site-in\">" +
    "<a class=\"site-logo\" href=\"/\" aria-label=\"" + t.home + "\">" +
    "<img class=\"logo-light\" src=\"/guias/_comun/shoao-logo.svg\" alt=\"Shoao\" width=\"397\" height=\"120\">" +
    "<img class=\"logo-dark\" src=\"/guias/_comun/shoao-logo-dark.svg\" alt=\"Shoao\" width=\"397\" height=\"120\">" +
    "</a>" +
    "<div class=\"site-right\">" +
    "<div class=\"site-theme\" role=\"group\" aria-label=\"" + t.grupo + "\">" +
    "<button type=\"button\" data-tema=\"claro\" aria-label=\"" + t.claro + "\" title=\"" + t.claro + "\"><span aria-hidden=\"true\">☀</span><span class=\"t\">" + t.claro + "</span></button>" +
    "<button type=\"button\" data-tema=\"oscuro\" aria-label=\"" + t.oscuro + "\" title=\"" + t.oscuro + "\"><span aria-hidden=\"true\">☾</span><span class=\"t\">" + t.oscuro + "</span></button>" +
    "</div>" +
    "<a class=\"site-back\" href=\"/#bosses\">" + t.back + "</a>" +
    "</div></div></header>";

  // Icono de la pestaña (el mismo de la página principal) si la guía no trae uno.
  if (!document.querySelector('link[rel~="icon"]')) {
    var icon = document.createElement("link");
    icon.rel = "icon";
    icon.type = "image/png";
    icon.href = "/favicon.png";
    document.head.appendChild(icon);
  }
  var style = document.createElement("style");
  style.textContent = css + CSS_OSCURO;
  document.head.appendChild(style);
  var me = document.currentScript;
  if (me) { me.insertAdjacentHTML("afterend", html); }
  else { document.body.insertAdjacentHTML("afterbegin", html); }

  // 3. Botón Claro | Oscuro.
  var botones = document.querySelectorAll(".site-theme button");
  function marcar() {
    var oscuro = root.classList.contains("dark");
    for (var i = 0; i < botones.length; i++) {
      botones[i].setAttribute("aria-pressed", String((botones[i].getAttribute("data-tema") === "oscuro") === oscuro));
    }
  }
  for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
      var nuevo = this.getAttribute("data-tema");
      root.classList.toggle("dark", nuevo === "oscuro");
      try { localStorage.setItem("tema", nuevo); } catch (e) {}
      marcar();
    });
  }
  marcar();
})();
