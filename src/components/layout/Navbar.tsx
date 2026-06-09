import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" w-full bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        
        <ul className="flex gap-8 text-lg">
          <li>
            <Link to="/" className="hover:underline underline-offset-4">
              Home
            </Link>
          </li>

          <li>
            <a href="#" className="hover:underline underline-offset-4">
              Videos
            </a>
          </li>

          <li>
            <Link to="/setup" className="hover:underline underline-offset-4">
              Setup
            </Link>
          </li>

          <li>
            <a href="#" className="hover:underline underline-offset-4">
                Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
