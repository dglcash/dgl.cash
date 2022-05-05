$('[data-open-popup]').click(function(e) {
  e.stopPropagation();
  $(`[data-popup=${this.dataset.openPopup}]`).addClass('popup--open');
  $('header').addClass('popup--blur');
  $('body').addClass('popup--lock');
});

$(document).click(function(e) {
  const $target = $(e.target);
  if (!$target.closest('.popup__content').length || $target.closest('.popup__close').length) {
    $('.popup').removeClass('popup--open');
    $('header').removeClass('popup--blur');
    $('body').removeClass('popup--lock');
  }
});


$(document).ready(function(){
	$('.cards__container').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: false,
		touchThreshold: 100,
		responsive: [
		    {
		      breakpoint: 1100,
		      settings: {
		        variableWidth: true,
				centerMode: true,
				initialSlide: 2
		      }
		    }
		]
	});
	$('.token__logo').slick({
		responsive: [
			{
              breakpoint: 2048,
              settings: "unslick"
            },
		    {
		      breakpoint: 850,
		      settings: {
				arrows: true,
				touchThreshold: 100,
				variableWidth: true,
				infinite: false,
				centerMode: true,
				initialSlide: 2,
		      }
		    }
		]
	});
});

let phoneInt = document.querySelectorAll('.phone-int');
setTimeout(function (){ phoneInt.forEach(element => {element.style.opacity = '1'})}, 1000);

$(document).mouseup(function(){
	$('.menu-burger').click(function(e) {
		e.preventDefault();
	  	$('.header__menu').toggleClass('menu--show');
	  	$('body').toggleClass('menu--lock');
	  	$('header').toggleClass('menu--blur');
	});
	$(document).mouseup(function(e) {
	    var $target = $(e.target);
	    if ($target.closest('.header__menu').length == 0) {
	        $('.header__menu').removeClass('menu--show');
	        $('body').removeClass('menu--lock');
	        $('header').removeClass('menu--blur');
	    }
	});
});

$(document).ready(function(){
	$('.menu__title').click(function(e){
		$(this).toggleClass('-active').next().slideToggle(300);
	});
});

$(document).ready(function(){
	var btn = $('#button-top');
	$(window).scroll(function() {
	  if ($(window).scrollTop() > 1000) {
	    btn.addClass('button-top--show');
	  } else {
	    btn.removeClass('button-top--show');
	  }
	});

	btn.on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({scrollTop:0}, '300');
	});
});