import { closeByEsc, closeByOverlay, initPopup, openPopup } from './modal'
import { disableBtn, enableValidation } from './validate'
import { createCardEl } from './cards'

import {
    initialCards,
    profileEditBtn,
    profileCloseBtn,
    profileForm,
    popupEdit,
    placeAddbtn,
    placeCloseBtn,
    placeForm,
    popupAdd,
    pictureCloseBtn,
    popupPicture,
    profileName,
    profileDescription,
    cardTemplate,
    cardsList,
    formSaveBtn,
    inputPictureName,
    inputPictureLink,
    inputName,
    inputJob,
    popupPictureName,
    popupPictureImage
} from './utils'

import '../styles/index.css'

// Устанавливаем значения инпутов
setInputsValue({
    name: profileName.textContent,
    job: profileDescription.textContent
})

// Включаем валидацию
enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__save-button',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
})

// Инициализируем карточки
loadCards({
    cards: initialCards,
    tmpl: cardTemplate,
    list: cardsList,
    onClickCard: openPicture
})

// Инициализация попапа редактирования профиля
initPopup({
    elOpen: profileEditBtn,
    elClose: profileCloseBtn,
    form: profileForm,
    popup: popupEdit,
    onSubmit: changeValue
})

// Инициализация попапа добавления новой карточки
initPopup({
    elOpen: placeAddbtn,
    elClose: placeCloseBtn,
    form: placeForm,
    popup: popupAdd,
    onSubmit: addNewPlace,
    onOpen: function () {
        disableBtn(formSaveBtn, 'form__submit_inactive')
    }
})

// Инициализация попапа картинки
initPopup({
    elClose: pictureCloseBtn,
    popup: popupPicture
})

// Добавляем карточек на страницу при загрузке страницы
function loadCards({ cards, list, tmpl, onClickCard }) {
    cards.forEach(function (card) {
        const cardEl = createCardEl(card, tmpl, onClickCard)
        list.append(cardEl)
    })
}

// Добавляем новую карточку
function addNewPlace(evt) {
    // получить значения импутов
    const newCard = {
        name: inputPictureName.value,
        link: inputPictureLink.value
    }

    // Добавляем функцию создания новой карточки
    const cardEl = createCardEl(newCard, cardTemplate, openPicture)

    // Выносим новую карточку к началу списка
    cardsList.prepend(cardEl)
    evt.target.reset()
}

// Уравниваем новые значение имени, описания с введенными
function setInputsValue({ name, job }) {
    inputName.value = name
    inputJob.value = job
}

// Функция открытия картинки
function openPicture(el) {
    popupPictureName.textContent = el.name
    popupPictureImage.src = el.link
    popupPictureImage.alt = el.name
    openPopup(popupPicture)
}

// Меняем значение value у input
function changeValue() {
    profileName.textContent = inputName.value
    profileDescription.textContent = inputJob.value
}
