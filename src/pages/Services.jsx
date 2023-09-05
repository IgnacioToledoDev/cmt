import { Service } from "./Service";
import Title from "../components/Title";

export const Services = () => {
  return (
    <div className="p-0 m-0">
      <Title title="Mis Diferentes formas para ayudarte" />
      <div className="items-center max-w-[1500px] lg:mx-[165px] my-0 w-full flex flex-wrap p-4 gap-3">
        <Service name="Primera visita Psicologia" price="30000" />
        <Service name="Psicoterapia de parejas" price="40000" />
        <Service name="terapia de pareja" price="40000" />
      </div>
    </div>
  );
};
