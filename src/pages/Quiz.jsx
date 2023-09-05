import { Navigation } from "../components/Navigation";
import { Link } from "react-router-dom";

export const Quiz = () => {
  return (
    <div>
      <Navigation />
      <section className=" h-screen w-full relative text-center bg-[#f5f5f5] p-6">
        <div className="flex items-center h-full justify-center">
          <div className="z-30 relative h-full w-full flex flex-col pt-24 items-center justify-center">
            <header className="flex text-[20px] md:text-[40px] ">
              <div className="flex items-center justify-center">
                <div className="">
                  <h1 className="p-1 pb-4 uppercase text-left">
                    ¿Eres consciente de cómo abordas los desafios?
                  </h1>
                  <hr className="bg-[#f33a10] h-1 w-1/2" />
                  <p className="text-base p-2 pt-8 text-left">
                    Identifica tu estilo y conoce cómo ampliar tu potencial.
                    <br />
                    <span className="font-bold">
                      Son 10 preguntas y toma cerca de 5 minutos.
                    </span>
                  </p>
                  <Link
                    to="/questions"
                    className="bg-[#f33a10] p-3 mt-10 text-base font-bold text-white uppercase items-start justify-start block text-center w-1/3 h-auto rounded-md"
                  >
                    Hacer el quiz aquí
                  </Link>
                </div>
              </div>
            </header>
          </div>
        </div>
      </section>
    </div>
  );
};
