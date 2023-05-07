import { btnLikeSelector, cardsBtnLikeActiveSelector, cardsItemSelector, infoSelector, itemDelElSelector, pictureSelector } from './constants'

import { getEl } from './utils'

// Функция создания элемента карточки
export function createCardEl(el, tmpl, onClick) {
    const card = tmpl.cloneNode(true)
    const picture = getEl(pictureSelector, card)
    const info = getEl(infoSelector, card)
    const btnLike = getEl(btnLikeSelector, card)
    const itemDelEl = getEl(itemDelElSelector, card)

    info.textContent = el.name
    picture.src = el.link
    picture.alt = el.name

    // Добавляем лайк к карточке
    btnLike.addEventListener('click', function (e) {
        e.target.classList.toggle(cardsBtnLikeActiveSelector)
    })
    // Слушатель удаления карточки с страницы
    itemDelEl.addEventListener('click', function () {
        itemDelEl.closest(cardsItemSelector).remove()
    })
    // Слушатель открытия картинки
    picture.addEventListener('click', function () {
        onClick(el)
    })
    return card
}

// Добавляем карточки на страницу
export function loadCards ({ cards, list, tmpl, onClickCard }) {
    cards.forEach(function (card) {
        const cardEl = createCardEl(card, tmpl, onClickCard)
        list.append(cardEl)
    })
}
