import React, { useState, useEffect, useRef } from "react";
import { FaCommentAlt } from "react-icons/fa";
import styles from "../style";

// Datos estáticos de los testimonios
const testimonials = [
  {
    id: "testimonial-1",
    name: "Eduardo Hernández",
    role: "Trastorno del Espectro Autista",
    quote:
      "Como padre, quiero recomendar a la psiquiatra de mi hijo porque con un tratamiento adecuado y la información que nos ha dado comprendemos la condición de nuestro hijo y lo podemos ayudar más. Seguiremos todos los consejos e indicaciones que nos dé porque vemos muy buenos resultados.",
  },
  {
    id: "testimonial-2",
    name: "Roberto Neri",
    role: "Trastorno Mixto Ansioso Depresivo",
    quote:
      "No van a encontrar mejor médico que la doctora, a quien le estoy muy agradecido por tratarme y ya estar de alta.",
  },
  {
    id: "testimonial-3",
    name: "Niño Rodrigo de Jesús",
    role: "Trastorno de las Emociones de Inicio en la Infancia",
    quote:
      "A pocos meses de haber iniciado el tratamiento vemos los resultados, 100% recomendable. Gracias, doctora, por todo.",
  },
  {
    id: "testimonial-4",
    name: "Dafne Esquivel",
    role: "Trastorno Disocial Depresivo",
    quote:
      "Recomiendo a la doctora porque hemos recibido la información correcta sobre el trastorno de nuestro hijo, con sus recomendaciones estamos teniendo logros significativos.",
  },
  {
    id: "testimonial-5",
    name: "Niño Víctor M.J.",
    role: "TDAH",
    quote:
      "Vemos el antes y el después del tratamiento; ahora ya no hay quejas en la escuela, mi hijo es de las mejores calificaciones, la doctora nos está ayudando mucho.",
  },
  {
    id: "testimonial-6",
    name: "Zaid Gael Hernández",
    role: "Trastorno Mixto Ansioso Depresivo",
    quote:
      "Debido al gran ser humano que es nuestra doctora, mi hijo está saliendo adelante, ya no tiene desánimo y está más comprometido con todo lo que hace. La doctora nos ha dado las palabras justas que mi hijo necesita para ayudarlo; la recomiendo mucho y le estoy agradecida.",
  },
  {
    id: "testimonial-7",
    name: "Justin y Brandon",
    role: "Trastorno por Déficit de Atención • Rivalidad entre Hermanos",
    quote:
      "Recomiendo ampliamente a la doctora, nuestros hijos han recibido el tratamiento adecuado.",
  },
  {
    id: "testimonial-8",
    name: "Emiliano Bautista",
    role: "Trastorno Oposicionista Desafiante",
    quote:
      "Fuimos canalizados por la psicóloga con la doctora, su tratamiento es altamente efectivo.",
  },
  {
    id: "testimonial-9",
    name: "Leornado Maldonado",
    role: "Insomnio e Irritabilidad",
    quote: "Gracias a la doctora mi vida cambió.",
  },
  {
    id: "testimonial-10",
    name: "José Luis Arenas",
    role: "Acoso Laboral • Trastorno de las Emociones",
    quote:
      "Gracias a mi equipo de abogados conocí a la psiquiatra Dra. Nancy Olivo, estoy en tratamiento por un trastorno de las emociones y, por sentirme muy recuperado, le doy mi recomendación.",
  },
];

// Componente de cada tarjeta testimonial
const TestimonialCard = ({ name, role, quote }) => (
  <div className="testimonial-card-wrapper flex-shrink-0 w-full max-w-[320px] bg-black rounded-[20px] p-6 mr-6 transition-colors duration-300 transform border border-pink-500 hover:border-transparent flex flex-col justify-between">
    {/* Ícono de comentario */}
    <FaCommentAlt size="2rem" className="text-pink-500 mx-auto mb-4" />

    {/* Nombre del paciente */}
    <h3 className="font-poppins font-semibold text-[18px] text-white text-center mb-2">
      {name}
    </h3>

    {/* Rol o diagnóstico */}
    <p className="font-poppins font-normal text-[14px] text-dimWhite text-center mb-4">
      {role}
    </p>

    {/* Cita o testimonio */}
    <p className="font-poppins font-normal text-[14px] text-white leading-[24px]">
      “{quote}”
    </p>
  </div>
);

// Componente principal que muestra el carrusel de testimonios
const Testimonials = () => {
  // Índice actual para calcular el desplazamiento horizontal
  const [currentIndex, setCurrentIndex] = useState(0);
  // Ancho total de cada tarjeta (incluye margen)
  const [cardWidth, setCardWidth] = useState(0);
  // Referencia al contenedor flex de tarjetas
  const containerRef = useRef(null);

  // Mide y actualiza el ancho de la tarjeta al cargar y al redimensionar
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const wrapper = containerRef.current.querySelector(
          ".testimonial-card-wrapper"
        );
        if (wrapper) {
          const style = getComputedStyle(wrapper);
          const total = wrapper.offsetWidth + parseInt(style.marginRight, 10);
          setCardWidth(total);
        }
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Mueve al testimonio anterior (sin bajar de 0)
  const handlePrev = () => setCurrentIndex((i) => Math.max(i - 1, 0));
  // Mueve al siguiente testimonio (sin superar el máximo)
  const handleNext = () =>
    setCurrentIndex((i) => Math.min(i + 1, testimonials.length - 1));

  return (
    <section
      id="testimonials"
      className={`py-16 ${styles.paddingX} bg-black w-full`}
    >
      {/* Encabezado de sección */}
      <div className="text-center mb-12">
        <h2
          className="font-poppins font-semibold ss:text-[48px] text-[32px] text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ffc0e4 0.89%, #ffb3d9 17.23%, #ffd6ec 42.04%, #ffc0e4 55.12%, #ff6ec7 71.54%, #ff94d3 100%)",
          }}
        >
          Testimonios de Pacientes
        </h2>
        <p className="font-poppins font-normal text-[16px] text-dimWhite mt-4">
          La confianza de quienes ya han vivido la experiencia.
        </p>
      </div>

      {/* Carrusel con desplazamiento horizontal */}
      <div className={`${styles.boxWidth} overflow-hidden relative mx-auto`}>
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full disabled:opacity-50"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === testimonials.length - 1}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full disabled:opacity-50"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// 🔮 Hecho por: 𝘾𝙍𝙔𝙋𝙏𝙊𝙉𝙄𝙓𝘿𝙀𝙑 ░ "Innovación desde el código"
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
