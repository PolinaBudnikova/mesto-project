// Попапы
export const popupEdit = getEl('.popup_edit')
export const popupAdd = getEl('.popup_add')
export const popupPicture = getEl('.popup_picture')
export const popupPictureName = getEl('.popup__picture-name', popupPicture)
export const popupPictureImage = getEl('.popup__image', popupPicture)
// Формы
export const profileForm = document.forms['edit-form']
export const placeForm = document.forms['new-place-form']
// Инпуты
export const inputName = getEl('[name=firstname]')
export const inputJob = getEl('[name=description]')
export const inputPictureName = getEl('[name=nameofpicture]')
export const inputPictureLink = getEl('[name=linkofpicture]')
// Кнопки
export const profileEditBtn = getEl('.profile__edit-button')
export const profileCloseBtn = getEl('.popup__close-button_edit')
export const placeAddbtn = getEl('.profile__add-button')
export const placeCloseBtn = getEl('.popup__close-button_add')
export const pictureCloseBtn = getEl('.popup__close-button_picture')
export const formSaveBtn = getEl('.form__save-button', placeForm)
// Данные профиля
export const profileName = getEl('.profile__name')
export const profileDescription = getEl('.profile__description')
// Карточка
export const cardsList = getEl('.cards')
export const cardTemplate = getEl('.card_template').content

// Селекторы
export const pictureSelector = '.cards__image'
export const infoSelector = '.cards__info'
export const btnLikeSelector = '.cards__button-like'
export const itemDelElSelector = '.cards__deleate'
export const cardsBtnLikeActiveSelector = 'cards__button-like_active'
export const cardsItemSelector = '.cards__item'
export const popupOpenedSelector = 'popup_opened'
export const popupContainerPicture = '.popup__container, .popup__container-picture'

// Создаем массив с данными для карточек
export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },

    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },

    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },

    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },

    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },

    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]
// Функция поиска элемента
export function getEl(selector, where = document) {
    return where.querySelector(selector)
}