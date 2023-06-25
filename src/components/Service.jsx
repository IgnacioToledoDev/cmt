import psychotherapy from "../assets/icons/psychotherapy.png";

// eslint-disable-next-line react/prop-types
export const Service = ({ name, price }) => {
  return (
    <div className="rounded-md p-5 m-5 bg-gradient-to-br from-sky-300 via-sky-500 to-sky-600 bg-opacity-90 inline-block">
      <div className="flex flew-col">
        <div className="inline-block flex-row m-1">
          <img src={psychotherapy} alt="Imagen de psicoterapia" />
        </div>
        <div>
          <h1 className="text-xl">{name || "None name"}</h1>
          <div>
            <p>
              Precio: <span>$</span> {price} por cada session
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
