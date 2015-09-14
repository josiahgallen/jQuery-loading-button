'use strict';

var $submit = $('#submit');
var $loadButton = $('form > button');

$submit.on('submit', function(e) {
	e.preventDefault();
	$loadButton.html('Loading...')
	$loadButton.prop('disabled', true);
	setTimeout(function() {
		$loadButton.html('Submit')
		$loadButton.prop('disabled', false);		
	}, 4000);
});