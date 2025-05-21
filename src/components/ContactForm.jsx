import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import styles from "../style";

/*
  📌 Configuración de EmailJS para Vite en .env:

  VITE_EMAILJS_SERVICE_ID=tu_service_id
  VITE_EMAILJS_TEMPLATE_ID=tu_template_id
  VITE_EMAILJS_PUBLIC_KEY=tu_public_key
*/

// Componente de formulario de contacto para agendar cita
const ContactForm = () => {
  // Referencia al formulario para envío con EmailJS
  const formRef = useRef();
  // Estado para mensaje de feedback al usuario
  const [status, setStatus] = useState("");

  // Función que maneja el envío del formulario
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Solicitud enviada. Te contactaremos pronto.");
          formRef.current.reset();
        },
        (err) => {
          console.error(err);
          setStatus("❌ Error al enviar. Intenta de nuevo más tarde.");
        }
      );
  };

  return (
    <motion.section
      id="contactForm"
      className={`bg-black w-full ${styles.paddingX} text-white py-16`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Encabezado de la sección */}
      <div className="text-center mb-8">
        <h2
          className="font-poppins font-semibold ss:text-[48px] text-[32px] text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ffc0e4 0.89%, #ffb3d9 17.23%, #ffd6ec 42.04%, #ffc0e4 55.12%, #ff6ec7 71.54%, #ff94d3 100%)",
          }}
        >
          Agenda tu cita
        </h2>
        <p className="font-poppins font-normal text-[16px] text-dimWhite mt-2">
          ❗ Completa tus datos y te confirmaremos por correo o llamada ❗
        </p>
      </div>

      {/* Formulario centrado y responsivo */}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="mx-auto w-full max-w-lg flex flex-col"
      >
        {/* Campo: Nombre completo */}
        <label className="font-poppins mb-1">Nombre completo</label>
        <input
          type="text"
          name="user_name"
          required
          className="w-full mb-4 p-3 bg-gray-800 text-white border border-gray-600 rounded"
          placeholder="Tu nombre"
        />

        {/* Campo: Correo electrónico */}
        <label className="font-poppins mb-1">Correo electrónico</label>
        <input
          type="email"
          name="user_email"
          required
          className="w-full mb-4 p-3 bg-gray-800 text-white border border-gray-600 rounded"
          placeholder="ejemplo@correo.com"
        />

        {/* Campo: Teléfono */}
        <label className="font-poppins mb-1">Teléfono</label>
        <input
          type="tel"
          name="user_phone"
          required
          className="w-full mb-4 p-3 bg-gray-800 text-white border border-gray-600 rounded"
          placeholder="(55) 1234 5678"
        />

        {/* Campo: Fecha preferida */}
        <label className="font-poppins mb-1">Fecha preferida</label>
        <input
          type="date"
          name="appointment_date"
          required
          className="w-full mb-4 p-3 bg-gray-800 text-white border border-gray-600 rounded"
        />

        {/* Campo: Hora preferida */}
        <label className="font-poppins mb-1">Hora preferida</label>
        <input
          type="time"
          name="appointment_time"
          required
          className="w-full mb-4 p-3 bg-gray-800 text-white border border-gray-600 rounded"
        />

        {/* Campo: Motivo o comentarios */}
        <label className="font-poppins mb-1">Motivo o comentarios</label>
        <textarea
          name="message"
          rows="4"
          required
          className="w-full mb-4 p-3 bg-gray-800 text-white border border-gray-600 rounded"
          placeholder="Cuéntanos brevemente tu situación"
        />

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full py-3 mt-2 font-poppins font-medium text-lg text-black rounded-lg"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ffc0e4 0.89%, #ffb3d9 17.23%, #ffd6ec 42.04%, #ffc0e4 55.12%, #ff6ec7 71.54%, #ff94d3 100%)",
          }}
        >
          Enviar solicitud
        </button>

        {/* Mensaje de feedback al usuario */}
        {status && (
          <p className="mt-4 font-poppins text-center">{status}</p>
        )}
      </form>
    </motion.section>
  );
};

export default ContactForm;

// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// 
// 🔮 Hecho por: 𝘾𝙍𝙔𝙋𝙏𝙊𝙉𝙄𝙓𝘿𝙀𝙑 ░ "Innovación desde el código"
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░