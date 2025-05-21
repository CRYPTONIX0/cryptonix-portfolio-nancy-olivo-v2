// =========================================
// Importación de imágenes de proyectos (assets)
// Cada constante corresponde a un logo o recurso de imagen de los proyectos
// =========================================
import {
  CCHA,
  cluboard,
  cash_flow,
  unamci,
  iris,
  imss,
  fba,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  cg,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia,
  globalAi,
} from "../assets";

// =========================================
// Iconos de Ant Design (react-icons/ai)
// Para redes sociales y tecnologías web (GitHub, Instagram, HTML5, etc.)
// =========================================
import {
  AiFillGithub, // ícono de GitHub
  AiFillInstagram, // ícono de Instagram
  AiFillLinkedin, // ícono de LinkedIn
  AiFillMail, // ícono de correo electrónico
  AiOutlineTwitter, // ícono de Twitter (outline)
  AiFillHtml5, // ícono de HTML5
  AiOutlineGitlab, // ícono de GitLab (outline)
} from "react-icons/ai";

// =========================================
// Iconos de Simple Icons (react-icons/si)
// Logos de frameworks, lenguajes y herramientas (React, Python, GraphQL, etc.)
// =========================================
import {
  SiDjango, // Django
  SiJavascript, // JavaScript
  SiBootstrap, // Bootstrap
  SiReact, // React.js
  SiTailwindcss, // Tailwind CSS
  SiGraphql, // GraphQL
  SiPython, // Python
  SiCplusplus, // C++
  SiC, // C
  SiRubyonrails, // Ruby on Rails
  SiJquery, // jQuery
  SiVisualstudiocode, // Visual Studio Code
  SiPostman, // Postman
  SiGit, // Git
  SiMysql, // MySQL
  SiSolidity, // Solidity (Smart Contracts)
  SiNetlify, // Netlify
  SiChartdotjs, // Chart.js
  SiVite, // Vite
  SiArduino, // Arduino
  SiWeb3Dotjs, // Web3.js
  SiIpfs, // IPFS
  SiDotnet, // .NET
  SiTwilio, // Twilio
  SiFlutter, // Flutter
  SiReplit, // Replit
  SiFlask, // Flask
  SiFigma, // Figma
  SiGooglemaps, // Google Maps
  SiOpenai, // OpenAI
  SiGooglecloud, // Google Cloud
  SiNextdotjs, // Next.js
  SiMicrosoftazure, // Microsoft Azure
} from "react-icons/si";

// =========================================
// Iconos de Font Awesome (react-icons/fa, react-icons/fa6)
// Íconos de entornos de desarrollo y lenguajes emergentes
// =========================================
import { FaHardHat, FaRust } from "react-icons/fa"; // Hardhat, Rust
import { FaGolang } from "react-icons/fa6"; // Go (Golang)

// =========================================
// Iconos diversos adicionales
// =========================================
import { IoIosNotificationsOutline } from "react-icons/io"; // Notificaciones
import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di"; // CSS3, Java, MS SQL Server, Ruby

// =========================================
// Exportación de enlaces de perfil y llamada a la acción
// =========================================
export const resumeLink =
  ""; // Enlace al CV en Google Drive
export const repoLink = "https://github.com/CRYPTONIX0/cryptonix-portfolio-nancy-olivo-v2"; // Enlace al repositorio del portafolio
export const callToAction = ""; // Llamada a la acción a LinkedIn

// Información general sobre el consultorio de psiquiatría
export const aboutMe = {
  // Nombre del servicio o consultorio
  name: "Cuidado profesional de la salud mental",

  // Usuario de GitHub
  githubUsername: "CRYPTONIX0",

  // Lema o tagline del consultorio
  tagLine: "Consultorio de psiquiatría",

  // Introducción o mensaje de bienvenida
  intro:
    "Bienvenido(a) a tu espacio de bienestar mental. Ofrecemos atención psiquiátrica especializada para niños, adolescentes y adultos, con un enfoque personalizado y profesional.",

  // Datos de contacto del profesional
  contacto: {
    // Edad del profesional
    edad: 54,

    // Nacionalidad
    nacionalidad: "Mexicana",

    // Ciudad de residencia
    ciudadResidencia: "Cuautitlán Izcalli, Estado de México",

    // Números de teléfono de contacto
    telefonos: ["5535536078", "5516765348"],

    // Correo electrónico de contacto
    correo: "nancyaidee91@gmail.com",

    // Plataformas de redes sociales
    redesSociales: ["Instagram", "Facebook", "WhatsApp", "TikTok"],
  },
};

