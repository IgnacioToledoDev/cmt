import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useRef } from "react";

const handleUser = async (user) => {
  const isLogin = await signInWithEmailAndPassword(
    auth,
    user.email,
    user.password
  ).catch((error) => {
    if (error === "auth/wrong-password") {
      console.log("Contraseña incorrecta");
    }
    if (error === "auth/user-not-found") {
      console.log("Usuario no encontrado");
    }
  });

  if (isLogin) {
    console.log("Usuario logeado");
  }
};

export const Admin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    await handleUser(user);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="w-screen h-screen bg-[#fff] flex">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-center uppercase font-bold text-2xl p-4">
          Bienvenido administrador
        </h1>
        <div className="h-full max-h-[350px] shadow-sm">
          <form
            onSubmit={submitHandler}
            action="/dashboard"
            className="relative mb-2 w-80 sm:w-96 p-3 flex flex-col border-2 rounded h-full"
          >
            <div className="mb-4 flex flex-col gap-3 [&>label]:text-md [&>label]:p-1 [&>input]:p-1 [&>input]:border-[2px] [&>input]:border-indigo-100 [&>input]:rounde">
              <div className="flex flex-col p-1 m-1 w-full">
                <label>Correo electronico:</label>
                <input
                  placeholder="example@example.com"
                  ref={emailRef}
                  type="email"
                  className="border-sm border-[#eb7054] border-[1px] rounded p-1"
                />
              </div>
              <div className="flex flex-col p-1 m-1 w-full">
                <label>Contraseña</label>
                <input
                  ref={passwordRef}
                  placeholder="**********"
                  type="password"
                  className="border-sm border-[#eb7054] border-[1px] rounded p-1"
                />
              </div>
            </div>
            <button className="text-blue-900 text-center text-sm hover:text-indigo-800">
              has olvidado tu contraseña?
            </button>
            <button
              type="submit"
              className="mt-6 bg-[#f33a10] rounded-sm p-2 text-center uppercase font-bold"
            >
              entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
