let speed = 20;
let scale = 0.38; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;
var x = 1;
let audio = new Audio('asset/augh.mp3');

let dvd = {
    x: 200,
    y: 300,
    xspeed: 2,
    yspeed: 2,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    dvd.img.src = 'asset/test.png';

   //Draw the "tv screen"
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    pickColor();
    update();
})();

function update() {
    setTimeout(() => {
        //Draw the canvas background
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //check the window size
        if(canvas.width != window.innerWidth || canvas.height != window.innerHeight){
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        //Draw DVD Logo and his background
        ctx.fillStyle = logoColor;
        ctx.fillRect(dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        //Move the logo
        dvd.x+=dvd.xspeed;
        dvd.y+=dvd.yspeed;
        //Check for collision 
        checkHitBox();
        update();
    }, speed)
}

//Check for border collision
function checkHitBox(){
    if(dvd.x+dvd.img.width*scale >= canvas.width || dvd.x <= 0){
        dvd.xspeed *= -1;
        pickColor();
    }
        
    if(dvd.y+dvd.img.height*scale >= canvas.height || dvd.y <= 0){
        dvd.yspeed *= -1;
        pickColor();
    }    
}

//Pick a random color in RGB format
function pickColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;
   //switch image
    setTimeout(() => {dvd.img.src = 'asset/Happy triggra.png';}, 10);
    setTimeout(() => {dvd.img.src = 'asset/happy.png';}, 250);

    /* //Image Fabrice Trigger
    //switch temporary the image
    setTimeout(() => {dvd.img.src ='asset/FabTrigger.png';},10);
    setTimeout(() => {dvd.img.src ='asset/Fab.png';},250);
    //song play

    audio.play();
    logoColor = 'rgb('+r+','+g+', '+b+')';
    */
}