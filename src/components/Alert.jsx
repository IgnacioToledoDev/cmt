import { Alert } from "@material-tailwind/react";
import { useState } from "react";

function IconSucces() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconFail() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function AlertSucces() {
  const [open, setOpen] = useState(true);
  return (
    <Alert
      open={open}
      onClose={() => setOpen(false)}
      animate={{
        mount: { y: 0 },
        unmount: { y: 100 },
      }}
      icon={<IconSucces />}
      className="absolute w-full h-full z-30 rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
    >
      Agregado correctamente
    </Alert>
  );
}

// eslint-disable-next-line react/prop-types
export function AlertFail({ message }) {
  const [open, setOpen] = useState(true);
  return (
    <Alert
      open={open}
      onClose={() => setOpen(false)}
      animate={{
        mount: { y: 0 },
        unmount: { y: 100 },
      }}
      icon={<IconFail />}
      className="rounded-none border-l-4 border-[#c83c3c98]  font-medium text-[#1a1a1a] bg-[#c83c3c98]/10"
    >
      {message}
    </Alert>
  );
}
