const clientForm = document.querySelector("#form")

const placeholderFocusAnimation = (e) => {
    const isInputField = e.target.closest("[data-input-field]")
    if (isInputField) {
        const formItem = isInputField.closest("[data-form-item]");
        const fakePlaceholder = formItem.querySelector("[data-fake-placeholder]");
        fakePlaceholder.classList.add("focus");
    }
}

clientForm.addEventListener("click", placeholderFocusAnimation);