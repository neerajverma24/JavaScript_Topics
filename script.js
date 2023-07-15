function rotateClockHands() {
    var currentDate = new Date();

    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();

    var hourHand = 
        document.getElementById('hour');
    var hourMinute = 
        document.getElementById('minute');
    var hourSecond = 
        document.getElementById('second');

    var hourRotation = (hour * 30) + (minute / 2);
    var minuteRotation = (minute * 6) + (second / 10);
    var secondRotation = second * 6;

    hourHand.style.transform = `rotate ($ {hourRotation}deg)`;
    minuteHand.style.transform = `rotate ($ {minuteRotation}deg)`;
    secondHand.style.transform = `rotate ($ {secondRotation}deg)`;
}

setInterval(rotateClockHands, 1000); // update every seconds