$(document).ready(function() {
//для меню мобильного
	$("#btn-mob").click(function () {
		$(".mob").slideToggle();
	});
	$(".menu-foo-mob").click(function () {
		$(".menu-foot").slideToggle();
	});


	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});


	jQuery(document).on('click', '.mega-dropdown', function(e) {
		e.stopPropagation()
	})
});
