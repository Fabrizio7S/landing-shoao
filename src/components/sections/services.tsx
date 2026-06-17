import { servicesData } from "../../data/service";

const Services = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <h2 className="text-6xl font-extrabold text-gray-900 mb-2">
          Servicios
        </h2>

        <p className="text-gray-600 mb-10">
          Elige el servicio que te interese y envíame un mensaje por Discord para coordinar los detalles.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <a
              key={service.id}
              href="https://discord.com/users/892985311775293460"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                bg-white
                border-2 border-gray-200
                rounded-3xl
                p-8
                flex flex-col gap-4
                hover:-translate-y-1
                hover:border-black
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]
                transition-all duration-300
              "
            >
              <div className="relative flex items-center justify-center">
                <span className="text-7xl font-black text-gray-400 leading-none select-none group-hover:text-gray-500 transition-colors duration-300">
                  {service.number}
                </span>
                <span className="
                  absolute right-0
                  text-xl text-gray-300
                  group-hover:text-black
                  group-hover:translate-x-1 group-hover:-translate-y-1
                  transition-all duration-300
                ">
                  ↗
                </span>
              </div>

              <hr className="border-gray-100" />

              <h3 className="text-xl font-bold text-black leading-snug">
                {service.title}
              </h3>


              <p className="text-gray-500 text-sm leading-6 flex-1">
                {service.description}
              </p>

              {service.systems && (
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                    Incluye
                  </p>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {service.systems.map((system) => (
                      <div
                        key={system}
                        className="flex items-baseline gap-2 text-sm text-gray-600"
                      >
                        <span className="text-gray-300 shrink-0">—</span>
                        <span>{system}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.extra && (
                <p className="text-xs text-gray-400 leading-5 border-t border-gray-100 pt-4 italic">
                  {service.extra}
                </p>
              )}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

