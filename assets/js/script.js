$(document).ready(function(){
  /*------------------------------------
		Mobile Menu
	--------------------------------------*/
	$('#mobile-menu-active').metisMenu();

	$(".open-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		console.log("clicked")
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.open-mobile-menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.open-mobile-menu > a').removeClass('active');
	});

	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});


	/*------------------------------------
        Overlay Close
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
	});

	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});

	/*------------------------------------
        Screenshot Slider
	--------------------------------------*/
	if (jQuery(".screenshot-slider").length > 0) {
		$(".screenshot-slider").owlCarousel({
			items: 5,
			margin: 30,
			loop: true,
			nav: false,
			dots: true,
			center: true,
			autoplay: false,
			autoplayTimeout: 10000,
			responsive: {
				320: {
					items: 1,
				},
				768: {
					items: 3,
				},
				992: {
					items: 5,
				}
			}
		});
	}

	/*------------------------------------
        Testimonial Slider
	--------------------------------------*/
	if (jQuery(".testimonial-slider").length > 0) {
		$(".testimonial-slider").owlCarousel({
			items: 2,
			margin: 15,
			loop: true,
			nav: false,
			dots: true,
			autoplay: false,
			autoplayTimeout: 10000,
			responsive: {
				320: {
					items: 1,
				},
				768: {
					items: 1,
				},
				992: {
					items: 2,
				}
			}
		});
	}

	/*------------------------------------
        Smooth Scroll
	--------------------------------------*/
	var scroll = new SmoothScroll('[data-scroll]');
});


