function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var id = getParameterByName('i');

if (id == null || id == '') {
	id = 0;
}

var i = 0;

while (i + 1 <= id) {
	document.getElementsByClassName('id')[i].style.opacity = 1;
	i++;
}


window.onload = function() {
	document.getElementsByClassName('id')[id].style.transition = 'opacity 1s';
	setTimeout(function() {
		document.getElementById('mover').style.height = '100vh';
		id = parseInt(id);
		setTimeout(function() {
			document.getElementsByClassName('id')[id].style.opacity = '1';
		}, 2000);
	}, 1000);
}