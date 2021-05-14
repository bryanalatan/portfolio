$(document).ready(function(){
	$(window).scroll(function(){
		if (this.scrollY > 20) {
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
	})

	
});

$('scroll-up-btn').click(function(){
	$('html').animate({scrolltop:0});
});

var typed = new Typed(".typing",{
	strings: ["Handsome","Yummy","Cutie","Adorable"],
	typeSpeed: 100,
	backspeed: 60,
	loop: true
	});