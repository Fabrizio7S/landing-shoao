import imagen from "../../assets/imagen.jpg";

const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* IMAGEN */}
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

        {/* TEXTO Y REDES CENTRADOS */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Welcome
            <br />
            Mapleanos
          </h1>

          <p className="text-2xl text-gray-700 leading-relaxed max-w-md mb-8 mx-auto">
            Mi nombre es Jhohao jugador veterano que hace videos 🍁
          </p>

          {/* ICONOS */}
          <div className="flex items-center justify-center gap-6">
            
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@xShoao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-500 
                         hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/fEQrFcTKBz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-500 
                         hover:bg-[#5865F2] hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Discord"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;