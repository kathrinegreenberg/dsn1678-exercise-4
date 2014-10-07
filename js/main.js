var $win = $(window);
/*dollar sign is a reminder that it is a jquery object*/
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipper = $('.dipper');
var $dipperSection = $('.dipper-section');
var $shuttle = $('.shuttle');
var $shuttleSection = $('.shuttle-section');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	 
	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});
/*console.log(); is basically doing a test to see if what your doing is working by displaying whatever is in the brackets in the console in inspect element.
	(' + scrollPos + 'deg) is connecting the rotation to the scrolling. the sun rotates in the same increments as you scroll up/down the page.*/

$dipperSection.waypoint(function() {
	$dipper.addClass('js-dipper-fade');
}, { offset: '50%' });
/*add offset if you want it to be different than the default*/

$shuttleSection.waypoint(function() {
	$shuttle.addClass('js-shuttle-fade');
}, { offset: '50%' });