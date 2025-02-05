import React from "react";

const ImageFront = () => {
  return (
    <>
      <div className="w-full h-[30%] relative rounded-lg">
        <img
          src="https://raw.githubusercontent.com/R3dgrave/portafolio_v2/refs/heads/main/src/assets/background.webp"
          alt="Imagen de fondo"
          className="w-full lg:h-[300px] object-cover rounded-tl-lg rounded-tr-lg"
        />
      </div>
    </>
  );
};

export default ImageFront;
