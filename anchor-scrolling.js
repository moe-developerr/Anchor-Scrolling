var anchorScroll = (function () {
	var $htmlBody = $('html, body');
			
	var _animateScrollTop = function () {
		var $target = $(this.hash);
		$htmlBody.animate({
			scrollTop: $target.offset().top
		}, 1000);
		return false;
	};

	var init = function () {
		$('a.has-hash').click(_animateScrollTop);
	};

	return {
		init: init
	};
})();

$(function () {
	anchorScroll.init();
});