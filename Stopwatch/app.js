const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const numberDisplay = document.getElementById("numbers");

let s = 0;
let m = 0;
let h = 0;

let leadingSecond;
let leadingMinute;
let leadingHour;

let timerStatus = false;
let timerInterval;

function startTimer() {
    s++;

    if(s > 59) {
        s = 0;
        m++;
        if(m > 59) {
            m = 0;
            h++;
        }
    
        if(h > 59) {
            s = 0;
            m = 0;
            h = 0;
        }
    } 


    if(s < 10) {
        s = "0" + s;
    } 


    if(s < 10) {
        leadingMinute = "0" + s;
    } else {
        leadingMinute = s;
    }

    if(m < 10) {
        leadingMinute = "0" + m;
    } else {
        leadingMinute = m;
    }

    if(h < 10) {
        leadingHour = "0" + h;
    } else {
        leadingHour = h;
    }


    


    numberDisplay.innerHTML = leadingHour + ":" + leadingMinute + ":" + s;
}


startBtn.addEventListener("click", () => {
    if(!timerStatus) {
        timerInterval = window.setInterval(startTimer, 1000);
        startBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus = true;
    } else {
        window.clearInterval(timerInterval);
        startBtn.innerHTML = '<i class="fa-solid fa-play" id="start"></i>';
        timerStatus = false
    }   
})

resetBtn.addEventListener("click", () => {
    s = 0;
    m = 0;
    h = 0;

    if(s < 10) {
        leadingSecond = "0" + s;
    } else {
        leadingSecond = s;
    }

    if(m < 10) {
        leadingMinute = "0" + m;
    } else {
        leadingMinute = m;
    }

    if(h < 10) {
        leadingHour = "0" + h;
    } else {
        leadingHour = h;
    }


    numberDisplay.innerHTML = leadingHour + ":" + leadingMinute + ":" + leadingSecond;

})