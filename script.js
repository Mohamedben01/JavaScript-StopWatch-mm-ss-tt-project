window.onload = function(){

    //global variables
    var minutes = "00";
    var seconds = "00";
    var tens = "00";

    //local Variables
    var appendMinutes = document.getElementById("minutes");
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");

    ///
    var getMinutes = document.getElementById("takeMinutes");
    var getSeconds = document.getElementById("takeSeconds");
    var getTens = document.getElementById("takeTens");

    //Variables events for buttons
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var buttonCount = document.getElementById("button-count");

    //Variable to fix function duration
    var Interval ;

    function startTimer(){
        tens++;
        if(tens < 9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        if(tens > 99){
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = tens;
        }

        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        if(seconds > 60){
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = seconds;
            tens = 0;
            appendTens.innerHTML = tens;
        }
        if(minutes > 9){
            appendMinutes.innerHTML = minutes;
        }
    }

    buttonStart.onclick = function (){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        $("#button-count").show();
    }

    buttonStop.onclick = function(){
        clearInterval(Interval);
    }

    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        $("#button-count").hide();
    }

    
}