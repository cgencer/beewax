'use strict';

// init WOW animations
new WOW().init();

(function(){
	if(Modernizr.touch)
	{
		MBP.preventZoom();
		MBP.scaleFix();
		MBP.enableActive();
	}
})();

	new WOW().init();

$(document).ready(function() {
	var carousel = $('#carousel-main'),
		slidesDevice = carousel.find('.device'),
		slidesText = carousel.find('.lead');

	carousel.on('slide.bs.carousel', function () {
		slidesDevice.removeClass('fadeInRight animated').addClass('fadeInRight animated');
		slidesText.removeClass('fadeInLeft animated').addClass('fadeInLeft animated');
	})

	carousel.on('slid.bs.carousel', function () {
		slidesDevice.removeClass('fadeInRight animated').addClass('fadeInRight animated');
		slidesText.removeClass('fadeInLeft animated').addClass('fadeInLeft animated');
	})
});