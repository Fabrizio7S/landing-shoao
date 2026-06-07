
const Navbar = () => {
  return (
    <nav className=" w-full bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        
        <ul className="flex gap-8 text-lg">
          <li>
            <a href="#" className="hover:underline underline-offset-4">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline underline-offset-4">
              Videos
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline underline-offset-4">
              Service
            </a>
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
