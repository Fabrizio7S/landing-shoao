import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/brand/shoao-logo.svg";
import logoDark from "../../assets/images/brand/shoao-logo-dark.svg";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm dark:bg-[#0b0d12] dark:shadow-none dark:border-b dark:border-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-3">

        {/* LOGO (clic = inicio). Uno negro para modo claro y uno claro para modo oscuro. */}
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
          <img
            src={logo}
            alt="Shoao"
            className="h-10 sm:h-12 w-auto object-contain cursor-pointer dark:hidden"
          />
          <img
            src={logoDark}
            alt="Shoao"
            className="h-10 sm:h-12 w-auto object-contain cursor-pointer hidden dark:block"
          />
        </Link>

        <div className="flex items-center gap-3 md:gap-10">
          {/* Desktop menu */}
          <ul className="hidden md:flex gap-10 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/setup" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                Setup
              </Link>
            </li>
          </ul>

          <ThemeToggle />

          {/* Mobile button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/setup" onClick={() => setOpen(false)}>
                Setup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
