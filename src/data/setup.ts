import type { SetupItem } from "../types/Setup";

export const setupData: SetupItem[] = [
  // --- COMPONENTES ---
  {
    id: 1,
    name: "Intel Core i7 14700K 3.4GHz",
    category: "Componentes",
    description: "Procesador potente de 20 núcleos (8 de rendimiento y 12 de eficiencia) y 28 hilos, con boost de hasta 5.60 GHz y 33MB de caché inteligente.",
  },
  {
    id: 2,
    name: "MSI GeForce RTX 4060 Ti VENTUS 3X OC 16GB",
    category: "Componentes",
    description: "Tarjeta gráfica con 16GB GDDR6, interfaz de 128 bits, overclock de fábrica y sistema de triple ventilador (Ventus 3X) para un excelente enfriamiento. Cuenta con 3x DisplayPort y 1x HDMI.",
  },
  {
    id: 3,
    name: "ASUS ROG STRIX Z790-E GAMING WIFI 6E",
    category: "Componentes",
    description: "Placa madre premium para socket LGA 1700 con soporte para memoria DDR5, PCIe 5.0, WiFi 6E, red LAN premium, sonido integrado de alta calidad y múltiples puertos USB 3.2 e HDMI.",
  },
  {
    id: 4,
    name: "G.SKILL Trident Z5 RGB 64GB (2x32GB) DDR5 6400MHz",
    category: "Componentes",
    description: "Memoria RAM premium con iluminación RGB, velocidad de 6400 MHz, latencia CL32 a 1.40V y perfil Intel XMP habilitado para un rendimiento sobresaliente.",
  },
  {
    id: 5,
    name: "SSD Kingston FURY Renegade 2TB M.2 NVMe",
    category: "Componentes",
    description: "Unidad de estado sólido premium con interfaz PCIe Gen 4.0 x4 para velocidades brutales de lectura y escritura en juegos y edición.",
  },
  {
    id: 6,
    name: "Cooler Master GX II GOLD 850W ATX 3.0",
    category: "Componentes",
    description: "Fuente de poder de 850W con certificación 80 Plus Gold, diseño totalmente modular y compatibilidad nativa con ATX 3.0 para alimentar hardware moderno.",
  },
  {
    id: 7,
    name: "Cooler Master MasterLiquid PL360 Flux Black ARGB",
    category: "Componentes",
    description: "Sistema de enfriamiento líquido todo en uno de alto rendimiento con radiador de 360 mm, bomba de doble cámara e iluminación ARGB.",
  },
  {
    id: 8,
    name: "Cooler Master MasterBox MB520 Mesh White ARGB",
    category: "Componentes",
    description: "Gabinete en color blanco con panel frontal de malla de alta permeabilidad para un flujo de aire óptimo e iluminación ARGB.",
  },

  // --- PERIFÉRICOS ---
  {
    id: 9,
    name: "Monitor LG UltraWide 49WL95C",
    category: "Periféricos",
    description: "Monitor ultra panorámico de 49 pulgadas curvo con panel IPS y excelente fidelidad de color, ideal para multitarea y edición de video.",
  },
  {
    id: 10,
    name: "Apple Magic Keyboard (Blanco)",
    category: "Periféricos",
    description: "Teclado ultra delgado con una pulsación de teclas precisa, estable y de perfil ultra bajo, en color blanco.",
  },
  {
    id: 11,
    name: "Logitech MX Master 3S (Blanco)",
    category: "Periféricos",
    description: "Mouse inalámbrico premium para productividad con botones silenciosos, rueda electromagnética MagSpeed y gran ergonomía.",
  },
  {
    id: 12,
    name: "Cooler Master MasterFan MF120 Halo White ARGB",
    category: "Periféricos",
    description: "Ventilador de caja de 120 mm en color blanco con doble bucle de iluminación LED direccionable individualmente.",
  },
  {
    id: 13,
    name: "Escritorio Elevable (Patas Eléctricas)",
    category: "Periféricos",
    description: "Escritorio regulable en altura y ancho, equipado con motor doble y capacidad de carga de hasta 125 kg.",
  },

  // --- AUDIO Y VIDEO ---
  {
    id: 14,
    name: "Sony WH-1000XM5 (Plata)",
    category: "Audio y Video",
    description: "Audífonos inalámbricos de diadema con cancelación de ruido activa (ANC) líder en la industria, sonido premium y gran comodidad.",
  },
  {
    id: 15,
    name: "Set Micrófono Maono AU-PM401",
    category: "Audio y Video",
    description: "Kit de micrófono de condensador USB con brazo articulado, filtro pop y una excelente captación de audio para streamings.",
  },
  {
    id: 16,
    name: "Micrófono Rode NTG3",
    category: "Audio y Video",
    description: "Micrófono de condensador tipo escopeta (shotgun) supercardioide de nivel profesional, ideal para una captación vocal nítida y enfocada.",
  },
  {
    id: 17,
    name: "Sony Alpha ILCE-6400 APS-C",
    category: "Audio y Video",
    description: "Cámara mirrorless utilizada como cámara principal/webcam de alta gama para streaming por su enfoque automático híbrido ultrarrápido y nitidez.",
  },
  {
    id: 18,
    name: "Focusrite Scarlett 2i2 (4ta Generación)",
    category: "Audio y Video",
    description: "Interfaz de audio USB de 2 entradas y 2 salidas con preamplificadores premium de cuarta generación, modo Air y convertidores de alta gama.",
  },
  {
    id: 19,
    name: "Brazo / Soporte de Micrófono",
    category: "Audio y Video",
    description: "Brazo articulado robusto y ajustable para suspender el micrófono de manera estable.",
  },
  {
    id: 20,
    name: "Foco Godox SL-60W",
    category: "Audio y Video",
    description: "Luz de video LED continua de 60W que ofrece un alto brillo y un índice de reproducción cromática fiel para iluminar la cámara principal.",
  },
  {
    id: 21,
    name: "Godox Softbox Parabólico P120L",
    category: "Audio y Video",
    description: "Softbox parabólico de 120 cm de diámetro diseñado para suavizar la iluminación y difuminar las sombras duras.",
  },
  {
    id: 22,
    name: "Godox Parante de Luces 260T",
    category: "Audio y Video",
    description: "Trípode para luces de alta resistencia con amortiguación de aire y altura ajustable de hasta 260 cm.",
  },

  // --- SOFTWARE ---
  {
    id: 23,
    name: "Windows 11 Pro",
    category: "Software",
    description: "Sistema operativo moderno y profesional optimizado para la gestión de tareas de streaming y rendimiento en videojuegos.",
  },
  {
    id: 24,
    name: "Adobe Premiere Pro",
    category: "Software",
    description: "Software líder en la industria para edición de video digital, montaje y posproducción.",
  },
  {
    id: 25,
    name: "OBS Studio",
    category: "Software",
    description: "El software de código abierto estándar para la codificación y transmisión en vivo.",
  },
  {
    id: 26,
    name: "StreamElements",
    category: "Software",
    description: "Plataforma integrada para la gestión de overlays interactivos, alertas de stream y herramientas en la nube.",
  },
];
