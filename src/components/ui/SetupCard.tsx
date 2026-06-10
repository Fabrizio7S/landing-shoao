import type { SetupItem } from "../../types/SetupItem";

interface SetupCardProps {
  item: SetupItem;
}

const SetupCard = ({ item }: SetupCardProps) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-150 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        {/* Categoría */}
        <span className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2 block">
          {item.category}
        </span>

        {/* Nombre */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {item.name}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
          {item.description}
        </p>

        {/* Botón de Afiliado */}
        {item.affiliateUrl && (
          <a
            href={item.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl font-semibold bg-gray-900 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 text-center text-sm cursor-pointer"
          >
            Ver Producto &rarr;
          </a>
        )}
      </div>
    </div>
  );
};

export default SetupCard;
