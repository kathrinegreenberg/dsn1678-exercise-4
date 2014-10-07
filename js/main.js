var $win = $(window);
/*dollar sign is a reminder that it is a jquery object*/
var $sun = $('.sun');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	
	$sun.css('transform', 'rotate(' + scrollPos + 'deg)');
});
/*console.log(); is basically doing a test to see if what your doing is working by displaying whatever is in the brackets in the console in inspect element.*/
