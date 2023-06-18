import { Experience } from "./Experience";
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
    <div className="w-full h-full items-center justify-center ">
      <Card className="mt-6 w-full md:px-8">
        <CardBody>
          <Title title="Sobre mi" />
          <Typography>
            <p>Soy especialista en Terapia de Pareja / Terapia de Parejas.</p>
            <p>
              La creatividad y la colaboración son claves para resolver lo
              difícil de la vida.
            </p>
            <p>
              Por grave que parezca tu situación, colaboraré con la mejor
              versión de ti mismo(a) para que busquemos oportunidades para que
              las cosas comiencen a ser diferentes y vuelvan a tener sentido.
            </p>{" "}
            <p>
              Antes de que tomes la decisión de contratar mis servicios, me
              encantaría que te hicieras la siguiente pregunta: ¿Cómo te darías
              cuenta de que una conversación conmigo ha sido exitosa? ¿Qué sería
              lo primero que notarías distinto?
            </p>{" "}
            <p>
              Pareciera que el cambios se da en los pequeños detalles de la vida
              cotidiana, al alcance de todas las personas. ¿Te animas a
              descubrir tus posibilidades?
            </p>{" "}
            <CardFooter className="m-0 text-center underline">
              {" "}
              Nos vemos en consulta.
            </CardFooter>
          </Typography>
          <Experience />
        </CardBody>
      </Card>
    </div>
  );
};
