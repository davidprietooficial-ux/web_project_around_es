export function showInputError(element, errorMessage) {
  const errorElement = element.form.querySelector(`.${element.id}-input-error`);
  element.classList.add("form_input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error-active");
}

export function hideInputError(element) {
  const errorElement = element.form.querySelector(`.${element.id}-input-error`);
  element.classList.remove("form_input_type_error");
  errorElement.classList.remove("form__input-error-active");
  errorElement.textContent = "";
}

function hasInvalidInput(inputList) {
  return Array.from(inputList).some(function (input) {
    return !input.validity.valid;
  });
}

export function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
}

export function resetValidation(inputList, buttonElement) {
  inputList.forEach((input) => hideInputError(input));
  toggleButtonState(inputList, buttonElement);
}

export function setEventListeners(currentForm, currentButton) {
  currentForm.forEach((input) => {
    input.addEventListener("input", () => {
      if (!input.validity.valid) {
        showInputError(input, input.validationMessage);
      } else {
        hideInputError(input);
      }
      toggleButtonState(currentForm, currentButton);
    });
  });
}
