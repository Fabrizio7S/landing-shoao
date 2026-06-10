import { useState } from "react";
import { setupData } from "../data/setup";
import SetupCard from "../components/ui/SetupCard";

type CategoryFilter = "Periféricos" | "Software" | "Audio y Video";

const Setup = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Periféricos");

  // Filtramos los datos según la categoría seleccionada
  const filteredData = setupData.filter(item => item.category === activeCategory);

  const categories: CategoryFilter[] = ["Periféricos", "Audio y Video", "Software"];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-32">
        {/* Cabecera */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            PC Setup & Equipamiento
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            El hardware, periféricos y herramientas que utilizo diariamente para jugar, streamear y crear contenido de MapleStory.
          </p>
        </div>

        {/* Barra de Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Componentes */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((item) => (
              <SetupCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 font-medium">No se encontraron componentes en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setup;
