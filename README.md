# Shoao — www.shoaomaple.com

Landing de Shoao (MapleStory): guías de bosses, servicios, videos y setup.
Hecha con React + Vite + Tailwind. Hosting en Vercel, dominio en GoDaddy.

## Comandos

```bash
npm install       # instalar dependencias (solo la primera vez)
npm run dev       # servidor local en http://localhost:5173
npm run build     # compilar para producción (lo mismo que hace Vercel)
npm run lint      # revisar el código
```

## Estructura

```
landing-shoao/
├── index.html              Página base de React (título, SEO, favicon)
├── vercel.json             Config de Vercel (rutas de React como /setup)
├── vite.config.ts          Config de Vite (+ sirve /guias/<boss>/ y /api en local)
├── api/                    Funciones de Vercel: videos.ts (YouTube), vistas.ts (contador)
├── public/                 Se publica TAL CUAL, sin procesar
│   ├── favicon.png         Icono de la pestaña
│   ├── robots.txt          Permiso para Google + dónde está el sitemap
│   ├── sitemap.xml         Lista de páginas para Google (agregar cada guía nueva)
│   └── guias/              Guías de bosses (páginas HTML independientes)
│       ├── _comun/         Lo que comparten todas las guías
│       │   ├── barra-shoao.js   Barra superior: logo, "Volver a guías" y modo Claro | Oscuro
│       │   ├── shoao-logo.svg
│       │   └── shoao-logo-dark.svg   Logo blanco (modo oscuro)
│       ├── bellona/        → shoaomaple.com/guias/bellona/
│       └── mayrin/         → shoaomaple.com/guias/mayrin/
└── src/                    Código de React
    ├── main.tsx            Punto de entrada
    ├── App.tsx             Rutas (/ y /setup) + Navbar y Footer
    ├── index.css           Estilos globales y Tailwind
    ├── assets/images/
    │   ├── brand/          Logos de Shoao
    │   ├── home/           Imágenes de la portada (Hero)
    │   └── bosses/         Tarjetas de bosses (422×500, nombre-en-minusculas.webp)
    ├── components/
    │   ├── layout/         Navbar, Footer
    │   ├── sections/       Secciones de la home: Hero, Bosses, Services, Videos
    │   └── ui/             Piezas reutilizables: BossCard, VideoCard, SetupCard
    ├── data/               CONTENIDO editable: bosses, services, setup, videos
    ├── pages/              Páginas completas: Home, Setup
    ├── types/              Tipos de TypeScript: Boss, Service, Setup, Video
    ├── hooks/              Custom hooks (vacío por ahora)
    └── utils/              Funciones auxiliares (vacío por ahora)
```

**Regla general:** para cambiar *contenido* (bosses, videos, servicios, setup) solo
se edita `src/data/`. Los componentes solo se tocan para cambiar el *diseño*.

## Cómo agregar o actualizar cosas

### Un boss nuevo (tarjeta)
1. Guarda su imagen en `src/assets/images/bosses/` con nombre en minúsculas y guiones
   (ej. `nuevo-boss.webp`, 422×500 como las demás; en formato WebP pesa ~10 veces menos que PNG).
2. En `src/data/bosses.ts` impórtala y agrega `{ name, image }` en la posición que quieras.
   Sin `videoId` ni `guideUrl` sale en gris con "Próximamente".

### Que una tarjeta abra un video de YouTube
Agrega `videoId: "ID_DEL_VIDEO"` (lo que va después de `watch?v=`).

### Una guía nueva (HTML)
1. Copia la carpeta de la guía a `public/guias/<boss>/` (en minúsculas, sin espacios).
   Dentro debe estar su `index.html` y sus carpetas de imágenes (`m/`, `p/`…) sin cambiarles el nombre.
2. En su `index.html`, justo después de `<body>`, añade:
   ```html
   <script src="/guias/_comun/barra-shoao.js"></script>
   ```
3. En `src/data/bosses.ts`, en ese boss, agrega `guideUrl: "/guias/<boss>/"` (con la barra final).
4. En `public/sitemap.xml` copia los dos bloques `<url>` de otra guía y cambia el nombre
   del boss, para que Google la encuentre. Luego, en Google Search Console, pide su indexación.

### Actualizar una guía existente
Reemplaza el contenido de `public/guias/<boss>/` por la versión nueva y vuelve a
añadir la línea del paso 2. La dirección y la tarjeta no cambian.

## Contador de visitas de las guías

Cada guía muestra debajo del nombre del boss "N personas viendo ahora" y "N visitas"
(sale solo, no hay que hacer nada al agregar una guía nueva).

* Lo pinta `public/guias/_comun/barra-shoao.js` y lo guarda la función `api/vistas.ts`.
* Los datos están en **Upstash Redis**, conectado desde Vercel → Storage.
  Sin esa conexión la web funciona igual, pero el contador no aparece.
* Una visita cuenta 1 vez cada 12 h por navegador. Español e inglés suman juntas.
* En local (`npm run dev`) se guarda en memoria y se reinicia al parar el servidor.

## Publicar

```bash
git add -A
git commit -m "descripción del cambio"
git push origin main
```
Vercel despliega solo al recibir el push en `main`.

## Diseño y tipografías

* **Títulos:** `Outfit` (sans-serif geométrica).
* **Texto:** `Inter` (alta legibilidad en pantalla).
