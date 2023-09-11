import { collection, query, where, getDocs } from 'firebase/firestore'; // Ajusta las importaciones según tu configuración
import { firestore } from "../config/firebaseConfig";

export const getComments = async () => {
  const q = query(collection(firestore, "Comments"), where("rating", ">=", 3));

  const querySnapshot = await getDocs(q);
  const comments = [];
  querySnapshot.forEach((doc) => {
    comments.push(doc.data());
  });

  return comments; // Retornamos directamente el arreglo de comentarios
};


export const getQuestions = async () => {
  const q = query(collection(firestore, "Questions"));

  const querySnapshot = await getDocs(q);
  const questions = [];
  querySnapshot.forEach((doc) => {
    questions.push(doc.data());
  });

  return questions; // Retornamos directamente el arreglo de preguntas
}