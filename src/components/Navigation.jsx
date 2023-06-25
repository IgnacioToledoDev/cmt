import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="relative my-2 flex flex-col g-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#experience"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Experiencia
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#contact"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Agenda ahora
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#reference"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Comentarios
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#blog"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Blog
        </a>
      </Typography>
    </ul>
  );
}

export const Navigation = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="flex absolute z-40  max-w-screen overflow-hidden px-6 py-2 w-screen top-0 animate-fade-down animate-ease-linear">
      <Navbar
        className="mx-auto max-w-screen-xl px-6 py-2 inset-0 z-40 relative top-0"
        color="transparent"
      >
        <div className="flex items-center justify-between text-white ">
          <Typography
            as="a"
            href="#"
            variant="h5"
            className="mr-4 cursor-pointer py-1.5"
          >
            Camilo <span className="text-bold text-indigo-200">Vera</span>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
};
