window.onload = function(){

    let seconds = 00;
    let tens = 00;
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("second")
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    let buttonReset = document.getElementById('button-reset');
    let Interval ;

    buttonStart.onclick = function() {

        clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function

}
