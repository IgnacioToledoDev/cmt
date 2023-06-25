import { Service } from "./Service";
import Title from "./Title";

export const Services = () => {
  return (
    <div className="">
      <Title title="Mis Servicios" />
      <div className="items-center justify-center flex flex-wrap p-4">
        <Service name="Primera visita Psicologia" price="30000" />
        <Service name="Psicoterapia de parejas" price="40000" />
        <Service name="terapia de pareja" price="40000" />
        <Service
          name="Psicoterapia breve cetnrada en soluciones"
          price="30000"
        />
        <Service name="Psicoterapia con perspectiva LGBTIQA+" price="30000" />
        <Service name="Psicoterapia en adolescentes y adultos" price="30000" />
        <Service name="Psicoterapia para transgeneros" price="30000" />
      </div>
    </div>
  );
};
