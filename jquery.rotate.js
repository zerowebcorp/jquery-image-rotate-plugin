/*
jQuery Image Rotate Plugin
Vivek
vivekv@vivekv.com
http://www.vivekv.com
*/

(function($){
     $.fn.rotate = function (options) {

		var defaults = {
			mouseout : 'true'
		};
		var options = $.extend(defaults,options);
		return this.mouseover(function(){
			var obj = $(this);
			obj.addClass("rotateclass").css('-moz-transform','rotate(360deg)');
		}).mouseout(function(){
				if(options.mouseout == 'true'){
						$(this).css("-moz-transform","rotate(720deg)");
				}
			});
	}
})(jQuery);