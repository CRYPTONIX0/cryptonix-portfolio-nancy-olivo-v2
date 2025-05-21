import axios from "axios"; // Importando axios para hacer solicitudes HTTP
import { aboutMe, itemsToFetch, includedRepos } from "../constants/index"; // Importando datos y constantes de la configuración

// Función para hacer scroll hacia una sección de la página
export const scrollToSection = (id) => {
  const element = document.getElementById(id); // Obtiene el elemento por ID
  const yOffset = -70; // Ajuste de desplazamiento para compensar el encabezado fijo
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset; // Calcula la posición del elemento

  window.scrollTo({ top: y, behavior: "smooth" }); // Desplazamiento suave hacia la sección
};

// Función para analizar la URL de un repositorio en GitHub y extraer la organización, repositorio y logo
const parseOriginFromUrl = (url) => {
  /**
   * Divide una URL tipo https://github.com/repos/org-name/repo-name/issues/25
   * en un arreglo: ["github.com", "repos", "org-name", "repo-name", "issues", "25"]
   */
  const [, ...parts] = url.split(/https:\/\/|\//gm); // Separa la URL usando las expresiones regulares
  const organization = parts[1]; // Nombre de la organización en GitHub
  const repo = parts[2]; // Nombre del repositorio en GitHub
  /**
   * Accediendo al perfil de una organización en GitHub y añadiendo .png
   * al final de la URL devuelve su logo o imagen de perfil.
   */
  const logoUrl = `https://github.com/${organization}.png`; // URL del logo de la organización

  return {
    organization,
    repo,
    logoUrl,
  };
};

// Función para hacer solicitudes con reintentos en caso de fallo
export async function fetchContributionsWithRetry(maxRetries = 1) {
  let attempts = 0; // Contador de intentos

  // Intentar varias veces en caso de error
  while (attempts <= maxRetries) {
    try {
      const result = await fetchContributions(); // Llamada a la función para obtener contribuciones
      return result; // Retorna los resultados si la solicitud tiene éxito
    } catch (error) {
      attempts++; // Incrementa el contador de intentos
      console.log(`Intento ${attempts} fallido: ${error.message}. Reintentando...`); // Mensaje en consola sobre el fallo

      if (attempts > maxRetries) { // Si se alcanzó el máximo de intentos, retorna el error
        console.log("Se alcanzó el máximo de intentos. Retornando el último error.");
        return { error: error.message }; // Devuelve el mensaje de error
      }
    }
  }
}

// Función para generar una consulta GraphQL para obtener pull requests de repositorios
function generatePRQuery(repos, username) {
  const queries = repos
    .map((repo) => {
      return `repo:${repo} is:pr author:${username}`; // Genera la consulta para cada repositorio
    })
    .join(" "); // Une todas las consultas en una sola

  // Retorna la consulta completa
  return `
    query {
      search(query: "${queries}", type: ISSUE, first: ${itemsToFetch}) {
        nodes {
          ... on PullRequest {
            id
            title
            state
            number
            createdAt
            url
            additions
            deletions
          }
        }
      }
    }
  `;
}

// Función para obtener las contribuciones de GitHub usando una función de Netlify
export async function fetchContributions() {
  try {
    // Solicita las contribuciones a una función de Netlify para evitar exponer el token de GitHub en el cliente
    const response = await axios.post('/.netlify/functions/fetchContributions', {
      repos: includedRepos, // Repositorios a consultar
      username: aboutMe.githubUsername, // Nombre de usuario de GitHub
    });

    return response.data; // Retorna los datos de las contribuciones
  } catch (error) {
    console.error("Error al obtener contribuciones desde la función de Netlify: ", error); // Error en la consola si falla la solicitud
    throw error; // Lanza el error
  }
}

// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// 🔮 Hecho por: 𝘾𝙍𝙔𝙋𝙏𝙊𝙉𝙄𝙓𝘿𝙀𝙑 ░ "Innovación desde el código"
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
