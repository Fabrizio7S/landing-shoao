# Estructura del Código Fuente (`src/`)

Este documento detalla el propósito de cada una de las carpetas dentro de `src/` para mantener la organización y buenas prácticas en el proyecto.

## Carpetas Principales

### 📂 `assets/`
Contiene todos los recursos estáticos del proyecto que son importados directamente por los archivos de código (procesados por Vite).
* 📁 `images/`: Logotipos, fotografías e imágenes generales (.png, .jpg, .webp).
* 📁 `icons/`: Iconos en formato SVG o componentes de iconos reutilizables.

### 📂 `components/`
Contiene todos los componentes de React. Está dividido de forma jerárquica para mantener la reutilización y el orden:
* 📁 `ui/`: Componentes atómicos o básicos muy reutilizables que no tienen lógica compleja de negocio (ej. `Button.tsx`, `Card.tsx`, `Input.tsx`).
* 📁 `layout/`: Estructuras fijas y compartidas de la página (ej. `Navbar.tsx`, `Footer.tsx`).
* 📁 `sections/`: Secciones principales y específicas de la landing page (ej. `Hero.tsx`, `Videos.tsx`).

### 📂 `hooks/`
Espacio dedicado para almacenar tus **Custom Hooks** de React (funciones personalizadas que encapsulan lógica del ciclo de vida y estado de React, ej. `useScroll.ts`, `useWindowSize.ts`).

### 📂 `utils/`
Contiene funciones helper o utilitarias independientes de React. Son funciones puras que realizan cálculos, formateos o validaciones comunes (ej. formateadores de fechas, validadores de formularios).

---

## Archivos Principales en Raíz

* 📄 `App.tsx`: Componente principal que orquesta y renderiza las diferentes secciones de la landing page.
* 📄 `main.tsx`: Punto de entrada de la aplicación de React donde se monta el árbol de componentes en el DOM.
* 📄 `index.css`: Archivo de estilos CSS global (aquí se configuran Tailwind CSS y estilos base).
