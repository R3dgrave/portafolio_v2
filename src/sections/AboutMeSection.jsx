import React from "react";
import Title from "../components/Title";

const AboutMeSection = () => {
  return (
    <>
      <div className="relative transform transition-transform border-2 border-black bg-[#0f0e17] p-6 group-hover:-translate-x-2 group-hover:-translate-y-2">
        <Title title="SOBRE MÍ" />
        <p className="text-sm text-[#a7a9be] pb-2 leading-relaxed">
          Soy Diego, Analista Programador titulado. Durante mi formación,
          adquirí experiencia trabajando en equipo para desarrollar aplicaciones
          web completas, participando activamente en todas las etapas del
          proyecto: análisis, planificación, desarrollo y pruebas. Esto me
          permitió manejar tecnologías actuales y altamente demandadas en el
          mercado.
        </p>
        <p className="text-sm text-[#a7a9be] leading-relaxed">
          Mi objetivo profesional es mejorar continuamente mis habilidades para
          desempeñarme de manera autónoma y aportar soluciones innovadoras en
          cada proyecto en el que participe.
        </p>
      </div>
    </>
  );
};

export default AboutMeSection;
