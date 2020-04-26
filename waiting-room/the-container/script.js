var container = document.getElementById('container');
var graphic = document.getElementById('container-display');

var containerLeft = container.style.left;
var containerTop = container.style.top;
var currentLeft = container.style.left;
var currentTop = container.style.top;
while (containerLeft == container.style.left) {
	containerLeft = Math.round(Math.random() * (container.clientWidth - 1) / 5) + 1 - (container.clientWidth / 2);
}
while (containerTop == container.style.top) {
	containerTop = Math.round(Math.random() * (container.clientHeight - 1) / 5) + 1 - (container.clientHeight / 2);
}
var containerDistance = (containerLeft - container.style.left) * (containerLeft - container.style.left) + (containerTop - container.style.top) * (containerTop - container.style.top);
var time = containerDistance / 200000;
var size = Math.round(Math.random() * 0.3) + 0.85;
container.style.transition = time + 's linear';
graphic.style.transition = time + 's linear';
container.style.left = 'calc(50vw - ' + containerLeft + 'px)';
container.style.top = 'calc(50vh - ' + containerTop + 'px)';
var graphicLeft = containerLeft * 1.3;
var graphicTop = containerTop * 1.3;
graphic.style.left = 'calc(50vw - ' + graphicLeft + 'px)';
graphic.style.top = 'calc(50vh - ' + graphicTop + 'px';
graphic.style.transform = 'scale(' + size + ')';
size = Math.round(Math.random() * 0.2) + 3;
container.style.transform = 'scale(' + size + ')';
time = time * 1000;
setTimeout(function() {
	moveContainer();
}, time);

function moveContainer() {
	currentLeft = containerLeft;
	currentTop = containerTop;
	while (containerLeft == currentLeft) {
		containerLeft = Math.round(Math.random() * (container.clientWidth - 1) / 5) + 1 - (container.clientWidth / 2);
	}
	console.log('before: ' + containerTop + ' ' + currentTop);
	while (containerTop == currentTop) {
		containerTop = Math.round(Math.random() * (container.clientHeight - 1) / 5) + 1 - (container.clientHeight / 2);
	}
	console.log('after: ' + containerTop + ' ' + currentTop);
	containerDistance = (containerLeft - currentLeft) * (containerLeft - currentLeft) + (containerTop - currentTop) * (containerTop - currentTop);
	time = containerDistance / 200000;
	size = Math.round(Math.random() * 0.3) + 0.85;
	container.style.transition = time + 's linear';
	graphic.style.transition = time + 's linear';
	container.style.left = 'calc(50vw - ' + containerLeft + 'px)';
	container.style.top = 'calc(50vh - ' + containerTop + 'px)';
	graphicLeft = containerLeft * 1.3;
	graphicTop = containerTop * 1.3;
	graphic.style.left = 'calc(50vw - ' + graphicLeft + 'px)';
	graphic.style.top = 'calc(50vh - ' + graphicTop + 'px';
	graphic.style.transform = 'scale(' + size + ')';
	size = Math.round(Math.random() * 0.2) + 3;
	container.style.transform = 'scale(' + size + ')';
	time = time * 1000;
	setTimeout(function() {
		moveContainer();
	}, time);
}