import Title from "./Title";
import Wave from "../../public/wave.svg";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  CardHeader,
  Checkbox,
} from "@material-tailwind/react";

export const Contact = () => {
  const [country, setCountry] = useState();
  return (
    <div
      className="relative w-[95%-5rem] h-full z-30 pt-8 lg:p-auto lg:overflow-hidden"
      id="contact"
    >
      <Card
        className="flex mt-6 w-auto md:items-center md:justify-center md:w-screen md:h-full z-30 bg-transparent"
        shadow={false}
      >
        <CardHeader>
          <Title title="Agenda ahora" />
          <p className="p-2 text-center my-2 mx-2">
            Agenda cita conmigo escogiendo una fecha de mi agenda. Recibirás un
            mensaje de confirmación y un recordatorio antes de la cita.
          </p>
        </CardHeader>
        <CardBody className="relative w-[95%] h-full items-center justify-center flex p-1 flex-col overflow-hidden">
          <div className="flex flex-row pt-2 items-center justify-center">
            <Card className="flex rounded w-auto ">
              <form className="relative mb-2 w-80 sm:w-96 p-3 flex flex-col border-2 rounded overflow-auto">
                <div className="mb-4 flex flex-col gap-3 [&>label]:text-md [&>label]:p-1 [&>input]:p-1 [&>input]:border-[2px] [&>input]:border-indigo-100 [&>input]:rounded">
                  <label>Nombre completo:</label>
                  <input placeholder="Example Example" type="text" />
                  <label>Correo electronico:</label>
                  <input placeholder="example@example.com" type="email" />
                  <label>Numero telefonico:</label>
                  <PhoneInput
                    className="p-1 border-[2px] border-indigo-100 rounded"
                    placeholder="56 9 9999 9999"
                    value={country}
                    onChange={setCountry}
                  />
                  <label>Nota adicional:</label>
                  <textarea className="text-md p-1 border-[2px] border-indigo-100 rounded resize-none h-[120px] w-auto" />
                </div>
                <Checkbox
                  label={
                    <Typography
                      variant="md"
                      color="black"
                      className="flex items-center font-normal"
                    >
                      Concentimiento de grabar session
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                  color="indigo"
                />
                <Button className="mt-6" fullWidth color="indigo">
                  Agendar ahora
                </Button>
              </form>
            </Card>
            {/* <div className="w-full h-full p-2 justify-center flex">
              <h3 className="text-lg">Fechas disponibles</h3>
            </div> */}
          </div>
        </CardBody>
      </Card>
      <div className="absolute object-cover top-0 bottom-0 w-full h-full blur-[1px] hidden lg:block">
        <img src={Wave} alt="Fondo armonico" />
      </div>
    </div>
  );
};
