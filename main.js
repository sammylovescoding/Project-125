
  difference=0;
  leftWristX=0;
  rightWristX=0;


 function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }

  function modelLoaded(){
    console.log('poseNet is initiated!');
  }


  function gotPoses(results){
   if(results.length > 0)
   {
     console.log(results);
     leftWristX=results[0].pose.leftWrist.x;
     rightWristX=results[0].pose.rightWrist.x;
     difference=floor(leftWristX-rightWristX);
     console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
   }
  }

  function draw(){
    background('#AEC6CF');
    document.getElementById("square_side").innerHTML="Font Size Of The Text Will Be ="+ difference + "px";
    fill('#F90093');
    stroke('#F90093');
    textSize(difference);
    text('samarth',50,400);
 }

