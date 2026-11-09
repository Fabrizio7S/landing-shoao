import type { Boss } from "../../types/Boss";

interface BossCardProps {
  boss: Boss;
  onClick?: (boss: Boss) => void;
}

const BossCard = ({ boss, onClick }: BossCardProps) => {
  const hasGuide = Boolean(boss.videoId || boss.guideUrl);
  const className = `block relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ${
    hasGuide ? "cursor-pointer hover:scale-105" : ""
  }`;

  const content = (
    <>
      <img
        src={boss.image}
        alt={boss.name}
        width={422}
        height={500}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover transition-all duration-300 ${
          hasGuide
            ? "brightness-125 saturate-150 contrast-110"
            : "grayscale opacity-50"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
        <h3 className="text-white font-bold text-lg p-3 drop-shadow-lg">
          {boss.name}
        </h3>
      </div>

      {!hasGuide && (
        <div className="absolute top-2 right-2 bg-gray-900/90 text-white text-xs font-semibold px-2 py-1 rounded">
          Próximamente
        </div>
      )}
    </>
  );

  // Guía escrita: enlace normal (<a href>) para que Google pueda seguirlo
  // y encontrar la guía desde la portada.
  if (boss.guideUrl) {
    return (
      <a href={boss.guideUrl} className={className} aria-label={`Guía de ${boss.name}`}>
        {content}
      </a>
    );
  }

  return (
    <div onClick={() => hasGuide && onClick?.(boss)} className={className}>
      {content}
    </div>
  );
};

export default BossCard;
