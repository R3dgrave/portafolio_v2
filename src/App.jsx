import MotionAnimationGradiant from "./components/MotionAnimationGradiant";
import AboutMeSection from "./sections/AboutMeSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import FirtsSection from "./sections/FirtsSection";
import ImageFront from "./sections/ImageFront";
import ImageProfileSection from "./sections/ImageProfileSection";
import ProjectsSection from "./sections/ProjectsSection";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#171E27] via-[#171E27] to-[#681B15] min-h-screen w-full">
        <div className="w-full flex justify-center py-5 relative">
          <MotionAnimationGradiant>
            <div className="w-[100%] flex flex-col rounded-lg">
              {/* Contenido Imagen Fondo */}
              <ImageFront></ImageFront>

              {/* Contenido bajo */}
              <div className="w-full bg-[#0f0e17] flex flex-col items-center p-6 relative rounded-bl-lg rounded-br-lg">
                {/* Contenedor intermedio foto perfil */}
                <ImageProfileSection></ImageProfileSection>

                {/* Contenedor interior */}
                <div className="bg-[#1E1D25] w-full mt-10 md:mt-20 p-5 md:p-6 rounded-lg shadow-md">
                  {/*Primera Seccion*/}
                  <div className="border-b border-gray-400 pb-4">
                    <FirtsSection></FirtsSection>
                  </div>

                  {/*Contacto*/}
                  <div className="border-b border-gray-400 pt-6 pb-4">
                    <ContactSection></ContactSection>
                  </div>

                  {/*Experiencia Laboral*/}
                  <div className="border-b border-gray-400 relative pt-6 pb-4 group">
                    <ExperienceSection></ExperienceSection>
                  </div>

                  {/* Proyectos */}
                  <div className="border-b border-gray-400 pt-6 pb-4">
                    <ProjectsSection></ProjectsSection>
                  </div>

                  {/* Sobre mi */}
                  <div className="relative pt-6 pb-4 group">
                    <AboutMeSection></AboutMeSection>
                  </div>
                </div>
              </div>
            </div>
          </MotionAnimationGradiant>
        </div>
      </div>
    </>
  );
}

export default App;
