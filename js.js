/* Это объявление переменной, мы наши кнопку по тегу */
var button = document.querySelector('button');
var imageWrapper = document.querySelector('.rule');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
 //alert('Деньги это не главное')
 if (!imageWrapper.classList.toggle('hide')) {
   imageWrapper.scrollIntoView({behavior: "smooth"});
 }
})