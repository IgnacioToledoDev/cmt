import camiloVera from "../assets/CamiloVera.jpeg";
// import fondo from "../assets/Fondo.jpg";
import Wave from "../../public/wave.svg";

export const LandingHeader = () => {
  return (
    <section className="bg-background lg:h-screen lg:w-screen relative overflow-hidden text-center">
      <div className="flex items-center h-full justify-center">
        <div className="z-30 relative h-full flex flex-col">
          <header className="flex flex-col">
            <h1 className="pt-40 text-[40px] font-semibold">Camilo Vera</h1>
            <p className="text-sm">
              Especialista en Terapia de Pareja / Terapia de Parejas
            </p>
          </header>
          <footer className="flex flex-grow flex-nowrap justify-end flex-col pt-8 pb-2 lg:pb-24">
            <a
              href="#"
              className="text-black border-blue-gray-700 rounded font-medium border-[3px] px-12 py-2 block hover:bg-black hover:text-white hover:border-none hover:transition hover:duration-150 duration-0"
            >
              Agenda ahora
            </a>
          </footer>
        </div>

        <div className="absolute lg:flex top-0 bottom-0 z-10 h-full w-full lg:pt-12 lg:items-center lg:justify-center">
          <img
            src={camiloVera}
            alt="Foto de portada de Camilo Vera"
            className="rounded"
          />
        </div>
      </div>

      <div className="absolute object-cover top-0 bottom-0 w-screen">
        <img src={Wave} alt="Fondo armonico" />
      </div>
    </section>
  );
};