// Array de enlaces de navegación para las secciones del sitio web
export const navLinks = [
  // Sección de beneficios y ventajas de la consulta psiquiátrica
  { id: "benefits", title: "Beneficios de la Consulta" },

  // Sección de habilidades y experiencia profesional
  { id: "skills", title: "Habilidades y experiencia" },

  // Sección de formación académica y educativa
  { id: "education", title: "Educación" },

  // Sección de logros y reconocimientos obtenidos
  { id: "achievements", title: "Logros" },

  // Sección de proyectos relevantes realizados
  { id: "projects", title: "Proyectos" },

  // Sección de actividades extracurriculares y complementarias
  { id: "extraCurricular", title: "Extracurriculares" },

  // Sección de servicios ofrecidos en el consultorio
  { id: "services", title: "Servicios" },

  // Sección de testimonios de pacientes y opiniones
  { id: "testimonials", title: "Testimonios" },

  // Sección con enlaces a redes sociales y contacto digital
  { id: "socialContact", title: "Redes Sociales" },

  // Sección para contactar directamente al profesional
  { id: "contactMe", title: "Contáctame" },

  // Sección con formulario para agendar cita de inmediato
  { id: "contactForm", title: "Agendar cita ahora" },

  // Sección para descargar o consultar el currículum profesional
  { id: "curriculum", title: "Currículum" },
];

// Lista de beneficios ofrecidos por el consultorio
export const benefits = [
  // Atención médica especializada y de calidad
  { id: "benefit-1", icon: "👩‍⚕️", title: "Atención profesional de calidad" },

  // Trato individualizado adaptado a las necesidades de cada paciente
  {
    id: "benefit-2",
    icon: "🤝",
    title: "Trato personalizado según cada paciente",
  },

  // Diagnóstico detallado y diseño de un plan de tratamiento propio
  {
    id: "benefit-3",
    icon: "🩺",
    title: "Diagnóstico y plan de tratamiento individualizado",
  },

  // Intervenciones fundamentadas en evidencia científica actualizada
  {
    id: "benefit-4",
    icon: "📊",
    title: "Intervenciones basadas en evidencia científica",
  },

  // Seguimiento continuo y apoyo a lo largo de todo el proceso terapéutico
  { id: "benefit-5", icon: "🔄", title: "Seguimiento y apoyo continuo" },

  // Garantía de privacidad y un ambiente de respeto total
  { id: "benefit-6", icon: "🔒", title: "Entorno confidencial y respetuoso" },

  // Empleo de tecnología de vanguardia para evaluaciones precisas
  {
    id: "benefit-7",
    icon: "🖥️",
    title: "Uso de tecnología de vanguardia en evaluaciones",
  },

  // Horarios flexibles y posibilidad de sesiones en línea
  {
    id: "benefit-8",
    icon: "📅",
    title: "Flexibilidad de horarios y sesiones en línea",
  },

  // Apoyo psicoeducativo tanto para pacientes como para sus familiares
  {
    id: "benefit-9",
    icon: "👪",
    title: "Apoyo psicoeducativo para pacientes y familiares",
  },

  // Facilidades de pago y trámites con aseguradoras
  {
    id: "benefit-10",
    icon: "💳",
    title: "Opciones de pago y gestión con aseguradoras",
  },

  // Terapias complementarias para el manejo del estrés
  {
    id: "benefit-11",
    icon: "🧘",
    title: "Terapias complementarias para el manejo del estrés",
  },

  // Evaluaciones periódicas para medir y ajustar el progreso
  { id: "benefit-12", icon: "📈", title: "Evaluación periódica de progreso" },
];

