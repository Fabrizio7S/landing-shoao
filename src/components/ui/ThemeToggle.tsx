import { useState } from "react";

type Tema = "claro" | "oscuro";

const temaActual = (): Tema =>
  document.documentElement.classList.contains("dark") ? "oscuro" : "claro";

/** Botón "Claro | Oscuro". Guarda la elección del visitante en su navegador. */
const ThemeToggle = () => {
  const [tema, setTema] = useState<Tema>(temaActual);

  const elegir = (nuevo: Tema) => {
    document.documentElement.classList.toggle("dark", nuevo === "oscuro");
    try {
      localStorage.setItem("tema", nuevo);
    } catch {
      // Navegación privada o almacenamiento bloqueado: solo dura esta visita.
    }
    setTema(nuevo);
  };

  const opcion = (valor: Tema, texto: string, icono: string) => (
    <button
      type="button"
      onClick={() => elegir(valor)}
      aria-pressed={tema === valor}
      aria-label={texto}
      title={`Modo ${texto.toLowerCase()}`}
      className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
        tema === valor
          ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
          : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      }`}
    >
      <span aria-hidden="true">{icono}</span>
      {/* En celulares solo el icono, para que quepa junto al menú. */}
      <span className="hidden sm:inline">{texto}</span>
    </button>
  );

  return (
    <div
      role="group"
      aria-label="Tema de la página"
      className="inline-flex items-center p-0.5 rounded-full border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
    >
      {opcion("claro", "Claro", "☀")}
      {opcion("oscuro", "Oscuro", "☾")}
    </div>
  );
};

export default ThemeToggle;
