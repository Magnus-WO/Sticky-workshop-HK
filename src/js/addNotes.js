import { v4 as uuidv4 } from "uuid";

//Function for creating a random number that controls the rotation of the notes
export const generateRandomNumber = () => {
  //Math.random() * (max - min +1) + min
  return Math.floor(Math.random() * (10 - -10 + 1) + -10);
};

const addNotes = (subject, date, text) => {
  const notesArray = JSON.parse(localStorage.getItem("notes")) || [];

  const note = {
    id: uuidv4(),
    subject: subject.value.trim(),
    date: date.value.trim(),
    text: text.value.trim(),
    rotation: generateRandomNumber(),
  };
  console.log(note);

  notesArray.push(note);

  console.log(notesArray);

  //   storeNotes();
};

export default addNotes;
