import imagen from "../../assets/images/home/hero-jhohao.webp";
import SocialLinks from "../ui/SocialLinks";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-[#0b0d12] py-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* IMAGEN */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-300 rounded-full scale-110 -z-10"></div>

            <img
              src={imagen}
              alt="Shoao"
              width={900}
              height={900}
              fetchPriority="high"
              className="w-80 lg:w-[450px] max-w-full h-auto aspect-square object-cover rounded-full"
            />
          </div>
        </div>

        {/* TEXTO Y REDES CENTRADOS */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6 text-balance">
            Hola muchachos, soy Shoao
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg mb-8 mx-auto">
            Jugador veterano de MapleStory GMS. Aquí encuentras guías en español, mis videos y
            servicios para que avances más fácil y más rápido.
          </p>

          {/* REDES (lista en src/data/socials.ts) */}
          <SocialLinks variant="hero" />
        </div>

      </div>
    </section>
  );
};

export default Hero;