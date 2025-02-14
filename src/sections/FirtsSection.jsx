import React from "react";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaDev, FaGitSquare, FaNodeJs, FaReact } from "react-icons/fa";
import Title from "../components/Title";

const FirtsSection = () => {
  return (
    <>
      <Title title="DIEGO ABANTO MENDOZA"></Title>
      <p className="text-[#a7a9be] flex gap-x-2 text-sm items-center">
        <FaDev className="text-[#a7a9be] text-xl leading-relaxed" />
        Programador Front-End Junior con conocimientos en Back-end
      </p>
      <div className="flex flex-wrap pt-4 gap-x-2">
        <FaReact className="hover:text-[#6691c9] text-2xl" />
        <BiLogoTailwindCss className="hover:text-[#82daf5]  text-2xl" />
        <FaGitSquare className="hover:text-[#cc4343]  text-2xl" />
        <FaNodeJs className="hover:text-[#67b647]  text-2xl" />
      </div>
    </>
  );
};

export default FirtsSection;
