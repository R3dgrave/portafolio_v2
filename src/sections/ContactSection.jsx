import React from "react";
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import IconLink from "../components/IconLink";
import Title from "../components/Title";

const ContactSection = () => {
  return (
    <>
      <Title title="CONTACTO" />
      <div className="pb-2 flex flex-wrap gap-x-3 gap-y-2">
        <IconLink
          href="https://github.com/R3dgrave"
          icon={FaGithub}
          label="Perfil Github"
        />
        <IconLink
          href="https://www.linkedin.com/in/diego-abanto-b42b81289/"
          icon={FaLinkedin}
          label="Perfil LinkedIn"
          className="btn-info"
        />
        <IconLink
          href="mailto:diego.abantomendoza@gmail.com"
          icon={FaEnvelope}
          label="Enviar Correo"
          className="btn-error"
        />
        <IconLink
          href="https://drive.google.com/file/d/1NCw4PSy_QHCeYWtBP8JtSn6_5OEsymrx/view"
          icon={FaFileAlt}
          label="Descargar CV"
          target="_blank"
          className="btn-secondary"
        />
        <button className="link link-hover text-sm flex gap-2 items-center pl-4 pt-4">
          <FaEnvelope className="w-4 h-4" />
          diego.abantomendoza@gmail.com
        </button>
      </div>
    </>
  );
};

export default ContactSection;
