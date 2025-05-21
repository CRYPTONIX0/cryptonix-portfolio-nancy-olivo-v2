// Definición de estilos reutilizables en el proyecto
const styles = {
  // Estilo para el ancho máximo de un contenedor, se usa principalmente en pantallas grandes.
  boxWidth: "xl:max-w-[1280px] w-full",

  // Estilo para encabezados (títulos secundarios), con fuente Poppins, tamaño y espaciado ajustado.
  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",

  // Estilo para párrafos con una fuente Poppins, tamaño y color de texto ajustados.
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  // Estilos para las estructuras flexibles: centrar elementos, alinearlos al principio o al final.
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex md:justify-end items-center",

  // Estilos de espaciado: margen y padding en X (horizontal) e Y (vertical).
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

// Objeto de configuración de distribución para secciones de la página, con flexbox
export const layout = {
  // Estilo para una sección con distribución en fila (horizontal) en pantallas grandes y columna (vertical) en pantallas pequeñas.
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  // Estilo para una sección donde la imagen y el texto se invierten en pantallas pequeñas.
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}  `,

  // Estilo para una sección con imagen a la derecha, se usa en la versión de escritorio.
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  // Estilo para una sección con imagen a la izquierda, se usa en la versión de escritorio.
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  // Estilo para una sección con imagen a la derecha, con alineación de contenido al final.
  sectionImgReverseEnd: `flex-1 flex ${styles.flexEnd} md:mr-12 ml-4 mb-4 md:mb-0 md:mt-0 mt-10 relative`,

  // Estilo para una sección de información (texto), alineada al principio.
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

// Exportación de los estilos para su uso en otros archivos.
export default styles;
