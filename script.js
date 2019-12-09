// scroll animation using JQuery
// this function toggles between two clases when the pixels are greater than 50
// the scrolltop function determines where on the pgae it is in pixels
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// login function using JQuery
// function takes login form in before register form
// if register form is clicked login form fades out while register form fades in
// this does this by removing one class and making the other active
// this was borrowed from pukey22 at https://bootsnipp.com/snippets/z1Bpy
$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

//alert to show link is only for show purposes right now
function myFunction() {
  alert("This is for show");
}