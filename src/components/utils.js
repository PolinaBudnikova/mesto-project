import { openPopup } from './modal'
import { createCardEl } from './cards'

import {
    inputName,
    inputJob,
    profileName,
    profileDescription,
    inputPictureName,
    inputPictureLink,
    cardsList,
    popupPicture,
    popupPictureName,
    popupPictureImage,
    cardTemplate
} from './constants'

// Функция поиска элемента
export function getEl(selector, where = document) {
    return where.querySelector(selector)
}

// Уравниваем новые значение имени, описания с введенными
export function setInputsValue ({ name, job }) {
    inputName.value = name
    inputJob.value = job
}

// Функция открытия картинки
export function openPicture (el) {
    popupPictureName.textContent = el.name
    popupPictureImage.src = el.link
    popupPictureImage.alt = el.name
    openPopup(popupPicture)
}

// Меняем значение value у input
export function changeValue () {
    profileName.textContent = inputName.value
    profileDescription.textContent = inputJob.value
}

// Добавляем новую карточку
export function addNewPlace (evt) {
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
