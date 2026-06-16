import type { SetupCardProps } from "../../types/Setup";

const SetupCard = ({ item }: SetupCardProps) => {
  const isAffiliate = Boolean(item.affiliateUrl);

  const cardContent = (
    <div className="px-5 py-4 flex items-center justify-center min-h-[72px] text-center">
      <h3
        className={`
          text-sm sm:text-[15px] font-semibold tracking-tight leading-snug transition-colors duration-200
          ${isAffiliate ? "text-black group-hover:text-gray-700" : "text-gray-700"}
        `}
      >
        {item.name}
      </h3>
    </div>
  );

  const affiliateStyle = `
    group relative bg-white border border-black rounded-2xl overflow-hidden
    shadow-sm transition-all duration-200 flex flex-col h-full
    hover:-translate-y-1 hover:shadow-lg hover:border-gray-800
    w-full sm:w-[280px]
  `;

  const normalStyle = `
    group relative bg-white border border-gray-200 rounded-2xl overflow-hidden
    shadow-sm transition-all duration-200 flex flex-col h-full
    w-full sm:w-[280px]
  `;

  if (isAffiliate) {
    return (
      <a
        href={item.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={affiliateStyle}
      >
  
        <div className="h-[2px] w-full bg-black/90" />

        {cardContent}
      </a>
    );
  }

  return (
    <div className={normalStyle}>

      <div className="h-[2px] w-full bg-gray-200" />

      {cardContent}
    </div>
  );
};

export default SetupCard;