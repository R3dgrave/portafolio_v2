import React from "react";

const ExperienceItem = ({ title, company, date, description }) => {
  return (
    <li className="text-white pb-6">
      <div className="pb-4">
        <h3 className="text-[#fffffe] text-base font-semibold">{title}</h3>
        <p className="text-[#fffffe] text-sm">{company}</p>
        <p className="text-[#fffffe]  p-0 m-0 text-xs">{date}</p>
      </div>
      <div className="text-[#a7a9be]">
        <div>{description}</div>
      </div>
    </li>
  );
};

export default ExperienceItem;
