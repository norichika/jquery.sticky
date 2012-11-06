(function(jQuery) {

	$.fn.sticky = function(options) {

		var opts = $.extend($.fn.sticky.defaults, options);
		
		var element = this;
		var elementH = element.outerHeight();
		var setOffSetY = this.offset().top;
		var anchorLink = $("a[href*=#]");
		$.data(element, "spec", { elHeight: elementH, usePlugin: true });
		//$.data(element, 'spec', {first:"test"});
		function checkObj() {
			if($(window).scrollTop() >= setOffSetY) {
				element.addClass(opts.idName);
			} else {
				element.removeClass(opts.idName);
			}
		}

		$(window).scroll(function () {
			checkObj();
		});

		/*
		function getAnchor(hash) {
			var $target = hash;
			var setTrget = $target.offset().top;
			setTrget = setTrget - elementH*2;
			//alert(setTrget);
			return setTrget;
		}
		
		
		$("a[href*=#]").click(function() {
			var num = getAnchor($(this.hash));
			$(window).scrollTop(num);
			return false;
		});
		*/
		return this;
	};


	$.fn.sticky.defaults = {
		idName: "fixed"
	}

})(jQuery)