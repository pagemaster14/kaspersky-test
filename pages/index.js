

const listOpenButtonElement = document.querySelector('.buy__list-button');
const listElement = document.querySelector('.buy__list');
const headerElement = document.querySelector('.header');
const buyElement = document.querySelector('.buy')
const buyElementSmall = document.querySelector('.buy_sticky-360-small')
const currentViewport = document.documentElement.clientWidth;
const buyElementSmallProduct = document.querySelector('.buy_sticky-360-small__list-amount')
const buyElementSmallAmount = document.querySelector('.buy_sticky-360-small__list-amount')
const buyElementImg = document.querySelector('.buy__img')
const currencyChange = document.querySelector('.currency__change')
const currencySpan = document.querySelector('.currency__span')
const currencyButton = document.querySelector('.currency__button')

if (currentViewport > 1439) {
    buyElementImg.src="./images/product icon.svg"
}

currencyButton.addEventListener('click', () => {
    currencyChange.classList.toggle('currency__change_opened');
});

listOpenButtonElement.addEventListener('click', () => {
    listElement.classList.toggle('buy__list_opened');
    listOpenButtonElement.classList.toggle('buy__list-button_active');
});

function handleEscClose(evt) {
    if (evt.key === 'Escape') {
        handleClose()
        handleCurrencyClose()
    }
}

function handleClose() {
    listElement.classList.remove('buy__list_opened');
    listOpenButtonElement.classList.remove('buy__list-button_active');
}

function handleCurrencyClose() {
    currencyChange.classList.remove('currency__change_opened');
}

document.addEventListener('keydown', () => {
    if (listElement.classList.contains('buy__list_opened')) {
        handleClose()
        document.removeEventListener('keydown', handleClose())
    }
    if (currencyChange.classList.contains('currency__change_opened')) {
        handleCurrencyClose()
        document.removeEventListener('keydown', handleCurrencyClose())
    }
});

function changeProduct(value) {
    listOpenButtonElement.textContent = value
    buyElementSmallAmount.textContent = value
    handleClose()
}

function changeCurrency(value) {
    currencyButton.textContent = value
    handleCurrencyClose()
}

let lastPos = 0;
window.addEventListener('scroll', function () {
    scrollUp = this.scrollY < lastPos;
    lastPos = this.scrollY;
    if (currentViewport < 1440 && scrollUp) {
        headerElement.classList.add('header_scroll');
    }
    if (this.scrollY < 1) {
        headerElement.classList.remove('header_scroll');
    }
});


window.addEventListener('scroll', function () {
    if (currentViewport < 1440 && this.scrollY > 911) {
        buyElement.classList.add('buy_big');
        buyElementSmall.classList.add('buy_small');
    }
    else if (currentViewport > 1439 && this.scrollY > 664) {
        buyElement.classList.add('buy_sticky-1440');
    }
    if (this.scrollY < 911) {
        buyElement.classList.remove('buy_big');
        buyElementSmall.classList.remove('buy_small');
        buyElement.classList.remove('buy_sticky-360');
        listElement.classList.remove('buy__list_opened_sticky-360');
    }
    if (this.scrollY < 664) {
        buyElement.classList.remove('buy_sticky-1440');
    }
});

buyElementSmallProduct.addEventListener('click', () => {
    buyElement.classList.remove('buy_big');
    buyElement.classList.add('buy_sticky-360');
    buyElementSmall.classList.remove('buy_small');
    listElement.classList.add('buy__list_opened_sticky-360');


});

