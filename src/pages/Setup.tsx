import { setupData } from "../data/setup";
import SetupCard from "../components/ui/SetupCard";

type CategoryFilter =
  | "Componentes"
  | "Periféricos"
  | "Audio y Video"
  | "Software";

const CATEGORY_TITLES: Record<CategoryFilter, string> = {
  Componentes: "PC Setup",
  Periféricos: "Peripherals",
  "Audio y Video": "Audio & Video",
  Software: "Software",
};

const Setup = () => {
  const categories: CategoryFilter[] = [
    "Componentes",
    "Periféricos",
    "Audio y Video",
    "Software",
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            PC Setup &amp; Equipamiento
          </h1>
          <p className="text-base text-gray-500 max-w-xl mx-auto font-medium">
            El hardware, periféricos y herramientas que utilizo diariamente.
          </p>
        </div>
        <div className="space-y-20">
          {categories.map((category) => {
            const categoryItems = setupData.filter(
              (item) => item.category === category,
            );

            if (categoryItems.length === 0) return null;

            return (
              <div key={category} className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight text-center">
                  {CATEGORY_TITLES[category]}
                </h2>
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
                  {categoryItems.map((item) => (
                    <SetupCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Setup;
