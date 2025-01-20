import addNotes from "./addNotes.js";
import renderNotes from "./renderNotes.js";
import validateNotes from "./validateNotes.js";

//Selecting html elements
const form = document.querySelector(".form");
const subjectInput = document.querySelector(".form__subject-input");
const dateInput = document.querySelector(".form__date-input");
const noteText = document.querySelector(".form__note-input");

//Inital render
document.addEventListener("DOMContentLoaded", renderNotes);

//Add submit event to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //if validation failes, prevent forms´ sumbission
  if (!validateNotes(subjectInput, dateInput, noteText)) {
    return;
  }
  addNotes(subjectInput, dateInput, noteText);
  renderNotes();
});
