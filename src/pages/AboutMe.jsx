/**TODO -> FIXED TEXT, DELETE TE P EXCEDED */
export const AboutMe = () => {
  return (
    <div
      className="block lg:flex w-auto h-auto max-w-[1140px] p-10 justify-center items-center m-auto"
      id="experience"
    >
      <div className=" flex flex-col flex-nowrap justify-center mx-auto">
        <header>
          <h3 className="text-black font-bold text-[31px] uppercase">
            hola, soy camilo vera
          </h3>
        </header>
        <footer>
          <div className="text-[17px] text-[#444]">
            <p className="py-3">
              I’m the founder of Forte Labs, and the question that drives me is,
              “
              <span className="text-black font-bold">
                How can humans reach their creative potential?
              </span>
              ”
            </p>{" "}
            <p className="py-3">
              To answer that question, I teach and write about new ways for you
              to thrive in our connected, digital world.
            </p>
            <p className="py-3">
              Over the last decade,{" "}
              <span className="text-black font-bold">
                {" "}
                I’ve helped thousands of people build a Second Brain.
              </span>
            </p>
            <p className="py-3">
              It’s a trusted place outside your head where you can collect and
              organize your most important ideas and insights, and use them to
              do your best work.
            </p>
            <p className="py-3">
              The ultimate goal of building a Second Brain is to help you lead a
              more fulfilling life with more ease and less stress.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
