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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                border border-black
                rounded-3xl
                p-8
                flex flex-col
                hover:-translate-y-2
                hover:shadow-xl
                transition-all duration-300
              "
            >
              {/* Flecha */}
              <span
                className="
                  absolute
                  top-6
                  right-6
                  text-2xl
                  text-gray-300
                  group-hover:text-black
                  group-hover:translate-x-1
                  transition-all
                "
              >
                ↗
              </span>

              {/* Número */}
              <span className="text-7xl font-black text-gray-100 mb-4 select-none">
                {service.number}
              </span>

              {/* Título */}
              <h3 className="text-2xl font-bold text-black mb-4">
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-600 leading-7">
                {service.description}
              </p>

              {/* Sistemas */}
              {service.systems && (
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {service.systems.map((system) => (
                      <div
                        key={system}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <span className="font-bold">+</span>
                        <span>{system}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {service.extra && (
                <p className="text-sm text-gray-500 mt-5 leading-6 border-t border-gray-200 pt-4">
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