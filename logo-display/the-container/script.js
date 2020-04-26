window.onload = function() {
	setInterval(function() {
		document.getElementById('logos').style.animation = 'swing 1s ease';
		setTimeout(function() {
			document.getElementById('logos').style.animation = 'none';
		}, 1000);
	}, 10000);
}