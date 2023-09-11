import Question from "../components/Question";

export const Questions = () => {
  const questions = [
    {
      question:
        "Imagina que tu jefe te ha solicitado a hacer una presentación inesperada para la que no estás muy preparado/a, ¿cuál sería tu prioridad?",
      options: {
        option1:
          "Anteponerte a los problemas, identificando las áreas débiles y dividiéndola en partes para prepararte sistemáticamente. ",
        option2:
          "Optar por abordar la situación con calma, concentrándote en el momento presente y confiar en que vas a salir adelante",
        option3: "Arriesgar a hacer algo novedoso",
      },
    },
    {
      question:
        "Imagina que deseas mejorar tu habilidad para cocinar platos más elaborados, pero te sientes inseguro/a, qué harías:?",
      options: {
        option1:
          "Descomponer cada receta en sus pasos y practicar cada uno de manera sistemática para evitar al máximo el error ",
        option2:
          "Enfocarte en el proceso y disfrutar experimentando en la cocina, sin preocuparte demasiado por los resultados finales. ",
        option3:
          "Buscar oportunidades desafiantes para poner a prueba tus habilidades culinarias ",
      },
    },
    {
      question:
        "Imagina que te encuentras con varios obstáculos al tratar de mejorar tu relación de pareja, qué harías:",
      options: {
        option1:
          "Abordar cada obstáculo como un problema a resolver, desglosándolo en aspectos más manejables y trazando un plan de acción. ",
        option2:
          "Aceptar el desafío con tranquilidad, priorizando la calma y confiando en el futuro de manera optimista. ",
        option3:
          "Recordar lo mejores momentos con mi pareja para buscar allí una posible solución. ",
      },
    },
    {
      question:
        "Imagina que te ofrecen la oportunidad de dar una charla en una conferencia, pero esto te sacaría de tu zona de confort. Al aceptar la oportunidad, ¿cómo te lo tomarías?:",
      options: {
        option1:
          "Te enfocas dividir tus debilidades en pequeños problemas a resolver uno por uno.(",
        option2:
          "Te enfocas en imaginar el final glorioso, como un orador confiada(o) e inspirador(a) para replicar eso que te imaginaste.",
        option3:
          "Como una forma de permanecer en calma frente a lo desconocido y tener confianza en ti misma(o) y en lo que te depara el futuro. ",
      },
    },
    {
      question:
        "Imagina que te encuentras en un período de estabilidad laboral y personal, ¿qué harías?:",
      options: {
        option1:
          "Anteponerme a los problemas que me puedan quitar la estabilidad y en lo posible, disminuir los riesgos de que algo malo suceda.",
        option2:
          "Disfrutar de la estabilidad, saboreando el presente y viviendo sin preocuparte en exceso por el pasado o el futuro. ",
        option3:
          "Buscar riesgos que pongan a prueba mi estabilidad, para verme enfrentado(a) a situaciones incómodas.",
      },
    },
    {
      question:
        "Imagina que estás en medio de un desacuerdo con un amigo cercano sobre un tema sensible, ¿qué harías?",
      options: {
        option1:
          "Analizar el desacuerdo con detenimiento para encontrar las causas de sus diferencias. ",
        option2:
          "Concentrarte en estar atento(a) a tu respiración y en encontrar tranquilidad.",
        option3:
          "Detenerte a pensar qué quieres lograr con esa conversación y elegir en consecuencia. ",
      },
    },
    {
      question:
        "Imagina que has logrado completar un proyecto importante en el trabajo. Si tuvieras que elegir sólo una de las siguientes opciones, ¿qué preferirías hacer durante los próximos días?",
      options: {
        option1:
          "Analizar los detalles del proyecto detalladamente, identificando en qué te equivocaste y analizar cada error por separado, para luego enfocarte en aprender las habilidades que te faltan.",
        option2:
          "Disfrutar del sentimiento de logro en el presente y celebrar tus éxitos con el equipo, sin darle más vueltas al pasado.",
        option3:
          "Repasar lo que hiciste mejor, identificar qué fue clave para lograrlo",
      },
    },
    {
      question:
        "Imagina que estás enfrentando momentos de duda sobre tu carrera y tus objetivos profesionales, ¿qué harías?:",
      options: {
        option1:
          "Analizar tus dudas detalladamente, identificando las áreas que te generan incertidumbre y buscando maneras de abordarlas. ",
        option2:
          "Intentar no pensar en nada, olvidarte del presente y del futuro para dejarte llevar.",
        option3:
          "Buscar una forma de imaginar con claridad la vida que desearías estar viviendo y buscar maneras de acercarte a eso que deseas.",
      },
    },
    {
      question: "Cuando tienes un fracaso en tu vida, generalmente, buscas:",
      options: {
        option1: "Descubrir las causas del fracaso.",
        option2: "No pensar en nada.",
        option3: "Descubrir qué fue lo que pude haber hecho bien. ",
      },
    },
    {
      question:
        "Todos tenemos fortalezas y debilidades. ¿En qué te concentras tú?",
      options: {
        option1: "Mejorar tus debilidades. ",
        option2: "Fluir y dejarte llevar.",
        option3: "Mejorar tus fortalezas.",
      },
    },
  ];
  questions.map((question) => {
    console.log(question.question, question.options);
  });
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
        {questions.map((question) => {
          return (
            <Question
              question={question.question}
              options={question.options}
              key={question.question}
            />
          );
        })}
      </div>
    </div>
  );
};
