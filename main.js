x = 0;
y = 0;
to_number= 0;
draw_apple = "";
screen_w= 0;
screen_h= 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() {
  apple= loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
to_number= Number(content);
if(Number.isInteger(to_number)) {
  draw_apple= "set";
}
}

function setup() {
  screen_w= window.innerWidth;
  screen_h= window.innerHeight;
 canvas= createCanvas(screen_w, screen_h - 150)
}

function draw() {

  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
     for(i=0;i < to_number; i++) {
      x= Math.floor(Math.random() * 1300);
      y= Math.floor(Math.random() * 450);

      image(apple, x, y, 40, 40);
      
     }
  }

  
}

function speak(){
  speak_data = to_number+" appples drawn";
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

   
}


