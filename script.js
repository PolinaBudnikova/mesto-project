function getEl(selector) {
    return document.querySelector(selector)
}

const popupEdit = getEl('.popup_edit')
const popupAdd = getEl('.popup_add')
const popupPicture = getEl('.popup_picture')
const editBtnEl = getEl('.profile__edit-button')
const closeBtnElEdit = getEl('.popup__close-button_edit')
const closeBtnElAdd = getEl('.popup__close-button_add')
const closeBtnPicture = getEl('.popup__close-button_picture')
const editFormEl = getEl('[name=edit-form]')
const addFormEl = getEl('[name=new-place-form]')
const nameInput = getEl('[name=firstname]')
const jobInput = getEl('[name=description]')
const namePictureInput = getEl('[name=nameofpicture]')
const linkPictureInput = getEl('[name=linkofpicture]')
const profileName = getEl('.profile__name')
const profileDescription = getEl('.profile__description')
const cardsList = getEl('.cards')
const cardTemplate = getEl('.card_template').content
const newPlaceBtnEl = getEl('.profile__add-button')

// уравниваем новые значение имени, описания с введенными 
function setInputsValue() {
    nameInput.value = profileName.textContent
    jobInput.value = profileDescription.textContent
}

// функция открытия и закрытия у popup
function openPopup(popup) {
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
}

// при клике на кнопку редактировать - открыть popup
editBtnEl.addEventListener('click', function () {
    openPopup(popupEdit)
    setInputsValue()
})

// при клике на кнопку редактировать - закрыть popup
closeBtnElEdit.addEventListener('click', function () {
    closePopup(popupEdit)
})

// при клике на кнопку добавить место - открыть popup
newPlaceBtnEl.addEventListener('click', function () {
    openPopup(popupAdd)
})

// при клике на кнопку закрыть - закрыть popup
closeBtnElAdd.addEventListener('click', function () {
    closePopup(popupAdd)
})

closeBtnPicture.addEventListener('click', function () {
    closePopup(popupPicture)
})

// меняем значение value у input
function changeValue() {
    profileName.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
}

// закрытие popup+изменение значение value при нажатии на кнопку сохранить
function editProfileHandler(evt) {
    evt.preventDefault()
    changeValue()
    closePopup(popupEdit)
}

// слушатель редактирования профиля
editFormEl.addEventListener('submit', editProfileHandler)

// слушатель добавления новой карточки
addFormEl.addEventListener('submit', function (evt) {
    evt.preventDefault()
    // получить значения импутов
    const newCard = {
        name: namePictureInput.value,
        link: linkPictureInput.value
    }

    // добавляем функцию создания новой карточки
    const cardEl = createCardEl(newCard)

    // выносим новую карточку к началу списка
    cardsList.prepend(cardEl)

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
    card.querySelector('.cards__info').textContent = el.name
    card.querySelector('.cards__image').src = el.link
    // добавляем лайк к карточке
    const likeBtnEl = card.querySelector('.cards__button-like')
    likeBtnEl.addEventListener('click', function (e) {
        e.target.classList.toggle('cards__button-like_active')
    })
    // слушатель удаления карточки с страницы
    const itemDelEl = card.querySelector('.cards__deleate')
    itemDelEl.addEventListener('click', function () {
        itemDelEl.closest('.cards__item').remove()
    })
    // слушатель открытия картинки
    const imageEl = card.querySelector('.cards__image')
    imageEl.addEventListener('click', function () {
        popupPicture.querySelector('.popup__picture-name').textContent = el.name
        const picture = popupPicture.querySelector('.popup__image')
        picture.src = el.link
        picture.alt = el.name
        openPopup(popupPicture)
    })
    return card
}

// добавляем карточки на страницу
initialCards.forEach(function (card) {
    const cardEl = createCardEl(card)
    cardsList.append(cardEl)
})


