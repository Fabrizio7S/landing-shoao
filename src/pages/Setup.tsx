import { useState } from "react";
import { setupData } from "../data/setup";
import SetupCard from "../components/ui/SetupCard";

type CategoryFilter = "Componentes" | "Periféricos" | "Audio y Video" | "Software";

const categoryMeta: Record<CategoryFilter, { gradient: string; activeBg: string; activeText: string; dot: string }> = {
  Componentes: {
    gradient: "from-violet-500 to-purple-600",
    activeBg: "bg-gradient-to-r from-violet-500 to-purple-600",
    activeText: "text-white",
    dot: "bg-purple-400",
  },
  "Periféricos": {
    gradient: "from-blue-400 to-cyan-500",
    activeBg: "bg-gradient-to-r from-blue-400 to-cyan-500",
    activeText: "text-white",
    dot: "bg-cyan-400",
  },
  "Audio y Video": {
    gradient: "from-rose-400 to-pink-600",
    activeBg: "bg-gradient-to-r from-rose-400 to-pink-600",
    activeText: "text-white",
    dot: "bg-pink-400",
  },
  Software: {
    gradient: "from-emerald-400 to-teal-500",
    activeBg: "bg-gradient-to-r from-emerald-400 to-teal-500",
    activeText: "text-white",
    dot: "bg-emerald-400",
  },
};

const Setup = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Componentes");

  const filteredData = setupData.filter(item => item.category === activeCategory);
  const categories: CategoryFilter[] = ["Componentes", "Periféricos", "Audio y Video", "Software"];

  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-28">

        {/* Cabecera */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            PC Setup &amp; Equipamiento
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            El hardware, periféricos y herramientas que utilizo diariamente para jugar, streamear y crear contenido de MapleStory.
          </p>
        </div>

        {/* Barra de Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const meta = categoryMeta[category];
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-250 cursor-pointer
                  ${isActive
                    ? `${meta.activeBg} ${meta.activeText} shadow-md`
                    : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid de items */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredData.map((item) => (
              <SetupCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 font-medium">No se encontraron items en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setup;
