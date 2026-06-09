import imagen from "../../assets/imagen.jpg";
const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 items-center gap-10">

        <div className="flex justify-center">
          <div className="relative">
           
            <img
              src={imagen}
              alt="imagen.jpg"
              className="relative rounded-full w-80 h-80 object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="text-7xl font-bold text-gray-800 mb-6 py-10">
            Welcome Mapleanos
          </h1>

          <a 
          href="./Componentes/Videos"
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Watch Videos
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;