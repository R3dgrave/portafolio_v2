import React from "react";

const ProjectCard = ({
  image,
  title,
  technologies,
  description,
  codeLink,
  demoLink,
}) => {
  return (
    <div className="bg-white dark:bg-[#0f0e17] shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 flex flex-col h-full">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        <h2 className="absolute bottom-2 left-2 text-white text-xl font-bold drop-shadow-md">
          {title}
        </h2>
      </div>
      <div className="p-4 flex-grow">
        <p className="text-gray-800 dark:text-gray-200 mb-2 text-sm">{description}</p>
        <div className="flex space-x-2">
          {technologies.map((TechIcon, index) => (
            <TechIcon key={index} className="text-2xl text-blue-500 dark:text-teal-400" />
          ))}
        </div>
      </div>
      <div className="p-4 mt-auto">
        <div className="flex justify-between flex-col gap-2">
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Código
          </a>
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-success">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
