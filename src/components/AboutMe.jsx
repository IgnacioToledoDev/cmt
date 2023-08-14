import { Experience } from "./Experience";
import camiloVeraBg from "../assets/CamiloVeraBg.png";
import Title from "./Title";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

/**TODO -> FIXED TEXT, DELETE TE P EXCEDED */
export const AboutMe = () => {
  return (
    <div
      className="block lg:flex w-auto h-full lg:items-center lg:justify-center"
      id="experience"
    >
      <Card className="mt-6 w-full lg:w-[85%] md:px-8" shadow={false}>
        <CardBody>
          <Title title="Sobre mi" />
          <div className="flex">
            <div className="w-full m-10 md:m-auto md:items-center md:justify-center hidden lg:inline-flex items-center justify-center">
              <img
                src={camiloVeraBg}
                className="pb-24"
                alt="Camilo Vera, especialista en terapia de parejas"
              />
            </div>
            <div className="w-full m-12">
              <Typography variant="lead" color="black">
                <p>
                  Soy especialista en Terapia de Pareja / Terapia de Parejas.{" "}
                  <br />
                  La creatividad y la colaboración son claves para resolver lo
                  difícil de la vida. Por grave que parezca tu situación,
                  colaboraré con la mejor versión de ti mismo(a) para que
                  busquemos oportunidades para que las cosas comiencen a ser
                  diferentes y vuelvan a tener sentido.
                  <br />
                  Antes de que tomes la decisión de contratar mis servicios, me
                  encantaría que te hicieras la siguiente pregunta: ¿Cómo te
                  darías cuenta de que una conversación conmigo ha sido exitosa?
                  ¿Qué sería lo primero que notarías distinto? Pareciera que el
                  cambios se da en los pequeños detalles de la vida cotidiana,
                  al alcance de todas las personas. ¿Te animas a descubrir tus
                  posibilidades?
                </p>
                <CardFooter className="m-0 text-center underline">
                  Nos vemos en consulta.
                </CardFooter>
              </Typography>
            </div>
          </div>
          <Experience />
        </CardBody>
      </Card>
    </div>
  );
};
