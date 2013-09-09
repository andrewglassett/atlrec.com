$(function(){


/*==============ScrollTOp=======================*/  
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
   

/*==============Tooltip=======================*/
	if ($("[data-rel=tooltip]").length) {
     $("[data-rel=tooltip]").tooltip();
	}

	
/*=============Flex slider======================*/
$('#testimonals-slide,#project-slider,#phone-portfolio,#process-phone,#team-phone').flexslider({
  animation: "slide",
  directionNav: false,
  controlNav: true,
  pauseOnHover: true, 
  slideshowSpeed: 4000, 
  direction: "horizontal" //Direction of slides
});


/*============ Popup-slider======================*/
$('#myCarousel,#myCarousel2,#myCarousel3,#myCarousel4,#myCarousel5,#myCarousel6,#myCarousel7,#myCarousel8').carousel({ interval: 2000});


/*==============Magnific-popup=========================*/
$('.folio1').magnificPopup({
    items: [{src: '#item1', type: 'inline'} ],
    gallery: {enabled: true},
	mainClass: 'mfp-fade',
	removalDelay: 160,
    type: 'image'
});
$('.folio2').magnificPopup({
    items: [{src: '#item2', type: 'inline'} ],
    gallery: {enabled: true},
	mainClass: 'mfp-fade',
	removalDelay: 160,
    type: 'image'
});
$('.folio3').magnificPopup({
    items: [{src: '#item3', type: 'inline'} ],
    gallery: {enabled: true},
	mainClass: 'mfp-fade',
	removalDelay: 160,
    type: 'image'
});
$('.folio4').magnificPopup({
    items: [{src: '#item4', type: 'inline'} ],
    gallery: {enabled: true},
	mainClass: 'mfp-fade',
	removalDelay: 160,
    type: 'image'
});
$('.folio5').magnificPopup({
    items: [{src: '#item5', type: 'inline'} ],
    gallery: {enabled: true},
	mainClass: 'mfp-fade',
	removalDelay: 160,
    type: 'image'
});
$('.folio6').magnificPopup({
    items: [{src: '#item6', type: 'inline'} ],
    gallery: {enabled: true},
	mainClass: 'mfp-fade',
	removalDelay: 160,
    type: 'image'
});
$('.folio7').magnificPopup({
    items: [{src: '#item7', type: 'inline'} ],
    gallery: {enabled: true},
	mainClass: 'mfp-fade',
	removalDelay: 160,
    type: 'image'
});
$('.folio8').magnificPopup({
    items: [{src: '#item8', type: 'inline'} ],
    gallery: {enabled: true},
	mainClass: 'mfp-fade',
	removalDelay: 160,
    type: 'image'
});


/*================Accordion===============*/
$(".collapse").collapse({
	parent: "#accordion2"
});
	
$('.collapse').on('show hide', function (e) {
	$(e.target).siblings('.accordion-heading').find('.btn-accordion span').toggleClass('icon-plus icon-minus', 200);
});

/*=====================tabs====================*/
$('#tabs1 a').click(function (e) {
	e.preventDefault();
	$(this).tab('show');
})

/*=====================media players====================
$('audio,video').mediaelementplayer({
	videoWidth: '100%',
	videoHeight: '100%',
	alwaysShowControls: true,
	features: ['playpause','progress','tracks','volume'],
	videoVolume: 'horizontal'
});

/*==================twitter======================*/
$('#tweets').tweetable({
	username: 'envato', 
	time: true,
	rotate: false,
	speed: 4000, 
	limit: 4,
	replies: false,
	position: 'append',
	failed: "Sorry, twitter is currently unavailable for this user.",
	html5: true
});

//console.log($(window).width());	

/*==================contact submit======================*/
$("#contactForm #submit").click(function() {
	var name = $("#name").val();
	var email = $("#email").val();
	var subject = $("#subject").val();
	var message = $("#message").val();
	var dataString = 'name='+ name + '&email=' + email + '&subject=' + subject + '&message=' + message;

	if(name=='' || email=='' || subject=='' || message=='')
	{
		$('#contact .alert-error').slideDown('slow');
	}
	else
	{
		$.ajax({
			type: "POST",
			url: "php/contact.php",
			data: dataString,
			success: function(){
				$('#contact .alert-error').hide();
				$('#contactForm').slideToggle('slow');
				$('#contact .alert-success').slideToggle('slow');
			}
		});
	}
	return false;
});

/*==================newsletter submit======================*/
$("#newsletter-form #nl-go").click(function() {
	var name = $("#nl-name").val();
	var email = $("#nl-email").val();
	var dataString = 'name='+ name + '&email=' + email;

	if(name=='' || email=='')
	{
		$('#newsletter .alert-error').slideDown('slow');
	}
	else
	{
		$.ajax({
			type: "POST",
			url: "php/newsletter.php",
			data: dataString,
			success: function(){
				$('#newsletter .alert-error').hide();
				$('#newsletter-form').slideToggle('slow');
				$('#newsletter .alert-success').slideToggle('slow');
			}
		});
	}
	return false;
});


/*==================newsletter footer submit======================*/
$("#subscribe #sub").click(function() {
	var email = $("#sub-email").val();
	var dataString = 'email=' + email;

	if(email=='')
	{
		$('.footer-newsletter .alert-error').slideDown('slow');
	}
	else
	{
		$.ajax({
			type: "POST",
			url: "php/subscribe.php",
			data: dataString,
			success: function(){
				$('.footer-newsletter .alert-error').hide();
				$('#subscribe').slideToggle('slow');
				$('.footer-newsletter .alert-success').slideToggle('slow');
			}
		});
	}
	return false;
});


//IE8-9 placeholder fix
$('input[placeholder]').each(function(){  
    var input = $(this);        
    $(input).val(input.attr('placeholder'));
                
    $(input).focus(function(){
        if (input.val() == input.attr('placeholder')) {
           input.val('');
        }
    });
        
    $(input).blur(function(){
       if (input.val() == '' || input.val() == input.attr('placeholder')) {
           input.val(input.attr('placeholder'));
       }
    });
});


})