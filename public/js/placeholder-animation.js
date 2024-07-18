const clientForm = document.querySelector("#form")

const setPlaceholderFocus = (e) => {
    const isInputField = e.target.closest("[data-input-field]")
    if (isInputField) {
        const formItem = isInputField.closest("[data-form-item]");
        const fakePlaceholder = formItem.querySelector("[data-fake-placeholder]");
        fakePlaceholder.classList.add("focus");

        isInputField.addEventListener('blur', setPlaceholderBlur);
    }
}

const setPlaceholderBlur = (e) => {

    const isInputField = e.target.closest("[data-input-field]")
    if (isInputField) {
        const formItem = isInputField.closest("[data-form-item]");
        const fakePlaceholder = formItem.querySelector("[data-fake-placeholder]");
        if (isInputField.value.trim().length < 1) {
            fakePlaceholder.classList.remove("focus");
        }
        isInputField.removeEventListener('blur', setPlaceholderBlur);
    }

}

clientForm.addEventListener("click", setPlaceholderFocus);


// добавить проверку на change или события input