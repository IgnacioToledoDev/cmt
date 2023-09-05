import { useEffect, useState } from "react";
import Question from "../components/Question";

import { getQuestions } from "../services/firebase";

export const Questions = () => {
  //   const [currentQuestion, setCurrentQuestion] = useState(0);
  //   const [progress, setProgress] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const fetchQuestions = await getQuestions();
        setQuestions(fetchQuestions);
      } catch (error) {
        console.error("Error al obtener las preguntas:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="w-screen h-screen bg-[#fff]">
      <div className="flex justify-center ">
        <h1 className="font-bold text-[32px] max-w-[1200px] p-4 m-2 ">
          A continuación te presento 10 situaciones con 3 opciones para elegir.
          Probablemente te sientas inclinado por más de una opción, pero
          esfuérzate por escoger la que más se acerque a lo que harías tú.
        </h1>
      </div>

      <div className="w-full m-4 p-4 font-semibold text-[46px]">
        <hr className="" />
        {questions.map((question) => (
          <Question key={question.Question} question={question} />
        ))}
      </div>
    </div>
  );
};
