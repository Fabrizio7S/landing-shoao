import type { CSSProperties } from "react";
import { socialsData } from "../../data/socials";

interface SocialLinksProps {
  /** "hero": botones redondos grandes. "footer": iconos pequeños sin fondo. */
  variant: "hero" | "footer";
  className?: string;
}

/** Iconos de las redes de Shoao (lista en src/data/socials.ts). */
const SocialLinks = ({ variant, className = "" }: SocialLinksProps) => {
  const linkClass =
    variant === "hero"
      ? "flex items-center justify-center w-12 h-12 rounded-full shadow-sm transition-all duration-300 " +
        "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 " +
        "hover:-translate-y-0.5 hover:bg-(--brand) hover:text-white dark:hover:bg-(--brand) dark:hover:text-white"
      : "text-gray-400 dark:text-gray-500 transition-colors duration-200 hover:text-(--brand) dark:hover:text-(--brand-dark)";

  return (
    <ul className={`flex flex-wrap items-center justify-center ${variant === "hero" ? "gap-4" : "gap-5"} ${className}`}>
      {socialsData.map((social) => (
        <li key={social.name}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            className={linkClass}
            style={
              {
                "--brand": social.color,
                // TikTok es negro: en modo oscuro se usa blanco para que se vea.
                "--brand-dark": social.color === "#000000" ? "#ffffff" : social.color,
              } as CSSProperties
            }
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={variant === "hero" ? "w-6 h-6" : "w-5 h-5 sm:w-6 sm:h-6"}>
              <path d={social.icon} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
