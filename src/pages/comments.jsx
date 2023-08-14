import Title from "../components/Title";
import { TestimonialCard } from "./coment";

export const Comments = () => {
  return (
    <div className="p-4 ga-3" id="comments">
      <Title title="Comentarios" />
      <div className="p-8 flex flex-row flex-wrap w-full justify-between m-2">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};
