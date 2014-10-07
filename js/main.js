var $win = $(window);
/*dollar sign is a reminder that it is a jquery object*/
var $sun = $('.sun');
var $sunSection = $('.sun-section');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	 
	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 3 + 'px');
});
/*console.log(); is basically doing a test to see if what your doing is working by displaying whatever is in the brackets in the console in inspect element.
	(' + scrollPos + 'deg) is connecting the rotation to the scrolling. the sun rotates in the same increments as you scroll up/down the page.*/
