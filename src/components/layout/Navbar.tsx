import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <img
          src="/src/assets/shoao_v1.png"
          alt="Shoao"
          className="h-12 w-auto object-contain"
        />

        {/* Menu */}
        <ul className="flex gap-10 text-lg font-medium">
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
      </div>
    </nav>
  );
};

export default Navbar;
