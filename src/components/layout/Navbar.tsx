import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shoao_v1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">

        {/* LOGO (AHORA ES CLICKABLE) */}
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Shoao"
            className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/setup" className="hover:text-blue-600 transition">
              Setup
            </Link>
          </li>
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
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