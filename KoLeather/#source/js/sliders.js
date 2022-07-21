/*$(".shop-slider").length > 0 &&
	$(".shop-slider").slick({
		//autoplay: true,
		//infinite: false,
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow: 1,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});*/


/*if ($('.slider__body').length > 0) {
	$('.slider__body').slick({
		//autoplay: true,
		//infinite: false,
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow: 1,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}*/

//Shop
/*var swiper = new Swiper(".shop-slider", {
	slidesPerView: 1,
	centeredSlides: false,
	slidesPerGroupSkip: 1,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		769: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});*/

//Feedback
new Swiper('.swiper-container', {

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
	/*navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},*/

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
	//slideToClickedSlide: true,

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