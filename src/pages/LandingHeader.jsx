import camiloVeraBg from "../assets/CamiloVeraBg.png";
import { Link } from "react-router-dom";

export const LandingHeader = () => {
  return (
    <section className=" h-screen w-full relative text-center bg-[#f5f5f5] p-6 animate-fade-up">
      <div className="flex items-center h-full justify-center">
        <div className="z-30 relative h-full w-full flex flex-col pt-24 animate-fade-up items-center justify-center">
          <header className="flex text-[20px] md:text-[50px] ">
            <div className="flex items-center justify-center">
              <div className="">
                <h1 className="p-1 pb-4 uppercase text-left font-bold">
                  ¿Cuál es su potencial de productividad?
                </h1>
                <hr className="bg-[#f33a10] h-1 w-1/2" />
                <p className="text-base pt-8 text-left">
                  Si tuvieras un segundo cerebro, ¿cuánto más organizado,
                  eficaz, tranquilo y creativo podrías ser?
                </p>
                <Link
                  to="/quiz"
                  className="bg-[#f33a10] p-3 mt-10 text-base font-bold text-white uppercase items-start justify-start block text-center w-1/2 h-auto rounded-md"
                >
                  descúbralo aquí
                </Link>
              </div>
              <div className="w-[18rem] md:w-full pb-4 pl-0 ml-0 m-6 md:m-auto md:items-end md:justify-end hidden lg:inline-flex">
                <img
                  src={camiloVeraBg}
                  alt="Camilo Vera, especialista en terapia de parejas"
                  className="items-end justify-end"
                />
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};
