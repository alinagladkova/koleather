function ibg(){$.each($(".ibg"),(function(e,i){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}$(".wrapper").addClass("loaded"),$(".icon-menu").click((function(e){$(this).toggleClass("active"),$(".menu__body").toggleClass("active"),$("body").toggleClass("lock")})),ibg();var swiper=new Swiper(".shop-slider",{slidesPerView:1,centeredSlides:!1,slidesPerGroupSkip:1,spaceBetween:15,grabCursor:!0,keyboard:{enabled:!0},navigation:{nextEl:".next-shop",prevEl:".prev-shop"},pagination:{el:".pag-shop",type:"fraction"},mousewheel:{sensitivity:1,eventsTarget:".shop-slider"}});new Swiper(".feedback",{direction:"horizontal",loop:!1,slidesPerView:1,spaceBetween:15,slidesPerGroup:1,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,touchRatio:1,touchAngle:45,grabCursor:!0,slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-container"}});