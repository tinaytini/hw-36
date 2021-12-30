// Задание: Присвоить классы с помощью JS


// Вам даны два файла HTML и CSS. Но по каким-то причинам, у вас нет доступа к редактированию данных файлов. 
// Но за то вы можете использовать язык JavaScript, чтоб присвоить все классы нужным элементам

// For example:
document.body.classList.add('body')
document.querySelector('header').classList.add('header');
document.querySelector('h1').classList.add('logo');
document.querySelector('h1').closest('div').classList.add('header__content')
document.querySelector('menu').classList.add('header__menu');
document.querySelector('button').classList.add('header__menu-button');

document.querySelector('section').classList.add('gallery');

const images = [...document.getElementsByTagName('img')];
images.forEach(img => {
    img.classList.add('gallery__item__image');
    img.closest('div').classList.add('gallery__item')
});

document.querySelector('h3 + p').classList.add('gallery__item__text');

document.querySelector('.container').closest('div').classList.add('subscribe');
document.querySelector('input').classList.add('subscribe__input');
document.querySelector('input + button').classList.add('subscribe__button');
document.querySelector('.container + p').classList.add('subscribe__text');


// and etc. 