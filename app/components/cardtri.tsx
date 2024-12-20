'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  { path: "/", title: "Acceuil" },
  { path: "/about", title: "À propos" },
  { path: "/blog", title: "Blog" },
  { path: "/projets", title: "Projets" },
] as const;

const HoverMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false); // État pour gérer l'expansion du menu mobile
  const [isHovered, setIsHovered] = useState(false); // État pour gérer le hover sur le menu desktop

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className={"absolute top-3 left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center  " }>
      {/* Menu mobile */}
      <motion.div
  onClick={toggleExpand}
  animate={{
    width: isExpanded ? 300 : 100, // Largeur dynamique sur mobile
    height: isExpanded ? 300 : 40, // Hauteur dynamique sur mobile
  }}
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 25,
  }}
  className="bg-secondary text-primary rounded-lg shadow-lg overflow-hidden flex-col items-center justify-start cursor-pointer md:hidden"
>
  {/* Texte ou Avatar */}
  <div className="flex items-center justify-center mt-2">
    <span className="text-center mx-auto font-bold">Menu</span>
  </div>

  {/* Liens affichés dans le menu étendu */}
  {isExpanded && (
    <motion.div
      className="flex flex-col items-center justify-start mt-4 space-y-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src="/logo/logo.jpg" // Remplace par ton URL d'avatar
        alt="Avatar"
        className="w-8 h-8 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      {links.map(({ path, title }) => (
        <a
          key={path}
          href={path}
          className="text-primary text-sm"
        >
          {title}
        </a>
      ))}
      <ThemeSwitcher />
    </motion.div>
  )}
</motion.div>


      {/* Menu desktop (affiche seulement si l'écran est large, pas sur mobile) */}
      {/* <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          width: isHovered ? 500 : 100, // Largeur dynamique sur desktop
          height: 40, // Hauteur fixe
          backgroundColor: isHovered
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(0, 0, 0, 1)",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        className="hidden md:flex items-center justify-center relative text-primary rounded-full shadow-lg overflow-hidden"
      > */}
        {/* Contenu central du menu desktop */}
        {/* <div className="hidden md:flex items-center justify-center">
          {isHovered ? (
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {links.map(({ path, title }) => (
                <a
                  key={path}
                  href={path}
                  className="text-primary cursor-pointer "
                >
                  {title}
                </a>
              ))}
              <ThemeSwitcher />
            </motion.div>
          ) : (
            <span className="text-center mx-auto font-bold text-white">Menu</span>
          )}
        </div>
      </motion.div> */}
    </div>
  );
};

export default HoverMenu;