// Habilidades y competencias profesionales divididas en técnicas y blandas
export const skills = [
  {
    // Conjunto de destrezas médicas y científicas
    title: "Habilidades Técnicas",
    items: [
      { id: "ht-1", name: "Conocimientos médicos científicos" },
      { id: "ht-2", name: "Uso de la farmacoterapia" },
      {
        id: "ht-3",
        name: "Habilidades en la comunicación con pacientes y familias",
      },
      { id: "ht-4", name: "Análisis y toma de decisiones clínicas" },
      { id: "ht-5", name: "Experiencia en la interacción médico-paciente" },
      { id: "ht-6", name: "Evaluación y manejo de trastornos mentales" },
      {
        id: "ht-7",
        name: "Capacidades en el diagnóstico y tratamiento de trastornos psiquiátricos",
      },
    ],
  },
  {
    // Conjunto de habilidades interpersonales y de gestión emocional
    title: "Habilidades Blandas",
    items: [
      {
        id: "hb-1",
        name: "Empatía y comprensión de los signos y síntomas de los pacientes",
      },
      {
        id: "hb-2",
        name: "Establecimiento de relaciones de confianza con pacientes y colegas",
      },
      {
        id: "hb-3",
        name: "Manejo de situaciones estresantes con decisiones responsables",
      },
      {
        id: "hb-4",
        name: "Observación atenta para garantizar la calidad de la atención",
      },
      {
        id: "hb-5",
        name: "Respeto y comprensión de diferencias culturales, económicas y sociales",
      },
      {
        id: "hb-6",
        name: "Trabajo bajo principios de prontitud, objetividad, probidad y profesionalismo",
      },
    ],
  },
];

// Experiencias profesionales y formación académica
export const experiences = [
  {
    // Hospital especializado en salud mental infantil
    organisation: "Hospital Psiquiátrico Infantil “Dr. Juan N. Navarro”",
    // Logo del hospital
    logo: "https://tumentesana.com.mx/wp-content/uploads/2020/04/HPI.png",
    // Enlace al sitio del hospital (vacío si no aplica)
    link: "",
    // Puestos desempeñados en esta organización
    positions: [
      {
        // Cargo desempeñado
        title: "Médico Psiquiatra Infantil",
        // Duración del puesto (por definir)
        duration: "",
        // Descripción de responsabilidades y logros
        content: [
          {
            // Evaluación y manejo de trastornos mentales en población infantil
            text: "Evaluación y manejo de trastornos mentales, como depresión, ansiedad, trastornos psicóticos y bipolaridad, entre otros.",
            link: "",
            icon: "🧠",
          },
          {
            // Diagnóstico y tratamiento especializado para niños y adolescentes
            text: "Capacitada para el diagnóstico y tratamiento de trastornos psiquiátricos con enfoque infantil y adolescente.",
            link: "",
            icon: "🩺",
          },
        ],
      },
    ],
  },
  {
    // Hospital psiquiátrico de referencia nacional
    organisation: "Hospital Psiquiátrico “Fray Bernardino Álvarez”",
    // Logo del hospital
    logo: "https://4.bp.blogspot.com/__3_SnwwO_FE/SON2RwbPS2I/AAAAAAAAAAc/8Nv8rKmNJHs/S220/FRAY+AZUL.bmp",
    link: "",
    positions: [
      {
        title: "Psiquiatra General",
        duration: "",
        content: [
          {
            // Atención y toma de decisiones clínicas en psiquiatría general
            text: "Experiencia en la interacción médico-paciente y en la toma de decisiones clínicas para el tratamiento de trastornos mentales.",
            link: "",
            icon: "💬",
          },
          {
            // Prescripción y ajuste de tratamientos farmacológicos
            text: "Uso de la farmacoterapia para tratar diversos trastornos mentales, con un enfoque personalizado según cada paciente.",
            link: "",
            icon: "💊",
          },
        ],
      },
    ],
  },
  {
    // Prácticas de pregrado en la UNAM, campus Iztacala
    organisation: "Universidad Nacional Autónoma de México, Campus Iztacala",
    // Logo de la FES Iztacala
    logo: "https://www.iztacala.unam.mx/logo_FESInt.jpg",
    link: "",
    positions: [
      {
        title: "Internado de Pregrado",
        duration: "",
        content: [
          {
            // Desarrollo de habilidades de comunicación con pacientes y familias
            text: "Desarrollé habilidades clínicas en la comunicación con pacientes y familias, ayudando en la creación de relaciones de confianza.",
            link: "",
            icon: "🤝",
          },
          {
            // Manejo de situaciones de estrés y toma de decisiones basadas en evidencia
            text: "Capacidad para manejar situaciones estresantes y tomar decisiones responsables basadas en evidencia.",
            link: "",
            icon: "🧘‍♀️",
          },
        ],
      },
    ],
  },
  {
    // Capacitación adicional en psicología médica
    organisation:
      "Instituto Tecnológico de la Computación, Plantel Cuautitlán Izcalli",
    // Logo del instituto tecnológico
    logo: "https://sic.cultura.gob.mx/galeria_imagen/66c8e20ac8776ITES_CuautitlanIzcalli.png",
    link: "",
    positions: [
      {
        title: "Capacitación en Psicología Médica",
        duration: "",
        content: [
          {
            // Habilidades de observación y atención para la calidad de la atención médica
            text: "Desarrollé habilidades de observación y atención para garantizar la calidad de la atención médica, respetando principios de prontitud, objetividad y profesionalismo.",
            link: "",
            icon: "🔍",
          },
          {
            // Empatía y comprensión de la diversidad cultural y social de los pacientes
            text: "Desarrollé empatía y capacidad para comprender los signos y síntomas de los pacientes, respetando sus diferencias culturales y sociales.",
            link: "",
            icon: "💖",
          },
        ],
      },
    ],
  },
];

