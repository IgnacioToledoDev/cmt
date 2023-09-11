/**TODO -> FIXED TEXT, DELETE TE P EXCEDED */
export const AboutMe = () => {
  return (
    <div
      className="block lg:flex w-auto h-auto max-w-[1140px] p-10 justify-center items-center m-auto"
      id="experience"
    >
      <div className=" flex flex-col flex-nowrap justify-center mx-auto">
        <header>
          <h3 className="text-black font-bold text-[31px] uppercase">
            hola, soy camilo vera
          </h3>
        </header>
        <footer>
          <div className="text-[17px] text-[#444]">
            <p className="py-3">
              Y amo ser terapeuta. Hace años estoy obsesionado con ayudar a
              otros a cambiar a través de la conversación
            </p>{" "}
            <p className="py-3">
              Veo la terapia como un lugar de confianza donde puedes rescatar y
              organizar tus ideas más importantes y utilizarlas para beneficio
              de tu pareja, tus hijos y tu familia.
            </p>
            <p className="py-3">
              El fin de toda teripia radica en ayudarte a llevar una vida más
              plena, simple y con menos estrés.
            </p>
            <p className="py-3">
              Me gusta pensar que la solución está escondido en algún lugar
              oscuro, y que la terapia será como una lintera con la que vamos
              juntos a buscar esos tesoros ocultos.
            </p>
            <p className="py-3">¡Nos vemos en consulta!</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
