import { Typography } from "@material-tailwind/react";

export const Footer = () => {
  return (
    <footer className="w-auto p-8">
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        Camilo Vera &copy; 2023 - Psicologo y especialista en terapia de parejas
      </Typography>
    </footer>
  );
};
