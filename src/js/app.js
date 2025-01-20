import addNotes, { generateRandomNumber } from "./addNotes.js";
import { editState } from "./editNotes.js";
import renderNotes from "./renderNotes.js";
import storeNotes from "./storeNotes.js";
import validateNotes from "./validateNotes.js";

//Selecting html elements
const form = document.querySelector(".form");
const subjectInput = document.querySelector(".form__subject-input");
const dateInput = document.querySelector(".form__date-input");
const noteText = document.querySelector(".form__note-input");
const submitButton = document.querySelector(".form__submit-button");

//Inital render
document.addEventListener("DOMContentLoaded", renderNotes);

//Add submit event to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //if validation failes, prevent forms´ sumbission
  if (!validateNotes(subjectInput, dateInput, noteText)) {
    return;
  }

  if (!editState.isEditMode) {
    addNotes(subjectInput, dateInput, noteText);
    renderNotes();
  } else {
    const notesList = JSON.parse(localStorage.getItem("notes"));
    const editedNote = {
      id: editState.currentEditId,
      subject: subjectInput.value.trim(),
      date: dateInput.value.trim(),
      text: noteText.value.trim(),
      rotation: generateRandomNumber(),
    };

    const updatedNotesList = notesList.map((note) => {
      return note.id === editState.currentEditIde ? editedNote : note;
    });

    storeNotes(updatedNotesList);
    renderNotes();
    editState.currentEditId = null;
    editState.isEditMode = false;

    submitButton.classList.remove("note-card--edited");
    submitButton.textContent = "Add note";
  }
});
