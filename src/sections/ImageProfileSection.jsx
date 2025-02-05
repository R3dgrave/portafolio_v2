import React from "react";

const ImageProfileSection = () => {
  return (
    <>
      <div className="absolute -top-16 sm:-top-20 left-0 w-full flex flex-wrap items-center justify-between px-6">
        {/* Imagen de perfil circular */}
        <div className="w-24 h-24 sm:w-30 sm:h-30 md:w-40 md:h-40 lg:w-46 lg:h-46 rounded-full overflow-hidden border-4 border-[#0f0e17]">
          <img
            src="src/assets/photo-me.webp"
            alt="Perfil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ImageProfileSection;
