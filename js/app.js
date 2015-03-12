$(document).ready(function() {
	playMusic();

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		console.log('mousedown');
		// play hadouken sound
		playHadouken();

		$('.ryu-ready').hide();
		$('.ryu-throwing').show();

		// show hadouken and animate it to the right of the screen
		$('.hadouken').finish().show().animate(
		{
			'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '600px');
		});
	})
	.mouseup(function() {
		console.log('mouseup');

		// ryu goes back to his ready position
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$(document).keydown(function(event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '88'){
			 
			$('#song-sound')[0].play();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '88'){

			$('#song-sound')[0].pause();
			$('#song-sound')[0].currentTime = 0;
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
});

function playHadouken()
{
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playMusic()
{
	$('#song-sound')[0].volume = 0.5;
	$('#song-sound')[0].load();
	
}