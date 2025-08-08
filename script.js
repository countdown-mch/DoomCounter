const countDownDate = new Date(2026,5,1,0,0,0,0).getTime();
const startDate = new Date(2025,5,1,0,0,0,0).getTime();
/* const countDownDate = new Date(2025,7,6,10,40,0,0).getTime();
const startDate = new Date(2025,7,6,10,0,0,0).getTime(); */
const dayDisplay = document.querySelector("#dayCounter");
const display = document.querySelector("#timer");

countDown();

var x = setInterval(countDown,1000);

function countDown(){
    let now = new Date().getTime();
    let distance = countDownDate-now;

    if(distance>0){
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(hours<10){
            hours = addZeroPadding(hours);
        
        }

        if(minutes<10){
            minutes = addZeroPadding(minutes);
        }

        if(seconds<10){
            seconds = addZeroPadding(seconds);
        }

        dayDisplay.innerHTML = `${days} nap`
        display.innerHTML = `${hours}:${minutes}:${seconds}`;
        setProgressPercentage(distance);
    }else{
        clearInterval(x);
        dayDisplay.innerHTML = 'Vége'
        display.innerHTML = "";
        setProgressPercentage(0);
    }

    
}

function addZeroPadding(number){
    let numstr = number.toString();
    return "0"+numstr;
}

function setProgressPercentage(currentDistance){
    let bottom = countDownDate-startDate;
    let percent = Math.floor((currentDistance/bottom)*100);
    var r = document.querySelector("#cp");
    r.style.setProperty('--progress', percent);
}