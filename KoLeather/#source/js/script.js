$('.wrapper').addClass('loaded');

$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
}); //.toggleClass - Функция, возвращающая одно или несколько имен классов, разделенных пробелами, для переключения в атрибуте класса каждого элемента в соответствующем наборе.

function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg(); //функция ibg Jquery

//Shop
var swiper = new Swiper(".shop-slider", {
	slidesPerView: 1,
	centeredSlides: false,
	slidesPerGroupSkip: 1,
	spaceBetween: 15,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},

	navigation: {
		nextEl: '.next-shop',
		prevEl: '.prev-shop',
	},

	pagination: {
		el: '.pag-shop',
		type: 'fraction',
		//clickable: true,
		//dynamicBullets: true,
	},
	mousewheel: {
		//Чувствительность колеса мыши
		sensitivity: 1,
		//Класс объекта, на котором
		//будет срабатывать прокрутка мышью
		eventsTarget: ".shop-slider"
	},
});

//Feedback
new Swiper('.feedback', {

	direction: 'horizontal',
	loop: false,

	slidesPerView: 1,
	spaceBetween: 15,
	slidesPerGroup: 1,

	//autoHeight: true,
	//centeredSlides: true,
	/*observer: true,
	observeParents: true,
	
	autoHeight: true,
	speed: 800,*/

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	/*scrollbar: {
		el: '.swiper-scrollbar',
	},*/
	//перетаскивания на ПК
	simulateTouch: true,
	//Чувствительность свайпа
	touchRatio: 1,
	//Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	//Курсор перетаскивания
	grabCursor: true,

	//Переключение при клике на слайд
	slideToClickedSlide: true,

	//Управление клавиатурой
	keyboard: {
		//Включить/выключить
		enabled: true,
		//Включить/выключить
		//только когда слайдер
		//в пределах вьюпорта
		onlyInViewport: true,
		//Включить/выключить
		//управление клавишами
		//pageUP, pageDown
		pageUpDown: true,
	},

	//управление колесом мыши
	mousewheel: {
		//Чувствительность колеса мыши
		sensitivity: 1,
		//Класс объекта, на котором
		//будет срабатывать прокрутка мышью
		eventsTarget: ".swiper-container"
	},

	/*effect: 'coverflow',
	coverflowEffect: {
		rotate: 20,
		stretch: 50,
		slideshadows: false,
	},*/
});

