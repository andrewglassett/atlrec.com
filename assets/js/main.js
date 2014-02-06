$(function(){


/*==============ScrollTop=======================*/
$('.navbar ul li a.scrol-it').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-85
    }, 1000);
    return false;
});

$('.go-btn a').click(function(){
    $('html, body').animate({
		
        scrollTop: $( $.attr(this, 'href') ).offset().top-85
    }, 1000);
    return false;
});
   	
/*=============Flex slider======================*/
$('#team-phone1').flexslider({
  animation: "slide",
  directionNav: false,
  controlNav: true,
  pauseOnHover: true,
  slideshowSpeed: 4000,
  direction: "horizontal" //Direction of slides
});
$('#team-phone2').flexslider({
  animation: "slide",
  directionNav: false,
  controlNav: true,
  pauseOnHover: true,
  slideshowSpeed: 5000,
  direction: "horizontal" //Direction of slides
});
$('#team-phone3').flexslider({
  animation: "slide",
  directionNav: false,
  controlNav: true,
  pauseOnHover: true,
  slideshowSpeed: 6000,
  direction: "horizontal" //Direction of slides
});

//IE8-9 placeholder fix
$('input[placeholder]').each(function(){
    var input = $(this);
    $(input).val(input.attr('placeholder'));
                
    $(input).focus(function(){
        if (input.val() === input.attr('placeholder')) {
           input.val('');
        }
    });
        
    $(input).blur(function(){
       if (input.val() ==='' || input.val() === input.attr('placeholder')) {
           input.val(input.attr('placeholder'));
       }
    });
});


/*=====================Portfolio Items====================*/
$(document).ready(function() {

	// Check window size and resize header
	var screensize = $(document).width();

	if(screensize > 568) {
		$(window).resize(function() {
			$('#header').height($(window).height() - 290);
		});
		$(window).resize();
	}
	


	// Global ScrollTo's (add class .scroll to a's)
	$('.scroll').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

	// Slide down navigation
	$(".icon-nav").on('click', function(e) {
		e.preventDefault;
		$("#menu").slideToggle("easeInOutExpo");
	});

	// Show projects
	$(".js-link").on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
			target = $this.attr('data-id');

		if($this.hasClass('open')) {
			$('.projects').slideUp("easeOutSine");
			$this.removeClass('open');
			return false;
		}

		$('.js-link').removeClass('open');
		$this.addClass('open');
		$('.projects article').hide();
		$('#' + target).show();
		$(".projects").slideDown("easeOutSine");
		$('html,body').animate({scrollTop:$('#' + target).offset().top}, 500);
	});

	$('.projects article').hide();


	// Show products
	$(".products-link").on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
			target = $this.attr('data-id');

		if($this.hasClass('open')) {
			$('.products').slideUp("easeOutSine");
			$this.removeClass('open');
			return false;
		}

		$('.products-link').removeClass('open');
		$this.addClass('open');
		$('.products article').hide();
		$('#' + target).show();
		$(".products").slideDown("easeOutSine");
		$('html,body').animate({scrollTop:$('#' + target).offset().top}, 800);
	});


	$('.products article').hide();



	// Hide projects
	$(".back").on('click', function(e) {
		e.stopPropagation();
		$(".projects").slideToggle();
		$('.js-link').removeClass('open');
	});

	// Hide products
	$(".back.to-products").on('click', function(e) {
		e.stopPropagation();
		$(".products").slideToggle();
		$('.js-link').removeClass('open');
	});

/*=====================Parallax====================*/
	$(document).ready(function(){
		$window = $(window);
		$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		$(window).scroll(function() {
		var yPos = -($window.scrollTop() / $bgobj.data('speed'));

		// Put together our final background position
		var coords = '50% '+ yPos + 'px';
	 
		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		});
	});
	});

	
	
});
});