// Número de ítems a obtener de GitHub u otras APIs
export const itemsToFetch = 20;

// Repositorios específicos incluidos para mostrar en el portafolio
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];

// Estadísticas de contribuciones o métricas clave
export const stats = [
  { id: "stats-1", title: "Organizaciones", value: "2+" },
  { id: "stats-2", title: "Issues Abiertos", value: "6+" },
  { id: "stats-3", title: "Pull Requests", value: "6+" },
];

// Servicios profesionales ofrecidos en el consultorio
export const services = [
  {
    // Consulta psiquiátrica especializada, presencial y en línea
    id: "service-1",
    title: "Consulta especializada en psiquiatría (presencial y en línea)",
    description:
      "Atención presencial y en línea con alta especialidad en psiquiatría infantil y de la adolescencia.",
    imageUrl:
      "https://media.istockphoto.com/id/1646576038/photo/a-smiling-female-psychologist-consoled-a-female-patient-during-the-appointment.jpg?s=612x612&w=0&k=20&c=SxCgHc6t3ywdK_b6hI1aGhjtjm88mCn9FZKPBaWLk1s=",
  },
  {
    // Emisión de certificados médicos con validez legal
    id: "service-2",
    title: "Certificados médicos psiquiátricos",
    description:
      "Emisión de certificados oficiales para trámites médicos y legales.",
    imageUrl:
      "https://medicalcertificate.in/wp-content/uploads/2025/03/Medical-Certificate-Format.jpg",
  },
  {
    // Informes detallados sobre evolución clínica en el ámbito escolar
    id: "service-3",
    title: "Informes de evolución clínica escolar",
    description:
      "Informes detallados para escuelas sobre progreso y necesidades del alumno.",
    imageUrl:
      "https://imgv2-2-f.scribdassets.com/img/document/441227421/original/201446e649/1?v=1",
  },
  {
    // Detección y diagnóstico del TEA con documentación oficial
    id: "service-4",
    title: "Evaluación del Trastorno del Espectro Autista",
    description: "Detección y diagnóstico con cédula de evaluación incluida.",
    imageUrl:
      "https://pymstatic.com/21268/conversions/pruebas-para-detectar-autismo-wide.jpg",
  },
  {
    // Certificado para acompañamiento emocional con perro de apoyo
    id: "service-5",
    title: "Certificado de acompañamiento emocional canino",
    description:
      "Permiso para viajar y hospedarse con perro de apoyo emocional en distintos medios y alojamientos pet friendly.",
    imageUrl:
      "https://imgv2-2-f.scribdassets.com/img/document/631869294/original/ddb29eb6c0/1?v=1",
  },
  {
    // Elaboración de dictámenes psiquiátricos con fines periciales
    id: "service-6",
    title: "Dictámenes psiquiátricos forenses",
    description:
      "Elaboración de informes periciales para procesos familiares, civiles y penales.",
    imageUrl:
      "https://imgv2-1-f.scribdassets.com/img/document/396375919/original/c32f0cb5e7/1?v=1",
  },
  {
    // Consejería y apoyo para parejas en conflicto
    id: "service-7",
    title: "Consejería matrimonial",
    description:
      "Asesoría y apoyo profesional para fortalecer la relación de pareja.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4pKJg8owRETNV0wf1ThK6QQ0oqyBJPtviA&s",
  },
  {
    // Terapia para mejorar técnicas de crianza y vínculo familiar
    id: "service-8",
    title: "Terapia multimodal de crianza",
    description:
      "Técnicas integrales para el manejo de la crianza y el mejoramiento de las funciones paterno-filiales.",
    imageUrl:
      "https://institutret.com/wp-content/uploads/2022/11/Terapia-multimodal.png",
  },
  {
    // Acompañamiento emocional en procesos de duelo
    id: "service-9",
    title: "Apoyo en situaciones de duelo",
    description:
      "Acompañamiento y consejería emocional durante el proceso de pérdida.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWsVhHPJBXSw64V5e-gyqfrYc9Wg8bVOgew&s",
  },
  {
    // Material didáctico gratuito como complemento a la consulta
    id: "service-10",
    title: "Material didáctico gratuito",
    description:
      "Entrega de recursos educativos sin costo como complemento a tus consultas.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHutZkmtG5zFWFngbH8WEVRfI2-jJ8dPVg_A&s",
  },
];

