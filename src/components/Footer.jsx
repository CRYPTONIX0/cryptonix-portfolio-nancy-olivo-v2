import React from "react";
import { aboutMe } from "../constants/index";
import { profilePic } from "../assets";

// Componente Footer: muestra información personal y créditos de la página
const Footer = () => (
  <footer className="bg-black w-full px-6 py-6">
    {/* Línea divisoria */}
    <div className="border-t border-gray-700 pt-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
        {/* Sección de información personal */}
        <div className="text-white text-center md:text-left mb-6 md:mb-0">
          <h2
            className="text-2xl font-bold font-poppins mb-2 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ffc0e4 0.89%, #ffb3d9 17.23%, #ffd6ec 42.04%, #ffc0e4 55.12%, #ff6ec7 71.54%, #ff94d3 100%)",
            }}
          >
            {aboutMe.name}
          </h2>
          <p className="font-poppins text-sm leading-5 max-w-md">
            {aboutMe.tagLine}
          </p>
        </div>

        {/* Sección de foto de perfil con borde degradado */}
        <div className="flex-shrink-0">
          <img
            src={profilePic}
            alt={aboutMe.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto"
            
          />
        </div>
      </div>

      {/* Créditos de desarrollo */}
      <div className="text-center font-poppins text-white text-xs mt-6">
        <p>
          Página desarrollada y protegida por{' '}
          <a
            href="https://www.instagram.com/cryptonix.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-300"
          >
            @CryptonixDev
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
