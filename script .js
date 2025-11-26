

 function newTime(){
var clockTime = new Date().toLocaleTimeString()
document.getElementById("time").innerHTML = clockTime
}
setInterval(newTime , 1000);

