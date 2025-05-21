// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { close, nancy, menu } from "../assets";
import { scrollToSection } from "../lib/helperFunctions";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // Mobile menu closed by default
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const homeLinks = [
    { id: "benefits", title: "Beneficios de la Consulta", to: "#benefits" },
    { id: "services", title: "Servicios", to: "#services" },
    { id: "testimonials", title: "Testimonios", to: "#testimonials" },
    { id: "contactForm", title: "Agenda tu Cita", to: "#contactForm" },
    { id: "socialContact", title: "Redes Sociales y Contacto", to: "#socialContact" },
    { id: "curriculum", title: "Currículum", to: "/curriculum" },
  ];
  const curriculumLinks = [
    { id: "skills", title: "Habilidades y experiencia", to: "#skills" },
    { id: "education", title: "Educación", to: "#education" },
    { id: "achievements", title: "Logros", to: "#achievements" },
    { id: "projects", title: "Proyectos", to: "#projects" },
    { id: "extraCurricular", title: "Extracurriculares", to: "#extraCurricular" },
    { id: "home", title: "Volver al Inicio", to: "/" },
  ];
  const links = location.pathname === "/curriculum" ? curriculumLinks : homeLinks;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="nav-styles sm:px-16 px-6"
    >
      {/* Logo */}
      <Link to="/">
        <img src={nancy} alt="Logo" className="w-[80px] h-[80px]" />
      </Link>

      {/* Desktop */}
      <ul className="hidden sm:flex flex-1 justify-end items-center p-4 list-none">
        {links.map(nav => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-[16px] mr-10 text-gradient hover:opacity-80"
          >
            {nav.to.startsWith("/") ? (
              <Link to={nav.to}>{nav.title}</Link>
            ) : (
              <button onClick={() => scrollToSection(nav.to.slice(1))}>
                {nav.title}
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(prev => !prev)}
        />
        {toggle && (
          <div className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
            <ul className="flex flex-col items-center list-none">
              {links.map(nav => (
                <li
                  key={nav.id}
                  className="font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white"
                >
                  {nav.to.startsWith("/") ? (
                    <Link to={nav.to} onClick={() => setToggle(false)}>
                      {nav.title}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        scrollToSection(nav.to.slice(1));
                        setToggle(false);
                      }}
                    >
                      {nav.title}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
