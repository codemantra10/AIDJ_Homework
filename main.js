music="";
function preload(){
music=loadSound("music.mp3");
}
function setup(){
canvas=createCanvas(600,500)
canvas.position(500,200)
video=createCapture(VIDEO);
video.hide();

}
function draw(){
image(video,0,0,600,500)
}
function playmusic(){
music.play();
}
function stopmusic(){
    music.stop();
    }