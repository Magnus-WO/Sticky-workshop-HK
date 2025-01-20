import storeNotes from "./storeNotes.js";
import renderNotes from "./renderNotes.js";

const displayDeleteModal = (subject, id) => {
  const deleteModal = document.querySelector(".delete-modal");
  const deleteMessage = document.querySelector(".delete-modal__text");
  deleteModal.classList.add("display-modal");
  deleteMessage.textContent = `Do you want to delete ${subject}`;

  const confirmDeleteButton = document.querySelector(
    ".delete-modal__confirm-button"
  );
  confirmDeleteButton.addEventListener("click", () => {
    confirmDelete(id);
  });
};

const closeModal = () => {
  const deleteModal = document.querySelector(".delete-modal");
  deleteModal.classList.remove("display-modal");
};

const initializeCloseModal = () => {
  const cancelDeleteButton = document.querySelector(
    ".delete-modal__cancel-button"
  );
  cancelDeleteButton.addEventListener("click", closeModal);
};
initializeCloseModal();

const confirmDelete = (id) => {
  const noteList = JSON.parse(localStorage.getItem("notes"));
  const filteredArray = noteList.filter((note) => note.id !== id);
  storeNotes(filteredArray);
  renderNotes();
  closeModal();
};

export { displayDeleteModal, closeModal };
