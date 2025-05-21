/** @type {import('tailwindcss').Config} */
module.exports = {
  // Indica los archivos donde TailwindCSS debe buscar clases CSS
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  // Habilita el modo Just-in-Time (JIT) para mejorar la performance de la compilación
  mode: "jit",

  theme: {
    extend: {
      // Extiende los colores predeterminados con colores personalizados
      colors: {
        primary: "black", // Color principal de la página, en negro
        secondary: "white", // Color secundario de la página, en blanco
        dimWhite: "#ff94d3", // Color blanco con tono rosado suave
        dimBlue: "rgba(9, 151, 124, 0.1)", // Azul suave con transparencia
      },
      // Agrega una nueva fuente llamada 'Poppins' para su uso en la página
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Familia de fuentes 'Poppins' y 'sans-serif'
      },
    },

    // Define las pantallas (breakpoints) personalizadas para la responsividad
    screens: {
      xs: "480px", // Pantalla extra pequeña
      ss: "620px", // Pantalla pequeña (ss)
      sm: "768px", // Pantalla pequeña estándar
      md: "1060px", // Pantalla mediana
      lg: "1200px", // Pantalla grande
      xl: "1700px", // Pantalla extra grande
    },
  },

  // Aquí puedes agregar plugins personalizados, en este caso está vacío
  plugins: [],
};

// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// 🔮 Hecho por: 𝘾𝙍𝙔𝙋𝙏𝙊𝙉𝙄𝙓𝘿𝙀𝙑 ░ "Innovación desde el código"
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
