// Importamos la función 'defineConfig' de Vite y el plugin de React para configurar el proyecto
import { defineConfig } from 'vite' // Función que permite crear una configuración para Vite
import react from '@vitejs/plugin-react' // Plugin para habilitar soporte de React en Vite

// Exportamos la configuración de Vite
export default defineConfig({
  plugins: [
    react() // Añadimos el plugin de React para manejar JSX y otras funcionalidades de React
  ]
})

// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// 🔮 Hecho por: 𝘾𝙍𝙔𝙋𝙏𝙊𝙉𝙄𝙓𝘿𝙀𝙑 ░ "Innovación desde el código"
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
