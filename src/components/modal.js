import { popupContainerPicture, popupOpenedSelector } from "./constants"

// Функция открытия и закрытия у popup
export function openPopup(popup) {
    popup.classList.add(popupOpenedSelector)

    // Закрытие формы по нажатию на Esc
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closePopup(popup)
    }, { once: true })
    // Закрытик формы по нажатию на оверлей
    function closeOverlay(event) {
        if (!event.target.closest(popupContainerPicture)) {
            closePopup(popup)
            popup.removeEventListener('click', closeOverlay)
        }
    }

    popup.addEventListener('click', closeOverlay)
}
// Функция закрытия попапа
function closePopup(popup) {
    popup.classList.remove(popupOpenedSelector)
}

export function initPopup ({
    elOpen,
    elClose,
    form,
    popup,
    onSubmit
}) {
    // Если есть элемент открытия попапа, подключаем событие клика
    elOpen && elOpen.addEventListener('click', function () {
        openPopup(popup)
    })

    // Если есть в попапе форма, подключаем слушатель ее отправки
    form && form.addEventListener('submit', function (evt) {
        evt.preventDefault()
        onSubmit(evt)
        closePopup(popup)
    })

    // Подключаем событие закрытия попапа
    elClose.addEventListener('click', function () {
        closePopup(popup)
    })
}
