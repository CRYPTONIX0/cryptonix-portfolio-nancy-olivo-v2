// Importamos las librerías necesarias para el funcionamiento de la aplicación
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importamos el método para renderizar en el DOM
import App from './App'; // Importamos el componente principal de la aplicación
import './index.css'; // Importamos los estilos globales de la aplicación
import smoothscroll from 'smoothscroll-polyfill'; // Importamos la librería para habilitar el scroll suave

// Activamos el polyfill de smoothscroll, que permite que el desplazamiento suave funcione en todos los navegadores
smoothscroll.polyfill();

// Creamos la raíz de la aplicación y la renderizamos dentro del div con id 'root' en el archivo HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* StrictMode ayuda a detectar posibles errores durante el desarrollo */}
    <App /> {/* Renderizamos el componente principal de la aplicación */}
  </React.StrictMode>
);
