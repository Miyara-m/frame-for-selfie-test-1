function preLoad(){

}
function setup(){
 canvas = createCanvas(300, 350);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
}
function draw(){
 image(video, 0, 0, 300, 350);
}