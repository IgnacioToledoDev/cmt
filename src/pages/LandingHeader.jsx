import camiloVeraBg from "../../public/camiloVera.jpg";
import { Link } from "react-router-dom";

export const LandingHeader = () => {
  return (
    <section className=" h-screen w-full relative text-center bg-[#f5f5f5] p-2 animate-fade-up">
      <div className="flex h-full">
        <div className="z-30 relative h-full w-full flex flex-col pt-24 animate-fade-up items-center justify-center">
          <div className="flex text-[20px] md:text-[50px] ">
            <header className="max-w-[1050px] p-8">
              <h1 className="p-1 pb-4 uppercase text-left font-bold text-[26px]">
                ¿Cuál es su potencial de productividad?
              </h1>
              <hr className="bg-[#f33a10] h-1 w-1/2" />
              <p className="lg:text-[22px] max-w-[875px] text-[16px] pt-8 text-left text-[#444]">
                Si tuvieras un segundo cerebro, ¿cuánto más organizado, eficaz,
                tranquilo y creativo podrías ser?
              </p>
              <Link
                to="/quiz"
                className="bg-[#f33a10] p-3 mt-10 text-sm lg:text-base font-bold text-white uppercase items-start justify-start block text-center w-1/2 h-auto rounded-md"
              >
                descúbralo aquí
              </Link>
            </header>
            <footer className="max-w-[22rem] md:w-full pb-4 pl-0 ml-28 md:m-auto md:items-center md:justify-center hidden lg:flex ">
              <img
                src={camiloVeraBg}
                alt="Camilo Vera, especialista en terapia de parejas"
                className="rounded-md pb-24"
              />
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};
