import imagen from "../../assets/imagen.jpg";

const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        <div className="flex justify-center">
          <div className="relative">

            <div className="absolute inset-0 bg-yellow-300 rounded-full scale-110 -z-10"></div>

            <img
              src={imagen}
              alt="Jhohao"
              className="w-80 h-80 lg:w-[450px] lg:h-[450px] object-cover rounded-full"
            />
          </div>
        </div>

        <div>
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-none mb-8">
            Welcome
            <br />
            Mapleanos 
          </h1>

          <p className="text-2xl text-gray-700 leading-relaxed max-w-xl mb-10">
            Mi nombre es Jhohao jugador veterano 
            que hace videos 🍁
          </p>

          <a
            href="#bosses"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
          >
            Watch Videos
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;