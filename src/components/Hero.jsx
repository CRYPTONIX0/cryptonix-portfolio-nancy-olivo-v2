import React from "react";
import styles from "../style";
import Lottie from "react-lottie-player";
import animationData from "../lotties/AnimacionDeCerebroPorCryptonix.json";
import { aboutMe } from "../constants/index";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Hero text */}
        <h1 className="font-poppins font-semibold ss:text-[40px] text-[32px] ss:leading-[64px] leading-[48px] text-white">
          ¡Hola!
          <br className="sm:block hidden" /> Nosotros somos
        </h1>

        <h1 className="font-poppins font-semibold ss:text-[35px] text-[35px] ss:leading-[72px] leading-[56px] w-full mt-1">
          <span className="text-gradient">{aboutMe.name}</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-4 text-white`}>
          {aboutMe.intro}
        </p>

        {/* Botones de navegación */}
        <div className="mt-8 flex flex-wrap gap-4">
          {/* Botón a Beneficios */}
          <a
            href="#benefits"
            className="inline-block px-6 py-3 bg-black rounded-lg relative overflow-hidden"
            style={{
              border: "2px solid",
              borderImage:
                "linear-gradient(90deg, #ffc0e4 0.89%, #ffb3d9 17.23%, #ffd6ec 42.04%, #ffc0e4 55.12%, #ff6ec7 71.54%, #ff94d3 100%) 1",
            }}
          >
            <span
              className="font-poppins font-medium text-lg bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ffc0e4 0.89%, #ffb3d9 17.23%, #ffd6ec 42.04%, #ffc0e4 55.12%, #ff6ec7 71.54%, #ff94d3 100%)",
              }}
            >
              Beneficios de la Consulta
            </span>
          </a>
          {/* Nuevo botón a ContactForm */}
          <a
            href="#contactForm"
            className="inline-block px-6 py-3 bg-black rounded-lg relative overflow-hidden"
            style={{
              border: "2px solid",
              borderImage:
                "linear-gradient(90deg, #ffc0e4 0.89%, #ffb3d9 17.23%, #ffd6ec 42.04%, #ffc0e4 55.12%, #ff6ec7 71.54%, #ff94d3 100%) 1",
            }}
          >
            <span
              className="font-poppins font-medium text-lg bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ffc0e4 0.89%, #ffb3d9 17.23%, #ffd6ec 42.04%, #ffc0e4 55.12%, #ff6ec7 71.54%, #ff94d3 100%)",
              }}
            >
              Solicitar Cita ahora
            </span>
          </a>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="relative z-[5] h-[90%] w-[85%]">
          <Lottie {...defaultOptions} />
        </div>
        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient" />
      </div>
    </section>
  );
};

export default Hero;
