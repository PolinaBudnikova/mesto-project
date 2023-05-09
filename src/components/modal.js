import { getEl, popupContainerPicture, popupOpenedSelector } from "./utils"

// Функция открытия и закрытия у popup
export function openPopup(popup) {
    document.addEventListener('keydown', closeByEsc)
    popup.addEventListener('click', closeByOverlay)
    popup.classList.add(popupOpenedSelector)
}

// Функция закрытия попапа
function closePopup(popup) {
    document.removeEventListener('keydown', closeByEsc)
    popup.removeEventListener('click', closeByOverlay)
    popup.classList.remove(popupOpenedSelector)
}

// Закрытие формы по нажатию на Esc
export function closeByEsc(evt) {
    if (evt.key === 'Escape') {
        const modal = getEl(`.${popupOpenedSelector}`)
        modal && closePopup(modal)
    }
}

// Закрытик формы по нажатию на оверлей
export function closeByOverlay(evt) {
    const modal = getEl(`.${popupOpenedSelector}`)
    if (!evt.target.closest(popupContainerPicture) && modal) closePopup(modal)
}

export function initPopup({
    elOpen,
    elClose,
    form,
    popup,
    onSubmit,
    onOpen
}) {
    // Если есть элемент открытия попапа, подключаем событие клика
    elOpen && elOpen.addEventListener('click', function () {
        openPopup(popup)
        onOpen && onOpen()
    })

    // Если есть в попапе форма, подключаем слушатель ее отправки
    form && form.addEventListener('submit', function (evt) {
        evt.preventDefault()
        onSubmit && onSubmit(evt)
        closePopup(popup)
    })

    // Подключаем событие закрытия попапа
    elClose.addEventListener('click', function () {
        closePopup(popup)
    })
}
