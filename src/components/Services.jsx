import React, { useState, useEffect, useRef } from "react";
import { services } from "../constants/index";
import { motion } from "framer-motion";
import styles from "../style";

// Componente principal que renderiza la sección de servicios
const Services = () => {
  // Índice de la tarjeta actualmente visible en el carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  // Ancho total de cada tarjeta (incluye margen derecho) para calcular el desplazamiento
  const [cardWidth, setCardWidth] = useState(0);
  // Referencia al contenedor flex para medir dimensiones
  const containerRef = useRef(null);

  // Mide y actualiza el ancho de la tarjeta al cargar el componente y al redimensionar la ventana
  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const card = containerRef.current.querySelector(".service-card-wrapper");
        if (card) {
          const width = card.offsetWidth;
          const marginRight = parseInt(
            getComputedStyle(card).marginRight,
            10
          );
          setCardWidth(width + marginRight);
        }
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    // Limpia el listener al desmontar el componente
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Función para retroceder en el carrusel (no baja de 0)
  const handlePrev = () => setCurrentIndex((i) => Math.max(i - 1, 0));
  // Función para avanzar en el carrusel (no supera la longitud de servicios)
  const handleNext = () =>
    setCurrentIndex((i) => Math.min(i + 1, services.length - 1));

  return (
    <section
      id="services"
      className={`bg-black ${styles.flexCenter} ${styles.paddingX} w-full relative overflow-hidden text-white mt-5 md:mt-10`}
    >
      {/* Contenedor principal centrado y con ancho limitado */}
      <div className={`${styles.boxWidth} mx-auto`}>  
        {/* Título de la sección */}
        <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-center mb-6">
          Servicios
        </h1>

        {/* Carrusel con desplazamiento horizontal */}
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {services.map((s) => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
        </div>

        {/* Botones de navegación del carrusel */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= services.length - 1}
            className="p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

// Componente para cada tarjeta de servicio con animación y estilos responsivos
const ServiceCard = ({ imageUrl, title, description }) => (
  <motion.div
    // Clase para medir ancho y margen en el carrusel
    className="service-card-wrapper flex-shrink-0 w-full max-w-[280px] md:max-w-[360px] bg-black rounded-xl overflow-hidden border border-gray-700 hover:border-transparent transition-colors mr-6"
    initial={{ y: -30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.75, delay: 0.1 }}
  >
    {/* Imagen superior del servicio */}
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-40 object-cover"
    />

    {/* Contenido textual centrado */}
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold font-poppins text-white mb-1">
        {title}
      </h3>
      <p className="font-poppins text-sm text-dimWhite">
        {description}
      </p>
    </div>
  </motion.div>
);

export default Services;

// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// 
// 🔮 Hecho por: 𝘾𝙍𝙔𝙋𝙏𝙊𝙉𝙄𝙓𝘿𝙀𝙑 ░ "Innovación desde el código"
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░