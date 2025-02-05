import React, { useState } from "react";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAngular, SiReact, SiTailwindcss } from "react-icons/si";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      image: "https://raw.githubusercontent.com/R3dgrave/portafolio_v2/refs/heads/main/src/assets/ProjectsIMG/YourNotebook.webp",
      title: "Your Notebook",
      technologies: [SiReact, SiTailwindcss],
      description:
        "App para administrar notas, con editor de texto",
      codeLink: "https://github.com/R3dgrave/YourNotebook",
      demoLink: "https://r3dgrave.github.io/YourNotebook/",
    },
    {
      image: "https://raw.githubusercontent.com/R3dgrave/portafolio_v2/refs/heads/main/src/assets/ProjectsIMG/E-commerce.webp",
      title: "Tienda Web",
      technologies: [SiAngular, SiTailwindcss, DiNodejs, DiMongodb],
      description:
        "Proyecto de comercio electrónico Frontend-Backend-BDD",
      codeLink: "https://github.com/R3dgrave/E-Commerce-frontend",
      demoLink: "https://e-commerce-frontend-teal-one.vercel.app/",
    },
    {
      image: "https://raw.githubusercontent.com/R3dgrave/portafolio_v2/refs/heads/main/src/assets/ProjectsIMG/Calculadora.webp",
      title: "Calculadora",
      technologies: [SiReact, SiTailwindcss],
      description:
        "Calculadora Basica",
      codeLink: "https://github.com/R3dgrave/YourCalculator",
      demoLink: "https://r3dgrave.github.io/YourCalculator/",
    },
    {
      image: "https://raw.githubusercontent.com/R3dgrave/portafolio_v2/refs/heads/main/src/assets/ProjectsIMG/PortafolioV1.webp",
      title: "Portafolio V1",
      technologies: [SiAngular, SiTailwindcss],
      description:
        "Portafolio v1 con Angular y Tailwind",
      codeLink: "https://github.com/R3dgrave/Portafolio",
      demoLink: "https://portafolio-diegoabanto.vercel.app/",
    },
    {
      image: "https://raw.githubusercontent.com/R3dgrave/portafolio_v2/refs/heads/main/src/assets/ProjectsIMG/ColorHexAleatorio.webp",
      title: "Color Hex Aleatorio",
      technologies: [FaHtml5, IoLogoCss3, IoLogoJavascript],
      description:
        "App que te entrega el codigo hexadecimal de un color aleatorio",
      codeLink: "https://github.com/R3dgrave/ColorHexAleatorios-Javascript",
      demoLink: "https://r3dgrave.github.io/ColorHexAleatorios-Javascript/",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div>
      <Title title="Proyectos"></Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn btn-wide btn-outline"
        >
          {showAll ? 'Ver Menos' : 'Ver Más Proyectos'}
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;