// Testimonios de pacientes y familiares sobre la atención recibida
export const testimonials = [
  {
    // Testimonio de padre de familia
    id: "testimonial-1",
    name: "Eduardo Hernández",
    diagnosis: "Trastorno del Espectro Autista",
    testimonial:
      "Como padre, quiero recomendar a la psiquiatra de mi hijo porque, con un tratamiento adecuado y la información que nos ha dado, comprendemos la condición de nuestro hijo y lo podemos ayudar mejor. Seguiremos todos los consejos e indicaciones que nos dé porque vemos muy buenos resultados.",
  },
  {
    // Testimonio de paciente con trastorno ansioso-depresivo
    id: "testimonial-2",
    name: "Roberto Neri",
    diagnosis: "Trastorno Mixto Ansioso Depresivo",
    testimonial:
      "No van a encontrar mejor médico que la doctora, a quien le estoy muy agradecido por tratarme y por darme de alta.",
  },
  {
    // Testimonio de paciente infantil
    id: "testimonial-3",
    name: "Rodrigo de Jesús",
    diagnosis: "Trastorno de las Emociones de Inicio en la Infancia",
    testimonial:
      "A pocos meses de haber iniciado el tratamiento vemos los resultados. 100% recomendable. Gracias, doctora, por todo.",
  },
  {
    // Testimonio de madre de familia
    id: "testimonial-4",
    name: "Dafne Esquivel",
    diagnosis: "Trastorno Disocial Depresivo",
    testimonial:
      "Recomiendo a la doctora porque hemos recibido la información correcta sobre el trastorno de nuestro hijo; con sus recomendaciones estamos teniendo logros significativos.",
  },
  {
    // Testimonio de padre de familia sobre TDAH
    id: "testimonial-5",
    name: "Víctor M. J.",
    diagnosis: "TDAH",
    testimonial:
      "Vemos el antes y el después del tratamiento; ahora ya no hay quejas en la escuela y mi hijo tiene de las mejores calificaciones. La doctora nos está ayudando muchísimo.",
  },
  {
    // Testimonio de madre agradecida
    id: "testimonial-6",
    name: "Zaid Gael Hernández",
    diagnosis: "Trastorno Mixto Ansioso Depresivo",
    testimonial:
      "Debido al gran ser humano que es nuestra doctora, mi hijo está saliendo adelante; ya no tiene desánimo y está más comprometido con todo lo que hace. La doctora nos ha dado las palabras justas que mi hijo necesitaba para ayudarlo; la recomiendo mucho y le estoy muy agradecida.",
  },
  {
    // Testimonio de hermanos tratados
    id: "testimonial-7",
    name: "Justin y Brandon",
    diagnosis: "Trastorno por Déficit de Atención • Rivalidad entre hermanos",
    testimonial:
      "Recomiendo ampliamente a la doctora; nuestros hijos han recibido el tratamiento adecuado y han mejorado notablemente.",
  },
  {
    // Testimonio de familiar referido por psicóloga
    id: "testimonial-8",
    name: "Emiliano Bautista",
    diagnosis: "Trastorno Oposicionista Desafiante",
    testimonial:
      "Fuimos canalizados por la psicóloga con la doctora y su tratamiento ha sido altamente efectivo.",
  },
  {
    // Testimonio de paciente con problemas de sueño e irritabilidad
    id: "testimonial-9",
    name: "Leonardo Maldonado",
    diagnosis: "Insomnio e irritabilidad",
    testimonial: "Gracias a la doctora, mi vida cambió por completo.",
  },
  {
    // Testimonio de paciente en proceso legal
    id: "testimonial-10",
    name: "José Luis Arenas",
    diagnosis: "Acoso laboral • Trastorno de las Emociones",
    testimonial:
      "Gracias a mi equipo de abogados conocí a la psiquiatra Dra. Nancy Olivo. Estoy en tratamiento por un trastorno de las emociones y, por sentirme muy recuperado, le doy mi más sincera recomendación.",
  },
];

