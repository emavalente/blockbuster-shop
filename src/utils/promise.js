import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// ? Definnición de Promesa desde Firebase.
export const getFilms = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "films"));
    const dataFromFirebase = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return dataFromFirebase;
  } catch (error) {
    console.log(error);
  }
};
