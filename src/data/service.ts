import type { Service } from "../types/service";

export const servicesData: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Servicios de Bosseo",
    description:
      "Mató el boss con tu personaje. El costo depende del boss y qué tan fuerte es tu personaje.",
  },
  {
    id: 2,
    number: "02",
    title: "Optimización de Cuenta",
    description:
      "Analizo tu cuenta y optimizo los sistemas clave para maximizar tu progreso.",
    systems: [
      "Legión",
      "Link Skills",
      "Artifact",
      "V Matrix",
      "Hexa Matrix",
    ],
    extra:
      "Además, recibirás recomendaciones personalizadas para fortalecer tu personaje principal.",
  },
  {
    id: 3,
    number: "03",
    title: "Servicio de Lvleo",
    description:
      "Subo de nivel tu personaje de la manera más eficiente para que avances más rápido y aproveches mejor tu tiempo de juego.",
  },
];