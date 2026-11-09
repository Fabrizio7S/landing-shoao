import logo from "../../assets/images/brand/shoao-logo.svg";
import logoDark from "../../assets/images/brand/shoao-logo-dark.svg";
import SocialLinks from "../ui/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100 dark:bg-[#0b0d12] dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <img
            src={logo}
            alt="Shoao"
            className="h-8 w-auto object-contain dark:hidden"
          />
          <img
            src={logoDark}
            alt="Shoao"
            className="h-8 w-auto object-contain hidden dark:block"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400">© {currentYear} Shoao. Todos los derechos reservados.</p>
        </div>

        {/* Right Side: Social Networks (lista en src/data/socials.ts) */}
        <SocialLinks variant="footer" />

      </div>
    </footer>
  );
};

export default Footer;
