$(function(){

	
	$(".star-rate").rateYo({
		rating: 4.5,
		starWidth: "15px",
		readOnly: true,
	});

	$(".star-rate__product").rateYo({
		rating: 4.5,
		starWidth: "13px",
		readOnly: true,
		

	});

	$('.weekly-slider').slick({

		prevArrow: '<button type="button" class="slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="lnr lnr-chevron-right"></span></button>',
	});

	$('.followers-slider').slick({

		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '<button type="button" class="slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="lnr lnr-chevron-right"></span></button>',
	});

	$('.header__burger').click(function () {
		$(".header__burger").toggleClass('show-burger'),
		$(".nav-menu").slideToggle();
	});

	var mixer = mixitup('.products__items');
	
});