// Proyectos de investigación y presentaciones académicas
export const projects = [
  {
    // Investigación sobre el impacto de conflictos armados en menores
    id: "project-1",
    title: "Impacto de la Guerra en los Niños y Adolescentes",
    link: "https://www.linkedin.com/in/nancy-aideé-olivo-gutiérrez/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt62OYy4OHQJJKAhnVfQcOPVVHJzU3zmxeMw&s",
    content:
      "Tema de investigación sobre el impacto de la guerra en los niños y adolescentes, presentado en las Jornadas Académicas de la Clínica “Dr. Juan Ramón de la Fuente” en Toluca (2003).",
    stack: [
      { id: "icon-1", icon: "🎓", name: "Investigación en Salud Mental" },
    ],
  },
  {
    // Tesis publicada en revista especializada sobre maltrato infantil
    id: "project-2",
    title:
      "Psicopatología en los Padres con Hijos con Diagnóstico de Maltrato Físico",
    link: "https://www.saludmental.com.mx/",
    image:
      "https://psicologiacientifica.com/wp-content/uploads/2016/07/maltrato-infantil.webp",
    content:
      "Tesis publicada en la Revista de Salud Mental (2000) sobre psicopatología en los padres con hijos con diagnóstico de maltrato físico.",
    stack: [{ id: "icon-2", icon: "📄", name: "Publicación Académica" }],
  },
];

// Formación académica y especializaciones
export const educationList = [
  {
    // Especialización en psiquiatría clínica
    id: "education-1",
    icon: fba,
    title:
      "HOSPITAL PSIQUIÁTRICO “FRAY BERNARDINO ÁLVAREZ”, DEPENDIENTE DE LA S.S.A. Y AVALADO POR LA UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO.",
    degree: "ESPECIALIZACIÓN EN PSIQUIATRÍA",
    duration: "• 3 años (1998–2001)",
  },
  {
    // Curso de psiquiatría infantil y adolescente
    id: "education-2",
    icon: iris,
    title:
      "HOSPITAL PSIQUIÁTRICO INFANTIL “DR. JUAN N. NAVARRO”, DEPENDIENTE DE LA S.S.A. Y AVALADO POR LA UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO.",
    degree:
      "CURSO DE ESPECIALIZACIÓN EN PSIQUIATRÍA INFANTIL Y DE LA ADOLESCENCIA",
    duration: "• 2 años (2001–2003)",
  },
  {
    // Título de Médico Cirujano
    id: "education-3",
    icon: unamci,
    title: "UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO, CAMPUS IZTACALA",
    degree: "LICENCIATURA COMO MÉDICO CIRUJANO",
    duration: "• 6 años (1990–1996)",
    content1: "CON APROBACIÓN DEL EXAMEN PROFESIONAL: 12 DE JULIO DE 1996.",
  },
  {
    // Técnico en informática administrativa
    id: "education-4",
    icon: cg,
    title:
      "INSTITUTO TECNOLÓGICO DE LA COMPUTACIÓN, PLANTEL CUAUTITLÁN IZCALLI",
    degree: "",
    duration: "• 1 año (1988–1989)",
    content1: "TÉCNICO EN INFORMÁTICA ADMINISTRATIVA",
  },
];

