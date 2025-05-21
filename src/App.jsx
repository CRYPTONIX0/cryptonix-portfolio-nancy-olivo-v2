// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./style";

import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import SocialContact from "./components/SocialContact";
import Curriculum from "./pages/Curriculum";

const Divider = () => (
  <div className="w-full h-[2px] my-8 bg-gradient-to-r from-[#ffc0e4] via-[#ffb3d9] to-[#ff94d3]" />
);

// Rutas animadas
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
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

              {/* Formulario */}
              <div className={`${styles.flexCenter} ${styles.paddingX}`}>
                <div className={styles.boxWidth}>
                  <ContactForm />
                </div>
              </div>
              <Divider />

              {/* Redes */}
              <div className={`${styles.flexCenter} ${styles.paddingX}`}>
                <div className={styles.boxWidth}>
                  <SocialContact />
                </div>
              </div>
            </motion.div>
          }
        />
        <Route
          path="/curriculum"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Curriculum />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(id);
  }, []);

  return (
    <Router>
      <div className="bg-black w-full min-h-screen text-white">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loading />
            </motion.div>
          ) : (
            <motion.div
              key="app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Navbar />
              <AnimatedRoutes />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
