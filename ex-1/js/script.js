(function($) {
	$.fn.clock = function(opts) {
		// default configuration
		var config = $.extend({}, {
			opt1: null
		}, opts);
		// main function
		function init(obj) {
            var dClock = $(obj),
                dSecHand = dClock.find('.sec'),
                dMinHand = dClock.find('.min'),
                dHourHand = dClock.find('.hour'),
                date = new Date(),
                seconds = date.getSeconds(),
                mins = date.getMinutes(),
                hours = date.getHours(),
                sdegree = seconds * 6,
                mdegree = mins * 6,
                hdegree = hours * 30 + (mins / 2);

            setInterval(function(){
                date = new Date();
                seconds = date.getSeconds();
                sdegree = seconds * 6;
                dSecHand.css({
                    "transform": "rotate(" + sdegree + "deg)"
                });
            }, 1000);

            setInterval(function(){
                date = new Date();
                mins = date.getMinutes();
                mdegree = mins * 6;
                dMinHand.css({
                    "transform": "rotate(" + mdegree + "deg)"
                });
            }, 1000);            

            setInterval(function(){
                date = new Date();
                hours = date.getHours();
                hdegree = hours * 30 + (mins / 2);
                dHourHand.css({
                    "transform": "rotate(" + hdegree + "deg)"
                });
            }, 1000);
        }
		// initialize every element
		this.each(function() {
			init($(this));
		});
		return this;
	};
	// start
	$(function() {
		$('.clock').clock();
	});
})(jQuery);