// Logros, certificaciones y congresos asistidos
export const achievements = [
  {
    id: "a-1",
    icon: "🎓",
    event: "Certificación en Psiquiatría Forense",
    position: "Instituto Nacional de Psiquiatría Dr. Ramón de la Fuente",
    content1:
      "Curso de Psiquiatría Forense en el Instituto Nacional de Psiquiatría Dr. Ramón de la Fuente (2014)",
    content2: "",
    content3: "",
  },
  {
    id: "a-2",
    icon: "🎓",
    event: "Diplomados en Derechos Humanos",
    position: "Procuración de Justicia",
    content1:
      "Diplomado en “Enfoque de Derechos Humanos en la Procuración de Justicia” (2021)",
    content2: "Diplomado “Protección y Defensa de los Derechos Humanos” (2024)",
    content3: "",
  },
  {
    id: "a-3",
    icon: "📚",
    event: "Curso de Justicia Transicional",
    position: "Justicia Transicional",
    content1: "Curso “Justicia Transicional” (2021)",
    content2: "",
    content3: "",
  },
  {
    id: "a-4",
    icon: "👥",
    event: "Asistencia a Congresos y Jornadas Médicas",
    position: "Participación en eventos",
    content1:
      "Asistencia a múltiples congresos y jornadas médicas en Psiquiatría Infantil, Psiquiatría Clínica y otras áreas (desde 1998)",
    content2: "",
    content3: "",
  },
  {
    id: "a-5",
    icon: "📄",
    event: "Publicaciones Académicas",
    position: "Revistas Científicas",
    content1:
      "Artículo “Psicopatología en los padres con hijos con diagnóstico de maltrato físico” publicado en la Revista de Salud Mental (2000)",
    content2:
      "Artículo “Técnicas de crianza en menores con trastornos disruptivos de la conducta” publicado en la Revista de Salud Mental (2003)",
    content3: "",
  },
  {
    id: "a-6",
    icon: "🎤",
    event: "Docencia y Ponencias",
    position: "Profesor Adjunto en Psiquiatría Infantil",
    content1:
      "Profesor Adjunto del curso de Psiquiatría Infantil en el Hospital Psiquiátrico Infantil Dr. Juan N. Navarro (2003–2008)",
    content2:
      "Ponente en Jornadas Académicas y Congreso Nacional de Psiquiatría Infantil",
    content3:
      "Participación en congresos internacionales y nacionales sobre maltrato infantil y trastornos psiquiátricos",
  },
];

// Actividades extracurriculares y diplomados adicionales
export const extraCurricular = [
  {
    id: 1,
    organisation: "Comisión Nacional de los Derechos Humanos (CNDH)",
    title: "Formación en Derechos Humanos",
    duration: "2021–2024",
    content: [
      {
        text: "Formación intensiva sobre derechos humanos organizada por la CNDH, enfocada en la protección y promoción de los derechos fundamentales.",
        link: "https://www.cndh.org.mx/",
      },
    ],
    logo: "🕊️",
  },
  {
    id: 2,
    organisation: "Universidad Nacional Autónoma de México (UNAM)",
    title: "Diplomado en Derechos Humanos",
    duration: "2021",
    content: [
      {
        text: "Diplomado en Derechos Humanos con enfoque en justicia social y protección de los más vulnerables.",
        link: "https://www.unam.mx/",
      },
    ],
    logo: "🏛️",
  },
  {
    id: 3,
    organisation: "Instituto Nacional de Salud Pública",
    title: "Diplomado en Justicia y Salud",
    duration: "2022",
    content: [
      {
        text: "Diplomado en Justicia y Salud, abarcando aspectos legales en la salud pública y acceso a servicios de calidad.",
        link: "https://www.insp.mx/",
      },
    ],
    logo: "💉",
  },
];

// Entradas de blog y etiquetas asociadas
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Título",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      { id: "tag-1", name: "etiqueta 01" },
      { id: "tag-2", name: "etiqueta 02" },
      { id: "tag-3", name: "etiqueta 03" },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Título",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      { id: "tag-1", name: "etiqueta 01" },
      { id: "tag-2", name: "etiqueta 02" },
      { id: "tag-3", name: "etiqueta 03" },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Título",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      { id: "tag-1", name: "etiqueta 01" },
      { id: "tag-2", name: "etiqueta 02" },
      { id: "tag-3", name: "etiqueta 03" },
    ],
  },
];

// Enlaces a perfiles de redes sociales y contacto profesional
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/usuario",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/usuario",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:contacto@psiquiatranancyolivo.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/usuario",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/usuario",
  },
];

// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//
// 🔮 Hecho por: 𝘾𝙍𝙔𝙋𝙏𝙊𝙉𝙄𝙓𝘿𝙀𝙑 ░ "Innovación desde el código"
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
