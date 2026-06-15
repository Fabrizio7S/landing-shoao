import type { SetupItem, SetupCardProps } from "../../types/Setup";


const CATEGORY_ACCENT_GRADIENTS: Record<SetupItem["category"], string> = {
  "Componentes": "from-violet-500 to-purple-600",     // Degradado Morado
  "Periféricos": "from-blue-400 to-cyan-500",       // Degradado Celeste/Azul
  "Audio y Video": "from-rose-400 to-pink-600",     // Degradado Rosa/Rojo
  "Software": "from-emerald-400 to-teal-500",         // Degradado Verde
};

const SetupCard = ({ item }: SetupCardProps) => {
  const accentGradient = CATEGORY_ACCENT_GRADIENTS[item.category];

  return (
    <div
      className="group relative bg-white border border-gray-150 rounded-2xl overflow-hidden
        hover:border-gray-300 hover:-translate-y-1 hover:shadow-lg
        transition-all duration-300 flex flex-col cursor-default"
    >

      <div className={`h-[3px] w-full bg-gradient-to-r ${accentGradient}`} />

      <div className="p-5 flex items-center flex-1">
        <h3 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-gray-900 transition-colors duration-200">
          {item.name}
        </h3>
      </div>

      {item.affiliateUrl && (
        <div className="px-5 pb-5">
          <a
            href={item.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full py-2 px-4 rounded-xl text-center text-xs font-bold
              bg-gradient-to-r ${accentGradient} text-white
              hover:opacity-90 hover:shadow-lg transition-all duration-200 cursor-pointer`}
          >
            Ver Producto &rarr;
          </a>
        </div>
      )}
    </div>
  );
};

export default SetupCard;
