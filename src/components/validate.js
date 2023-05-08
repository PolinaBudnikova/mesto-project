// Функция показать ошибку инпута
const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(inputErrorClass)
    errorElement.textContent = errorMessage
    errorElement.classList.add(errorClass)
}
// Функция скрыть ошибку инпута
const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(inputErrorClass)
    errorElement.classList.remove(errorClass)
    errorElement.textContent = ''
}

// Проверка на валидацию
const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage)
    } else {
        inputElement.setCustomValidity("")
    }
//
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass)
    } else {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass)
    }
}

// Методом some проходимся по инпутам, если есть невалидные - false
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}

// Функция смены кнопки
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
        // сделай кнопку неактивной
        disableBtn(buttonElement, inactiveButtonClass)
    } else {
        // иначе сделай кнопку активной
        buttonElement.disabled = false
        buttonElement.classList.remove(inactiveButtonClass)
    }
}

// Слушатель проверки на валидность у инпутов
const setEventListeners = (
    formElement,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass
) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector))
    const buttonElement = formElement.querySelector(submitButtonSelector)

    toggleButtonState(inputList, buttonElement, inactiveButtonClass)

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, inputErrorClass, errorClass)
            toggleButtonState(inputList, buttonElement, inactiveButtonClass)
        })
    })
}

// Для каждой формы проверка на валидность
export function enableValidation({
    formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass
}) {
    const formList = Array.from(document.querySelectorAll(formSelector))
    formList.forEach((formElement) => {
        setEventListeners(
            formElement,
            inputSelector,
            submitButtonSelector,
            inactiveButtonClass,
            inputErrorClass,
            errorClass
        )
    })
}

export function disableBtn (btn, inactiveButtonClass) {
    btn.disabled = true
    btn.classList.add(inactiveButtonClass)
}
