import React from "react";
import styles from "../style";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { motion } from "framer-motion";

// Componente que muestra enlaces a redes sociales y métodos de contacto directo
const SocialContact = () => (
  <section
    id="socialContact"
    className={`py-16 w-full ${styles.paddingX} bg-black`}
  >
    {/* Encabezado de la sección con título y descripción */}
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2
        className="font-poppins font-semibold ss:text-[48px] text-[32px] text-transparent bg-clip-text mb-4"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #ffc0e4 0.89%, #ffb3d9 17.23%, #ffd6ec 42.04%, #ffc0e4 55.12%, #ff6ec7 71.54%, #ff94d3 100%)",
        }}
      >
        Redes Sociales y Contacto
      </h2>
      <p className="font-poppins font-normal text-[16px] text-dimWhite">
        Conéctate o agenda tu cita directamente.
      </p>
    </div>

    {/* Iconos de redes sociales con animación al pasar el cursor */}
    <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
      {[
        { icon: FaFacebookF, url: "https://facebook.com/tuPerfil" },
        { icon: FaInstagram, url: "https://instagram.com/tuPerfil" },
        { icon: FaTwitter, url: "https://twitter.com/tuPerfil" },
        { icon: FaLinkedinIn, url: "https://linkedin.com/in/tuPerfil" },
        { icon: FaTiktok, url: "https://tiktok.com/@tuPerfil" },
      ].map(({ icon, url }, i) => (
        <motion.a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-white text-3xl"
        >
          {React.createElement(icon)}
        </motion.a>
      ))}
    </div>

    {/* Enlaces de contacto directo: teléfono y correo electrónico */}
    <div className="flex flex-col items-center gap-4">
      <a
        href="tel:5535536078"
        className="font-poppins font-medium text-[18px] text-white flex items-center hover:text-teal-400 transition-colors"
      >
        <AiOutlinePhone className="mr-2 text-2xl" />
+52 1 55 3553 6078      </a>
      <a
        href="mailto:contacto@psiquiatranancyolivo.com"
        className="font-poppins font-medium text-[18px] text-white flex items-center hover:text-teal-400 transition-colors"
      >
        <AiOutlineMail className="mr-2 text-2xl" />
        contacto@psiquiatranancyolivo.com
      </a>
    </div>
  </section>
);

export default SocialContact;

// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// 🔮 Hecho por: 𝘾𝙍𝙔𝙋𝙏𝙊𝙉𝙄𝙓𝘿𝙀𝙑 ░ "Innovación desde el código"
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
