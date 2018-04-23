/* ADD SHADOW TO WEB PAGE ON SCROLL*/
var src;
$(window).scroll(function() {
    if ($(this).scrollTop() == 0) {

		$('.navigation').css({
                'box-shadow': 'none',
                '-moz-box-shadow' : 'none',
                '-webkit-box-shadow' : 'none' });

    }
    else if ($(this).scrollTop() > 15){
		$('.navigation').css({
                'box-shadow': '0 0 32px rgba(0,0,0,.15)',
                '-moz-box-shadow' : '0 0 32px rgba(0,0,0,.15)',
                '-webkit-box-shadow' : '0 0 32px rgba(0,0,0,.15)' });
				
    }
});