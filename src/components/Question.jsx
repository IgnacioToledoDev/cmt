/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Question = ({ question, options }) => {
  return (
    <div className="lg:w-screen lg:h-screen w-full h-full p-2lg:p-4 pt-8 overflow-hidden">
      <h2 className="text-[18px] lg:text-[22px] lg:max-w-[80%]">{question}</h2>
      <hr className="bg-[#f33a10] h-1 w-2/3 max-w-[80%]" />
      <div
        className="
      [&>div>label]:text-[12px] lg:[&>div>label]:text-[16px] font-normal [&>div>input]:w-[46px] [&>div]:p-0 m-0 flex flex-col flex-wrap justify-start
      "
      >
        <div>
          <input type="checkbox" value={options.option1} id={options.option1} />
          <label htmlFor={options.option1}>{options.option1}</label>
        </div>
        <div>
          <input type="checkbox" value={options.option2} id={options.option2} />
          <label htmlFor={options.option2}>{options.option2}</label>
        </div>
        <div>
          <input type="checkbox" value={options.option3} id={options.option3} />
          <label htmlFor={options.option3}>{options.option3}</label>
        </div>
      </div>
    </div>
  );
};
export default Question;
