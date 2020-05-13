document.getElementById('bt-text').innerHTML = 'b';
document.getElementById('bt-one').style.width = document.getElementById('bt-text').clientWidth + 'px';
document.getElementById('bt-text').innerHTML = 't';
document.getElementById('bt-two').style.width = document.getElementById('bt-text').clientWidth + 'px';
document.getElementById('bt-text').innerHTML = 'bt';
document.getElementById('bt').style.width = document.getElementById('bt-text').clientWidth + 3 + 'px';
document.getElementById('bt').style.left = document.getElementById('bt').clientWidth + (document.getElementById('tv').clientWidth - document.getElementById('bt').clientWidth) / 2 + 'px';
document.getElementById('tv').style.left = document.getElementById('bt').clientWidth + 'px';

setTimeout(function() {
	document.getElementById('bt-one').style.transition = 'width 0.3s';
	document.getElementById('bt-two').style.transition = 'width 0.3s';
	document.getElementById('bt').style.left = '0px';
	document.getElementById('container').style.left = 10 + document.getElementById('bt').clientWidth / 2 + 'px';
	setTimeout(function() {
		document.getElementById('tv').style.top = '0px';
		document.getElementById('container').style.top = '7px';
		setTimeout(function() {
			document.getElementById('bt-text').innerHTML = 'beats turning';
			var widthTotal = document.getElementById('bt-text').clientWidth;
			document.getElementById('bt-text').innerHTML = 'turning';
			var widthTurning = document.getElementById('bt-text').clientWidth;
			var widthBeats = widthTotal - widthTurning;
			document.getElementById('bt-one').style.width = widthBeats + 'px';
			document.getElementById('bt-two').style.width = widthTurning + 'px';
			document.getElementById('bt').style.width = widthTotal + 'px';
			document.getElementById('tv').style.left = widthTotal + 10 + 'px';
			document.getElementById('container').style.transform = 'scale(1.5)';
			setTimeout(function() {
				document.getElementById('bt-text').innerHTML = 'b';
				document.getElementById('bt-one').style.width = document.getElementById('bt-text').clientWidth + 'px';
				document.getElementById('bt-text').innerHTML = 't';
				document.getElementById('bt-two').style.width = document.getElementById('bt-text').clientWidth + 'px';
				document.getElementById('bt-text').innerHTML = 'bt';
				document.getElementById('bt').style.width = document.getElementById('bt-text').clientWidth + 3 + 'px';
				document.getElementById('bt').style.left = '0px';
				document.getElementById('tv').style.left = document.getElementById('bt-text').clientWidth + 3 + 'px';
				document.getElementById('container').style.transform = 'scale(1)';
				setTimeout(function() {
					document.getElementById('tv').style.top = '30px';
					document.getElementById('container').style.top = '-1px';
					setTimeout(function() {
						document.getElementById('bt').style.left = document.getElementById('bt-text').clientWidth + 3 + (document.getElementById('tv').clientWidth - document.getElementById('bt-text').clientWidth - 3) / 2 + 'px';
						document.getElementById('container').style.left = '10px';
					}, 300);
				}, 400);
			}, 5000);
		}, 300);
	}, 300);
	setInterval(function() {
		document.getElementById('bt-one').style.transition = 'width 0.3s';
		document.getElementById('bt-two').style.transition = 'width 0.3s';
		document.getElementById('bt').style.left = '0px';
		document.getElementById('container').style.left = 10 + document.getElementById('bt').clientWidth / 2 + 'px';
		setTimeout(function() {
			document.getElementById('tv').style.top = '0px';
			document.getElementById('container').style.top = '7px';
			setTimeout(function() {
				document.getElementById('bt-text').innerHTML = 'beats turning';
				var widthTotal = document.getElementById('bt-text').clientWidth;
				document.getElementById('bt-text').innerHTML = 'turning';
				var widthTurning = document.getElementById('bt-text').clientWidth;
				var widthBeats = widthTotal - widthTurning;
				document.getElementById('bt-one').style.width = widthBeats + 'px';
				document.getElementById('bt-two').style.width = widthTurning + 'px';
				document.getElementById('bt').style.width = widthTotal + 'px';
				document.getElementById('tv').style.left = widthTotal + 10 + 'px';
				document.getElementById('container').style.transform = 'scale(1.5)';
				setTimeout(function() {
					document.getElementById('bt-text').innerHTML = 'b';
					document.getElementById('bt-one').style.width = document.getElementById('bt-text').clientWidth + 'px';
					document.getElementById('bt-text').innerHTML = 't';
					document.getElementById('bt-two').style.width = document.getElementById('bt-text').clientWidth + 'px';
					document.getElementById('bt-text').innerHTML = 'bt';
					document.getElementById('bt').style.width = document.getElementById('bt-text').clientWidth + 3 + 'px';
					document.getElementById('bt').style.left = '0px';
					document.getElementById('tv').style.left = document.getElementById('bt-text').clientWidth + 3 + 'px';
					document.getElementById('container').style.transform = 'scale(1)';
					setTimeout(function() {
						document.getElementById('tv').style.top = '30px';
						document.getElementById('container').style.top = '-1px';
						setTimeout(function() {
							document.getElementById('bt').style.left = document.getElementById('bt-text').clientWidth + 3 + (document.getElementById('tv').clientWidth - document.getElementById('bt-text').clientWidth - 3) / 2 + 'px';
							document.getElementById('container').style.left = '10px';
						}, 300);
					}, 400);
				}, 10000);
			}, 300);
		}, 300);
	}, 45000);
}, 1000);

//document.getElementById('bt').style.left = document.getElementById('bt-text').clientWidth + 3 + (document.getElementById('tv').clientWidth - document.getElementById('bt-text').clientWidth - 3) / 2 + 'px';