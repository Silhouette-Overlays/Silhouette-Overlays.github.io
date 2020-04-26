function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
	if (t['minutes'] < 50) {
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
	} else {
		minutesSpan.innerHTML = '00';
		secondsSpan.innerHTML = '00';
	}

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var now = Date.parse(new Date());
var seconds = Math.floor((now / 1000) % 60);
var minutes = Math.floor((now / 1000 / 60) % 60);
var left_to_hour = 60 * 60 * 1000 - (minutes * 60 + seconds) * 1000;
var deadline = new Date(now + left_to_hour + 100 * 24 * 60 * 60 * 1000);

initializeClock('countdown', deadline);

setTimeout(function() {
	document.getElementById('countdown').style.opacity = 0;
}, 1000);