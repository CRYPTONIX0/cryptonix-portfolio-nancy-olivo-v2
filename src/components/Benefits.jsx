import React, { useState, useEffect, useRef } from "react";
import { benefits } from "../constants/index";
import styles from "../style";

// Componente principal que renderiza la sección de beneficios
const Benefits = () => {
  // Índice de la tarjeta actualmente visible
  const [currentIndex, setCurrentIndex] = useState(0);
  // Ancho total de la tarjeta (incluye margen) para calcular el desplazamiento
  const [cardTotalWidth, setCardTotalWidth] = useState(0);
  // Referencia al contenedor de las tarjetas para medir dimensiones
  const containerRef = useRef(null);

  // Calcula y actualiza el ancho total de la tarjeta al cargar y al redimensionar la ventana
  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const card = containerRef.current.querySelector(".benefit-card-wrapper");
        if (card) {
          const width = card.offsetWidth;
          const marginRight = parseInt(getComputedStyle(card).marginRight, 10);
          setCardTotalWidth(width + marginRight);
        }
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Avanza al siguiente beneficio si no es el último
  const handleNext = () => {
    if (currentIndex < benefits.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  // Retrocede al beneficio anterior si no es el primero
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  return (
    <section
      id="benefits"
      className={`
        flex flex-col ss:flex-row items-center
        ${styles.paddingX} bg-black text-white min-h-screen w-full
      `}
    >
      {/* Contenedor del título */}
      <div className="w-full ss:w-1/3 mb-6 ss:mb-0 ss:pr-8">
        <h1
          className="font-poppins font-semibold ss:text-[55px] text-[45px] leading-[80px] mb-0 text-center ss:text-left text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ffc0e4 0.89%, #ffb3d9 17.23%, #ffd6ec 42.04%, #ffc0e4 55.12%, #ff6ec7 71.54%, #ff94d3 100%)",
          }}
        >
          Beneficios de la Consulta
        </h1>
      </div>

      {/* Carrusel de tarjetas */}
      <div className="w-full ss:w-2/3 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          ref={containerRef}
          style={{ transform: `translateX(-${currentIndex * cardTotalWidth}px)` }}
        >
          {benefits.map((b, idx) => (
            <BenefitCard key={b.id} index={idx} {...b} />
          ))}
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 bg-gray-800 rounded-full disabled:opacity-50 mx-2"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= benefits.length - 1}
            className="p-2 bg-gray-800 rounded-full disabled:opacity-50 mx-2"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

// Componente para cada tarjeta de beneficio
const BenefitCard = ({ icon, title, index }) => (
  <div className="benefit-card-wrapper flex-shrink-0 m-4 p-[2px] rounded-[24px] bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500">
    <div className="benefit-card flex flex-col justify-center items-center w-full max-w-[300px] aspect-square bg-black rounded-[20px] relative">
      {/* Número de tarjeta */}
      <div className="absolute top-4 font-poppins font-semibold text-white ss:text-[35px] text-[28px]">
        {index + 1}
      </div>

      {/* Título del beneficio */}
      <p
        className="font-poppins font-medium text-lg text-center mb-4 text-transparent bg-clip-text px-4"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #ffc0e4 0.89%, #ffb3d9 17.23%, #ffd6ec 42.04%, #ffc0e4 55.12%, #ff6ec7 71.54%, #ff94d3 100%)",
        }}
      >
        {title}
      </p>

      {/* Icono/Emoji centrado en la parte inferior */}
      <div className="absolute bottom-6 text-[45px]">
        {icon}
      </div>
    </div>
  </div>
);

export default Benefits;

// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//
// 🔮 Hecho por: 𝘾𝙍𝙔𝙋𝙏𝙊𝙉𝙄𝙓𝘿𝙀𝙑 ░ "Innovación desde el código"
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
