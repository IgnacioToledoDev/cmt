import Title from "./Title";
import {
  Card,
  CardBody,
  Typography,
  Button,
  CardHeader,
  Input,
  Checkbox,
  Textarea,
} from "@material-tailwind/react";

export const Contact = () => {
  return (
    <div>
      <Card className="flex mt-6 w-96 md:items-center md:justify-center md:w-screen md:border-2 md:border-gray-100 md:h-full">
        <CardHeader>
          <Title title="Agenda ahora" />
          <Typography className="p-2 text-center md:text-center">
            Agenda cita conmigo escogiendo una fecha de mi agenda. Recibirás un
            mensaje de confirmación y un recordatorio antes de la cita.
          </Typography>
        </CardHeader>
        <CardBody>
          <Card color="transparent" shadow={true}>
            <form className="mb-2 w-80 max-w-screen-lg sm:w-96 p-3 flex flex-col items-center justify-center">
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Nombre completo" color="gray" />
                <Input size="lg" label="Correo electronico" color="gray" />
                <Input
                  type="number"
                  size="lg"
                  label="Numero de Contacto"
                  color="gray"
                />
                <Textarea color="gray" label="Nota adicional" />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    Concentimiento de grabar session
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
                color="gray"
              />
              <Button className="mt-6" fullWidth color="gray">
                Agendar ahora
              </Button>
            </form>
          </Card>
        </CardBody>
      </Card>
    </div>
  );
};