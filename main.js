var noseX=0
var noseY=0
var leftWristX=0
var rightWristX=0
var difference=0
function preload(){

}

function setup(){
video=createCapture(VIDEO)
video.size(500,550)
canvas=createCanvas(500,550)
canvas.position(560,160)

poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}

function draw(){
background('#fc0303')
fill('#0022ff')
stroke('#f511c0')
square(noseX, noseY,difference)
document.getElementById("square_side").innerHTML="Width and Height of Square is : "+difference
}
function modelLoaded(){
    console.log("PoseNet is intitialised")
}


function gotPoses(results){
if(results.length>0){
    console.log(results)
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX ="+noseX + "noseY =" + noseY)
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX = " + leftWristX + "rightWristX =" + rightWristX + "difference between wrists = " + difference )
}

}