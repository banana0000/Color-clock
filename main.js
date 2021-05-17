function colorClock(){
  var date = new Date();

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  
  if (hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }
  var sat = 360;
  var br = 50;
  var hue = 50;

  var clockFace = hours + ':' + minutes + ':' + seconds;
  var hexaColor = 'hsl' + hours + minutes + seconds;

  document.getElementById('clock').innerHTML = clockFace;
  document.body.style.background = hexaColor;

  setTimeout(function() {
    colorClock();
  }, 500);
}

colorClock();
