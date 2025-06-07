// var x=5;

// if(x>2){
//     console.log("X eshte me i madh se 2");
// }else{
//     console.log("X nuk eshte me i madh se 2");
// };

// var x=10;

// if(x>5){
//     console.log("X eshte me i madh se 5");
// }else{
//     console.log("X nuk eshte me i madh se 5");
// };

var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');

button.onclick = function () {
  text.innerHTML = input.value;
};

var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var button1 = document.querySelector('#btn2_id');
var ans = document.querySelector('#answer');

button1.addEventListener('click', function () {
  ans.innerHTML = parseInt(input1.value) + parseInt(input2.value);
});

button.onclick=function(){
    if(input.value>10){
        text.innerHTML = "Input value is bigger than 10";
    }else if(input.value==10){
        text.innerHTML = "Input value is equals to 10";
    }else{
        text.innerHTML = "Input value is less than 10";
    }
}


function showCurrentTime(){
  var clock = document.getElementById('clock');
  var currentTime = new Date() ;

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var meridian = "AM"

  if(hours >= noon){
    meridian= "PM";
  }

  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
  clock.innerText = clockTime;
};

var oneSecond = 1000;

setInterval(showCurrentTime, oneSecond);

var wakeuptime = 8;
var dstime = 16;
var sleeptime = 23;

function changeImage (){
  var time = new Date().getHours();
  var image = "img/ds_clock.png";
  var imageHTML = document.getElementById("timeImage");

  // Debug log
  console.log("Current hour:", time, "Wakeup:", wakeuptime, "DS:", dstime, "Sleep:", sleeptime);

  if(time === wakeuptime){
    image = "img/morning.gif";
  }
  else if(time === dstime){
    image = "img/class.gif";
  }
  else if(time === sleeptime){
    image = "img/night.gif";
  }

  imageHTML.src = image;
}

function updateClock() {
    var wakeuptimeSelector = document.getElementById('wakeuptimeselector');
    wakeuptime = Number(wakeuptimeSelector.value);

    var dstimeselector = document.getElementById('dstimeselector');
    dstime = Number(dstimeselector.value);

    var sleeptimeselector = document.getElementById('sleeptimeselector');
    sleeptime = Number(sleeptimeselector.value);

    changeImage();
}

var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", updateClock);

setInterval(changeImage, 1000);