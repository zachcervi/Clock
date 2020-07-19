const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondDegrees = calculateDegrees(seconds);
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	if (seconds === 59 || seconds === 0) {
		secondHand.classList.remove('transition');
	} else {
		secondHand.classList.add('transition');
	}
	const mins = now.getMinutes();
	if (mins === 59 || mins === 0) {
		minsHand.classList.remove('transition');
	} else {
		minsHand.classList.add('transition');
	}

	const minDegrees = calculateDegrees(mins);
	minsHand.style.transform = `rotate(${minDegrees}deg)`;

	const hour = now.getHours();
	if (hour === 12 || 1) {
		hourHand.classList.remove('transition');
	} else {
		hourHand.classList.add('transition');
	}
	const hourDegrees = calculateHourDegrees(hour, mins);
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function calculateDegrees(time) {
	return time / 60 * 360 + 90;
}

function calculateHourDegrees(hour, mins) {
	return hour / 12 * 360 + mins / 60 * 30 + 90;
}

function changeBackground() {
	let background = document.body.background;
	if (background === '' || background === 'space.jpeg') {
		document.body.background = 'mountains.jpeg';
	} else if (background === 'mountains.jpeg') {
		document.body.background = 'city.jpeg';
	} else {
		document.body.background = 'space.jpeg';
	}
}

setInterval(setDate, 1000);
