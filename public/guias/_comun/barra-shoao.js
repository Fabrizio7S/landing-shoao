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
 *
 * Ajustes de diseño para todas las guías (CSS_GUIAS):
 *  - Contenido más ancho (1200 px en vez de 960 px) para que no quede tanto
 *    espacio vacío a los lados en pantallas grandes.
 *  - Videos con la forma correcta: muchos .mp4 vienen exportados con una
 *    proporción de píxel errónea (SAR) y el navegador los mostraba aplastados.
 *    Se fuerza la proporción que dice el HTML (width/height del <video>).
 *  - Menú de secciones en celulares: en dos filas (nombre del boss + idioma
 *    arriba, secciones abajo deslizables) para que el botón de idioma no tape
 *    los enlaces. Los enlaces se meten en un <div class="nav-links">; en
 *    pantallas grandes ese div no cambia nada (display:contents).
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

  // 3. Ajustes de diseño para las guías (ver arriba).
  var CSS_GUIAS =
    "main,.nav-in{max-width:1200px}\n" +
    "main p,main ul,main blockquote,main .callout,main .lead{max-width:80ch}\n" +
    "figure video{object-fit:fill}\n" +
    ".nav-links{display:contents}\n" +
    "@media (max-width:720px){\n" +
    "  html{scroll-padding-top:104px}\n" +
    "  .nav .nav-in{flex-wrap:wrap;overflow:visible;padding:8px 16px 6px;row-gap:6px}\n" +
    "  .nav .lang{position:static;box-shadow:none;margin-left:auto}\n" +
    "  .nav .nav-links{order:1;display:flex;flex-basis:100%;gap:2px;overflow-x:auto;scrollbar-width:none;margin:0 -16px;padding:0 16px 2px;" +
    "-webkit-mask-image:linear-gradient(to right,#000 85%,transparent);mask-image:linear-gradient(to right,#000 85%,transparent)}\n" +
    "  .nav .nav-links::-webkit-scrollbar{display:none}\n" +
    "  .nav .nav-links a{padding:6px 10px;flex:none}\n" +
    "  .nav .nav-links a:last-child{margin-right:32px}\n" +
    "}\n";

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
  style.textContent = css + CSS_OSCURO + CSS_GUIAS;
  document.head.appendChild(style);
  var me = document.currentScript;
  if (me) { me.insertAdjacentHTML("afterend", html); }
  else { document.body.insertAdjacentHTML("afterbegin", html); }

  // Proporción real de cada video, tomada de width/height del HTML.
  function arreglarVideos() {
    var vids = document.querySelectorAll("figure video[width][height]");
    for (var i = 0; i < vids.length; i++) {
      var w = +vids[i].getAttribute("width"), h = +vids[i].getAttribute("height");
      if (w > 0 && h > 0) vids[i].style.aspectRatio = w + " / " + h;
    }
  }
  // Agrupa los enlaces de secciones del menú de la guía (ver arriba).
  function agruparMenu() {
    var nav = document.querySelector(".nav .nav-in");
    if (!nav || nav.querySelector(".nav-links")) return;
    var links = [];
    for (var i = 0; i < nav.children.length; i++) {
      if (nav.children[i].tagName === "A") links.push(nav.children[i]);
    }
    if (!links.length) return;
    var grupo = document.createElement("div");
    grupo.className = "nav-links";
    nav.insertBefore(grupo, links[0]);
    for (var j = 0; j < links.length; j++) grupo.appendChild(links[j]);
  }
  // Datos para Google (título, descripción y dirección oficial). Se ponen aquí
  // para no tener que editar el HTML cada vez que llega una versión nueva de una guía.
  function datosGoogle() {
    var head = document.head;
    if (document.title && !/maplestory/i.test(document.title)) {
      document.title = document.title + (en ? " – MapleStory | Shoao" : " – MapleStory en español | Shoao");
    }
    if (!head.querySelector('meta[name="description"]')) {
      // El párrafo de introducción (".lead"); si no hay, el primer párrafo normal.
      var lead = document.querySelector(".hero .lead") || document.querySelector("main .lead") ||
        document.querySelector("main p:not(.eyebrow)");
      var texto = lead ? lead.textContent.replace(/\s+/g, " ").trim() : "";
      if (texto) {
        if (texto.length > 160) texto = texto.slice(0, 157).replace(/\s+\S*$/, "") + "…";
        var meta = document.createElement("meta");
        meta.name = "description";
        meta.content = texto;
        head.appendChild(meta);
      }
    }
    if (!head.querySelector('link[rel="canonical"]')) {
      var canon = document.createElement("link");
      canon.rel = "canonical";
      canon.href = "https://www.shoaomaple.com" + location.pathname.replace(/index\.html$/, "");
      head.appendChild(canon);
    }
  }
  function alCargar() { arreglarVideos(); agruparMenu(); datosGoogle(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", alCargar);
  else alCargar();

  // 4. Botón Claro | Oscuro.
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
