var container = document.getElementById('container');
var graphic = document.getElementById('container-display');

var containerLeft = container.style.left;
var containerTop = container.style.top;
var currentLeft = container.style.left;
var currentTop = container.style.top;
while (containerLeft == container.style.left) {
	containerLeft = Math.round(Math.random() * (container.clientWidth - 1) / 5) + 1 - (container.clientWidth / 10);
}
while (containerTop == container.style.top) {
	containerTop = Math.round(Math.random() * (container.clientHeight - 1) / 5) + 1 - (container.clientHeight / 10);
}
var containerDistance = (containerLeft - container.style.left) * (containerLeft - container.style.left) + (containerTop - container.style.top) * (containerTop - container.style.top);
var time = Math.sqrt(containerDistance) / 30;
var size = Math.round(Math.random() * 0.5) + 0.8;
container.style.transition = time + 's ease';
graphic.style.transition = time + 's ease';
container.style.left = containerLeft + 'px';
container.style.top = containerTop + 'px';
var graphicLeft = containerLeft * 1.3;
var graphicTop = containerTop * 1.3;
graphic.style.left = 'calc(' + graphicLeft + 'px - 10vw)';
graphic.style.top = 'calc(' + graphicTop + 'px - 40vh)';
graphic.style.transform = 'scale(' + size + ')';
size = Math.round(Math.random() * 0.2) + 2;
container.style.transform = 'scale(' + size + ')';
time = time * 1000;
setTimeout(function() {
	moveContainer();
}, time);

function moveContainer() {
	currentLeft = containerLeft;
	currentTop = containerTop;
	while (containerLeft == currentLeft) {
		containerLeft = Math.round(Math.random() * (container.clientWidth - 1) / 5) + 1 - (container.clientWidth / 10);
	}
	console.log('before: ' + containerTop + ' ' + currentTop);
	while (containerTop == currentTop) {
		containerTop = Math.round(Math.random() * (container.clientHeight - 1) / 5) + 1 - (container.clientHeight / 10);
	}
	console.log('after: ' + containerTop + ' ' + currentTop);
	containerDistance = (containerLeft - currentLeft) * (containerLeft - currentLeft) + (containerTop - currentTop) * (containerTop - currentTop);
	time = Math.sqrt(containerDistance) / 30;
	size = Math.round(Math.random() * 0.5) + 0.8;
	container.style.transition = time + 's ease';
	graphic.style.transition = time + 's ease';
	container.style.left = containerLeft + 'px';
	container.style.top = containerTop + 'px';	
	graphicLeft = containerLeft * 1.3;
	graphicTop = containerTop * 1.3;
	graphic.style.left = 'calc(' + graphicLeft + 'px - 10vw)';
	graphic.style.top = 'calc(' + graphicTop + 'px - 40vh)';
	graphic.style.transform = 'scale(' + size + ')';
	size = Math.round(Math.random() * 0.2) + 2;
	container.style.transform = 'scale(' + size + ')';
	time = time * 1000;
	setTimeout(function() {
		moveContainer();
	}, time);
}
