let[seconds, minutes, hours] = [0,0,0] //we can initialize like this too

let display = document.getElementById("timer")

let timer = null;

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    // calculate h,m,s
    let h = hours < 10 ? "0"+hours : hours;
    let m = minutes < 10 ? "0"+minutes : minutes;
    let s = seconds < 10 ? "0"+seconds : seconds;

    //display to ui
    display.innerHTML = h+":"+m+":"+s;
}

// now this has to executed every single second so
function startWatch(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function pauseWatch(){
    clearInterval(timer);
}

function resetWatch(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0]
    display.innerHTML = "00:00:00";
}