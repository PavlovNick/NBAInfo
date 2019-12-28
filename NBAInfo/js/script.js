$(function() {
	$('.toggles').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		&('.posts').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#showall').click(function(){
		$('.post').show(500);
	});
});