import Title from "../components/Title";
import { TestimonialCard } from "../components/coment";
import { AddComment } from "../components/addComment";

export const Comments = () => {
  return (
    <div className="p-4 ga-3 pt-12" id="comments">
      <Title title="Comentarios" />
      <div className="w-full h-full flex items-center justify-center">
        <AddComment />
      </div>
      <div className="space-y-[6px] py-4 flex flex-row flex-wrap w-full justify-between">
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
