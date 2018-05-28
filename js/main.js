$(function() {
	$('.btn-order').click(function() {
		$('.modal-overlay').show();
		$('.modal').show();
	});

	$('.modal__close').click(function() {
		$('.modal-overlay').hide();
		$('.modal').hide();
	});

	$('.modal-overlay').click(function() {
		$('.modal-overlay').hide();
		$('.modal').hide();
	});
});