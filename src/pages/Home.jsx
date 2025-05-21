// src/pages/Home.jsx
import React from "react";
import styles from "../style";
import {
  Hero,
  Benefits,
  Services,
  Testimonials,
  ContactForm,
  SocialContact,
} from "../components";
import Divider from "../components/Divider";  // o define inline

const Home = () => (
  <>
    {/* Hero */}
    <div className={`${styles.flexStart} pt-[80px] px-4 md:px-16 lg:px-32`}>
      <div className={styles.boxWidth}>
        <Hero />
      </div>
    </div>
    <Divider />

    {/* Beneficios */}
    <div className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={styles.boxWidth}>
        <Benefits />
      </div>
    </div>
    <Divider />

    {/* Servicios */}
    <div className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={styles.boxWidth}>
        <Services />
      </div>
    </div>
    <Divider />

    {/* Testimonios */}
    <div className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={styles.boxWidth}>
        <Testimonials />
      </div>
    </div>
    <Divider />

    {/* Formulario de cita */}
    <div className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={styles.boxWidth}>
        <ContactForm />
      </div>
    </div>
    <Divider />

    {/* Redes Sociales */}
    <div className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={styles.boxWidth}>
        <SocialContact />
      </div>
    </div>
  </>
);

export default Home;
