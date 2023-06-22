import camiloVeraBg from "../assets/CamiloVeraBg.png";
import background_check from "../../public/ahorasi.svg";

import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import whattsap from "../assets/icons/whattsap.svg";

export const LandingHeader = () => {
  return (
    <section className=" h-screen w-screen relative text-center">
      <div className="flex items-center h-full justify-center">
        <div className="z-30 relative h-full flex flex-col pt-24 animate-fade-up">
          <header className="flex flex-col text-white text-[20px] md:text-[40px] ">
            <div className="w-[15rem] md:w-full pb-4">
              <img
                src={camiloVeraBg}
                alt="Camilo Vera, especialista en terapia de parejas"
              />
            </div>
            <h2 className="font-bold">Camilo Vera</h2>
            <p>Especialista en terapia de parejas</p>
          </header>
          <footer>
            <div className="flex pt-8  w-auto justify-between">
              <img
                src={instagram}
                alt="Logo de Instagram"
                className="cursor-pointer"
              />
              <img
                src={facebook}
                alt="Logo de Facebook"
                className="cursor-pointer"
              />
              <img
                src={whattsap}
                alt="Logo de Whattsap"
                className="cursor-pointer"
              />
            </div>
          </footer>
        </div>
      </div>
      <div className=" absolute object-cover top-0 bottom-0 w-full h-full blur-[1px]">
        <img src={background_check} alt="Fondo armonico" />
      </div>
    </section>
  );
};
