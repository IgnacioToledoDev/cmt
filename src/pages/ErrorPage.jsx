import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";

export default function ErrorPage() {
  return (
    <section className="bg-white dark:bg-gray-900 " id="error-page">
      <Navigation />
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl uppercase">
            404 - Pagina no encontrada
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Lo sentimos, la pagina que buscas no existe o no esta disponible.
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto ">
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm bg-[#f33a10] text-white transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto hover:bg-orange-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <Link to="/" className="font-bold uppercase">
                volver a la pagina principal
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
