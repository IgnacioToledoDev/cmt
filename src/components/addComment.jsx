import { Button, Rating } from "@material-tailwind/react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../config/firebaseConfig";
import { useRef, useState } from "react";
import { Loading } from "./Loading";

const handleComment = async (comment) => {
  const docRef = await addDoc(collection(firestore, "Comments"), comment);
  return docRef;
};

export const AddComment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rated, setRated] = useState(0);
  const commentRef = useRef();
  const authorRef = useRef();

  const submitHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const comment = {
      author: authorRef.current.value ? authorRef.current.value : "Anonimo",
      comment: commentRef.current.value,
      rating: rated,
      createdAt: new Date(),
      updateAt: new Date(),
    };
    const isValid = formValidator(comment);
    console.log(isValid);
    if (!isValid) {
      setIsLoading(false);
    }
    await handleComment(comment).finally(() => {
      setIsLoading(false);
    });
    commentRef.current.value = "";
    authorRef.current.value = "";
  };
  return (
    <div className="w-full h-full max-w-[900px] border rounded-sm shadow-md">
      <h3 className="m-6 p-1 font-bold text-lg">Opina sobre mi servicio</h3>
      <form className="m-6" onSubmit={submitHandler}>
        <div className="flex flex-col flex-wrap flex-2 w-full">
          <div className="flex w-full m-1  py-2">
            <p className="text-lg p-1 text-gray-400">Valora mi servicio</p>
            <Rating value={0} onChange={(value) => setRated(value)} required />
          </div>
          <div className="flex py-2 px-4 mb-4 w-1/2 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="user" className="sr-only">
              Tu nombre
            </label>
            <input
              className="px-0 w-full text-base text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Tu nombre *Opcional"
              type="text"
              ref={authorRef}
            />
          </div>
        </div>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label htmlFor="comment" className="sr-only">
            Tu nombre
          </label>
          <textarea
            id="comment"
            rows="6"
            className="px-0 w-full text-base text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Escribe un comentario..."
            required
            ref={commentRef}
          ></textarea>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <Button className="mt-6 bg-[#f33a10]" type="submit">
            Postear comentario
          </Button>
        )}
      </form>
    </div>
  );
};
