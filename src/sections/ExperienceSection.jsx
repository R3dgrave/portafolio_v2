import React from "react";
import ExperienceItem from "../components/ExperienceItem";
import Title from "../components/Title";

const ExperienceSection = () => {
  return (
    <>
      <div className="relative transform transition-transform border-2 border-black bg-[#0f0e17] p-6 group-hover:-translate-x-2 group-hover:-translate-y-2">
        <Title title="EXPERIENCIA LABORAL"></Title>
        <section id="experiencia">
          <ol>
            <ExperienceItem
              title="Practicante - Área Transformación Digital"
              company="Latam Trade Capital"
              date="Junio 2024 - Agosto 2024"
              description={
                <>
                  <p className="text-sm leading-relaxed">
                    Contribuí como parte del equipo de soporte TI.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Colaboré de manera efectiva con el equipo de desarrolladores
                    de la empresa, donde implementé mejoras visuales en la
                    interfaz, añadí funcionalidades como un editor de texto
                    usando Quill Text Editor, trabajé con tecnologías como
                    Angular, TypeScript y Bootstrap.
                  </p>
                </>
              }
            />
            <ExperienceItem
              title="Independiente"
              company="Servicio reparación, armado de computadoras"
              date="Enero 2022 - Actualmente…"
              description={
                <>
                  <p className="text-sm leading-relaxed">
                    Trabajo independiente en mi tiempo libre dando servicio de
                    reparación, diagnóstico a ordenadores de sobremesa y
                    portátiles.
                  </p>
                </>
              }
            />
          </ol>
        </section>
      </div>
    </>
  );
};

export default ExperienceSection;
