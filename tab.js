(function($){
	$.fn.simpleTabs = function(opts){
		var cfg = $.extend({
			selectedClass: 'selected',
			selected: 0,
			tabClass: 'tab-item',
			tabContentEl: 'div',
			tabContainer: this
		}, opts);
	//	todo if this object is a collection
		var $tabLis = $('.'+ cfg.tabClass, this),
			$tabDivs = $('> ' + cfg.tabContentEl, cfg.tabContainer).slice(0, $tabLis.length);

		// select
		var index = $tabLis.removeClass(cfg.selectedClass).eq(cfg.selected).addClass(cfg.selectedClass).index();
		$tabDivs.hide().eq(index).show();

	//	add event listener
		$tabLis.each(function(index){
			$(this).on('click',function(){
				$(this).addClass(cfg.selectedClass).siblings().removeClass(cfg.selectedClass);
				$tabDivs.hide().eq(index).show();
			})
		});

		return this;
	};
}(jQuery));