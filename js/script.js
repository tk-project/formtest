/* drawer */
jQuery('.drawer-icon').on('click', function () {
	jQuery('.drawer').toggleClass('m_checked');
});

jQuery(window).on('scroll', function ($) {
	if (100 < jQuery(this).scrollTop()) {
		jQuery('.floating').show();
	} else {
		jQuery('.floating').hide();
	}
});

/* SmoothScroll */
jQuery('a[href^="#"]').click(function () {
	var header = 0; // jQuery( '#header' ).height();
	var speed = 300;
	var id = jQuery(this).attr('href');
	var target = jQuery('#' == id ? 'html' : id);
	var position = jQuery(target).offset().top - header;
	if (0 > position) {
		position = 0;
	}
	jQuery('html, body').animate(
		{
			scrollTop: position
		},
		speed
	);
	return false;
});

//現在の年数オブジェクトを4桁で生成
var time = new Date();
var year = time.getFullYear();
//1900年まで表示
for (var i = year; i >= 1900; i--) {
    $('#year').append('<option value="' + i + '">' + i + '</option>');
}
//1～12の数字を生成
for (var i = 1; i <= 12; i++) {
    $('#month').append('<option value="' + i + '">' + i + '</option>');
}
//1～31の数字を生成
for (var i = 1; i <= 31; i++) {
    $('#day').append('<option value="' + i + '">' + i + '</option>');
}
