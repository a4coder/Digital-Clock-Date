// selection
let main = document.getElementById('main');
let time = document.getElementById('time');
let date = document.getElementById('date');
let button1 = document.getElementById('button1');

// add event listenter for button1
button1.addEventListener("click",function () {
  setInterval(setMyTime, 1000);
  function setMyTime() { 
    let mytime = new Date();
    let digitClock = mytime.toLocaleTimeString("fa-IR")
    time.innerHTML = digitClock
    let weekday = mytime.toLocaleDateString('fa-IR', {weekday: "long"});
    let day = mytime.toLocaleDateString('fa-IR', {day: "numeric"});
    let month = mytime.toLocaleDateString('fa-IR', {month: "long"});
    let year = mytime.toLocaleDateString('fa-IR', {year: "numeric"});
    date.innerHTML = `${weekday}, ${day} ${month} ${year}`;
    button1.style.display = 'none'
 } 
});