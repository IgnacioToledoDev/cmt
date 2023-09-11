import Title from "../components/Title";
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
        <CardHeader className="rounded-md shadow-sm border-none">
          <Title title="Mas información aquí" />
          <p className="p-2 text-center my-2 mx-2">
            Si tienes alguna duda o quieres agendar una sesión, puedes hacerlo
            aquí. Solo debes llenar el formulario y te contactaremos a la
            brevedad.
          </p>
        </CardHeader>
        <CardBody className="relative w-[95%] h-full items-center justify-center flex p-1 flex-col">
          <div className="flex flex-row pt-2 items-center justify-center">
            <form className="relative mb-2 w-80 sm:w-96 p-3 flex flex-col border-2 rounded">
              <div className="mb-4 flex flex-col gap-3 [&>label]:text-md [&>label]:p-1 [&>input]:p-1 [&>input]:border-[2px] [&>input]:border-indigo-100 [&>input]:rounde">
                <div className="flex flex-col p-1 m-1 w-full">
                  <label>Nombre completo:</label>
                  <input
                    placeholder="Example Example"
                    type="text"
                    className="border-sm border-[#eb7054] border-[1px] rounded p-1"
                  />
                </div>
                <div className="flex flex-col p-1 m-1 w-full">
                  <label>Correo electronico:</label>
                  <input
                    placeholder="example@example.com"
                    type="email"
                    className="border-sm border-[#eb7054] border-[1px] rounded p-1"
                  />
                </div>
                <div className="p-1 m-1 flex flex-col w-full ">
                  <label>Numero telefonico:</label>
                  <PhoneInput
                    className="border-sm border-[#eb7054] border-[1px] rounded p-1"
                    placeholder="56 9 9999 9999"
                    value={country}
                    onChange={setCountry}
                  />
                </div>
                <div className="flex flex-col p-1 m-1 w-full">
                  <label>Nota adicional:</label>
                  <textarea className="border-sm border-[#eb7054] border-[1px] rounded p-1 resize-none h-[150px]" />
                </div>
              </div>
              <div className="flex flex-col p-1 m-1 w-full">
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="black"
                      className="flex items-center font-base"
                    >
                      consentimiento de grabar session
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                  color="red"
                />
              </div>
              <Button className="mt-6 bg-[#f33a10]" fullWidth>
                Agendar ahora
              </Button>
            </form>
            {/* <div className="w-full h-full p-2 justify-center flex">
              <h3 className="text-lg">Fechas disponibles</h3>
            </div> */}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
