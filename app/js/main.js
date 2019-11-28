$(function(){

	
	$(".star-rate").rateYo({
		rating: 4.5,
		starWidth: "15px",
		readOnly: true,
	});

	$('.weekly-slider').slick({

		prevArrow: '<button type="button" class="slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="lnr lnr-chevron-right"></span></button>',
	});
	
});