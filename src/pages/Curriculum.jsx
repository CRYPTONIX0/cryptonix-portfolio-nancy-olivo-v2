// src/pages/Curriculum.jsx
import React from "react";
import {
  SkillsAndExperience,
  Education,
  Achievements,
  Projects,
  ExtraCurricular,
} from "../components";
import styles from "../style";
import Footer from "../components/Footer"; // Importa el Footer

// Título de página con gradiente rosa
const PageTitle = ({ children }) => (
  <h1
    className="font-poppins font-semibold ss:text-[48px] text-[32px] text-center mb-8"
    style={{
      backgroundImage:
        "linear-gradient(90deg, #ffc0e4 0.89%, #ffb3d9 17.23%, #ffd6ec 42.04%, #ffc0e4 55.12%, #ff6ec7 71.54%, #ff94d3 100%)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    {children}
  </h1>
);

export default function Curriculum() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className={`${styles.paddingX} ${styles.flexCenter} pt-[80px]`}>
        <div className={styles.boxWidth}>
          {/* Título de la sección */}
          <PageTitle>Currículum Profesional</PageTitle>

          {/* Habilidades y experiencia */}
          <section id="skills" className="bg-black py-8">
            <SkillsAndExperience />
          </section>

          {/* Educación */}
          <section id="education" className="bg-black py-8">
            <Education />
          </section>

          {/* Logros */}
          <section id="achievements" className="bg-black py-8">
            <Achievements />
          </section>

          {/* Proyectos y tesis */}
          <section id="projects" className="bg-black py-8">
            <Projects />
          </section>

          {/* Actividades extracurriculares */}
          <section id="extraCurricular" className="bg-black py-8">
            <ExtraCurricular />
          </section>
        </div>
      </div>
      <Footer /> {/* Aquí agregas el Footer */}
    </main>
  );
}
