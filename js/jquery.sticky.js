(function(jQuery) {
	$.fn.sticky = function(options) {

		var opts = $.extend($.fn.sticky.defaults, options);
		
		var element = this;
		var setOffSetY = this.offset().top;
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


		function setAnchor(objH) {
			this.objH = objH;
			_target = this;
		
			checkAnchor = function() {
				var $target = $(location.hash);
				var $setTrget = $target.offset().top;
				$setTrget = $setTrget - _target.objH;
				$(window).scrollTop($setTrget);
			}
		
			if(location.hash != '') {
				setTimeout(checkAnchor, 500);
				checkAnchor();
			}

			function checkhref(hash) {
				//alert("link");
				var $target = hash;
				var $setTrget = $target.offset().top;
				$setTrget = $setTrget - element.objH*2;
				$(window).scrollTop($setTrget);
			}
			
			$("a[href*=#]").click(function() {
				checkhref($(this.hash));
				return false;
			});
		}

		return this;
	};


	$.fn.sticky.defaults = {
		idName: "fixed"
		
	}

})(jQuery)