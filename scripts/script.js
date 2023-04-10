// функция поиска элемента
function getEl(selector, where = document) {
    return where.querySelector(selector);
}

// попапы
const popupEdit = getEl('.popup_edit')
const popupAdd = getEl('.popup_add')
const popupPicture = getEl('.popup_picture')
const popupPictureName = getEl('.popup__picture-name', popupPicture)
const popupPictureImage = getEl('.popup__image', popupPicture)
// формы
const profileForm = document.forms['edit-form']
const placeForm = document.forms['new-place-form']
// инпуты
const inputName = getEl('[name=firstname]')
const inputJob = getEl('[name=description]')
const inputPictureName = getEl('[name=nameofpicture]')
const inputPictureLink = getEl('[name=linkofpicture]')
// кнопки
const profileEditBtn = getEl('.profile__edit-button')
const profileCloseBtn = getEl('.popup__close-button_edit')
const placeAddbtn = getEl('.profile__add-button')
const placeCloseBtn = getEl('.popup__close-button_add')
const pictureCloseBtn = getEl('.popup__close-button_picture')
// данные профиля
const profileName = getEl('.profile__name')
const profileDescription = getEl('.profile__description')
// карточка
const cardsList = getEl('.cards')
const cardTemplate = getEl('.card_template').content

// уравниваем новые значение имени, описания с введенными 
function fillProfileInputs() {
    inputName.value = profileName.textContent
    inputJob.value = profileDescription.textContent
}

// функция открытия и закрытия у popup
function openPopup(popup) {
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
}

// при клике на кнопку редактировать - открыть popup
profileEditBtn.addEventListener('click', function () {
    openPopup(popupEdit)
    fillProfileInputs()
})

// при клике на кнопку редактировать - закрыть popup
profileCloseBtn.addEventListener('click', function () {
    closePopup(popupEdit)
})

// при клике на кнопку добавить место - открыть popup
placeAddbtn.addEventListener('click', function () {
    openPopup(popupAdd)
})

// при клике на кнопку закрыть - закрыть popup
placeCloseBtn.addEventListener('click', function () {
    closePopup(popupAdd)
})

pictureCloseBtn.addEventListener('click', function () {
    closePopup(popupPicture)
})

// меняем значение value у input
function changeValue() {
    profileName.textContent = inputName.value
    profileDescription.textContent = inputJob.value
}

// закрытие popup+изменение значение value при нажатии на кнопку сохранить
function handleProfileFormSubmit(evt) {
    evt.preventDefault()
    changeValue()
    closePopup(popupEdit)
}

// слушатель редактирования профиля
profileForm.addEventListener('submit', handleProfileFormSubmit)

// слушатель добавления новой карточки
placeForm.addEventListener('submit', function (evt) {
    evt.preventDefault()
    // получить значения импутов
    const newCard = {
        name: inputPictureName.value,
        link: inputPictureLink.value
    }

    // добавляем функцию создания новой карточки
    const cardEl = createCardEl(newCard)

    // выносим новую карточку к началу списка
    cardsList.prepend(cardEl)
    evt.target.reset()
    // закрываем popup
    closePopup(popupAdd)
})

// создаем массив с данными для карточек
const initialCards = [
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

// функция создания элемента карточки
function createCardEl(el) {
    const card = cardTemplate.cloneNode(true)
    const picture =  getEl('.cards__image', card)
    const info = getEl('.cards__info', card)
    const btnLike = getEl('.cards__button-like', card)
    const itemDelEl = getEl('.cards__deleate', card)

    info.textContent = el.name
    picture.src = el.link
    picture.alt = el.name

    // добавляем лайк к карточке
    btnLike.addEventListener('click', function (e) {
        e.target.classList.toggle('cards__button-like_active')
    })
    // слушатель удаления карточки с страницы
    itemDelEl.addEventListener('click', function () {
        itemDelEl.closest('.cards__item').remove()
    })
    // слушатель открытия картинки
    picture.addEventListener('click', function () {
        popupPictureName.textContent = el.name
        popupPictureImage.src = el.link
        popupPictureImage.alt = el.name
        openPopup(popupPicture)
    })
    return card
}

// добавляем карточки на страницу
initialCards.forEach(function (card) {
    const cardEl = createCardEl(card)
    cardsList.append(cardEl)
})


