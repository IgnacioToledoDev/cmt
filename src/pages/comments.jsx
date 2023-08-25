import Title from "../components/Title";
import { TestimonialCard } from "../components/coment";
import { AddComment } from "../components/addComment";
import { useEffect, useState } from "react";
import { getComments } from "../services/firebase";

export const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetchedComments = await getComments();
        setComments(fetchedComments);
      } catch (error) {
        console.error("Error al obtener comentarios:", error);
      }
    };

    fetchComments();
  }, []);
  return (
    <div className="p-4 ga-3 pt-12" id="comments">
      <Title title="Comentarios" />
      <div className="w-full h-full flex items-center justify-center">
        <AddComment />
      </div>
      <div className="space-y-[6px] py-4 flex flex-row flex-wrap w-full justify-between">
        {comments.map((comment) => (
          <TestimonialCard comment={comment} key={comment.author} />
        ))}
      </div>
    </div>
  );
};
