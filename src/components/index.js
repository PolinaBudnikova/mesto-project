import { loadCards } from './cards'
import { initPopup } from './modal'
import { enableValidation } from './validate'
import { addNewPlace, changeValue, openPicture, setInputsValue } from './utils'

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
    cardsList
} from './constants'

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
    onSubmit: addNewPlace
})
// Инициализация попапа картинки
initPopup({
    elClose: pictureCloseBtn,
    popup: popupPicture
})
