import type { SetupItem, SetupCardProps } from "../../types/Setup";


const CATEGORY_ACCENT_GRADIENTS: Record<SetupItem["category"], string> = {
  "Componentes": "from-violet-500 to-purple-600",     // Degradado Morado
  "Periféricos": "from-blue-400 to-cyan-500",       // Degradado Celeste/Azul
  "Audio y Video": "from-rose-400 to-pink-600",     // Degradado Rosa/Rojo
  "Software": "from-emerald-400 to-teal-500",         // Degradado Verde
};

const SetupCard = ({ item }: SetupCardProps) => {
  const accentGradient = CATEGORY_ACCENT_GRADIENTS[item.category];

  const cardContent = (
    <>
      <div className={`h-[3px] w-full bg-gradient-to-r ${accentGradient}`} />

      <div className="p-5 flex items-center flex-1">
        <h3 className={`text-sm font-semibold text-gray-800 leading-snug transition-colors duration-200
          ${item.affiliateUrl ? 'group-hover:text-blue-600' : 'group-hover:text-gray-900'}`}>
          {item.name}
        </h3>
      </div>
    </>
  );

  const baseClasses = `group relative bg-white border border-gray-150 rounded-2xl overflow-hidden
    hover:border-gray-300 hover:-translate-y-1 hover:shadow-lg
    transition-all duration-300 flex flex-col h-full`;

  if (item.affiliateUrl) {
    return (
      <a
        href={item.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} cursor-pointer`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className={`${baseClasses} cursor-default`}>
      {cardContent}
    </div>
  );
};

export default SetupCard;
