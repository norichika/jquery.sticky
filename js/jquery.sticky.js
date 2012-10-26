(function(jQuery) {
	$.fn.sticky = function(options) {

		var opts = $.extend($.fn.sticky.defaults, options);

		var setOffSetY = this.offset().top;
		
		var checkObj = function() {
			if($(window).scrollTop() >= setOffSetY) {
				this.addClass(opts.idName);
			} else {
				this.removeClass(opts.idName);
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
				var $target = hash;
				var $setTrget = $target.offset().top;
				$setTrget = $setTrget - _target.objH*2;
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
		idName: "fixed",
		
	}

})(jQuery)