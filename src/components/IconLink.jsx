import React from "react";

const IconLink = ({ href, icon: Icon, label, className = "" }) => {
  return (
    <a
      type="button"
      target={href.startsWith("http") ? "_blank" : "_self"}
      href={href}
      aria-label={label}
      className={`btn btn-outline flex items-center pl-4 btn-sm ${className}`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </a>
  );
};

export default IconLink;
