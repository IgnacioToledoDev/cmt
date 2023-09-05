/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Question = ({ question }) => {
  const { Question } = question;
  return (
    <div className="w-screen h-screen">
      <h2 className="text-[22px] max-w-[80%]">{Question}</h2>
      <hr className="bg-[#f33a10] h-1 w-2/3 max-w-[80%]" />
      <div>
        {question.Answers.map((answer) => (
          <div key={answer.Answer}>
            <input />
            <label htmlFor="">{answer.Answer}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
