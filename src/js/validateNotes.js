const validateNotes = (subject, date, text) => {
  const feedbackParagraph = document.querySelector(".form__error-text");
  const formattedSubject = subject.value.trim();
  const formattedDate = date.value.trim();
  const formattedText = text.value.trim();

  //validate subject input
  if (!formattedSubject) {
    feedbackParagraph.style.visibility = "visible";
    feedbackParagraph.textContent = "Subject is required.";
    return false;
  }

  //validate date input
  if (!formattedDate) {
    feedbackParagraph.style.visibility = "visible";
    feedbackParagraph.textContent = "Date is required.";
    return false;
  }

  //validate text input
  if (!formattedText) {
    feedbackParagraph.style.visibility = "visible";
    feedbackParagraph.textContent = "Note´s text is required.";
    return false;
  }

  //If validation is passed, provide a success feedback
  feedbackParagraph.style.visibility = "visible";
  feedbackParagraph.textContent = "Note created successfully 🥸";

  //Hide success feedback after 2 seonds
  setTimeout(() => {
    feedbackParagraph.style.visibility = "hidden";
  }, 2000);
  return true;
};

export default validateNotes;
