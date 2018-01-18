
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var img = new Image();
img.src = "pixelheart.png";

var posX;
var posY;

var x = 0;
var y = 0;

var drag = false;

function run(){

    context.drawImage(img,x,y);

}

img.addEventListener('load', run);

window.addEventListener('mousedown', function(event){
    drag = true;
    run();
});

window.addEventListener('mouseup', function(event){
    drag = false;
    run();
});

window.addEventListener('mousemove', function(event){
    
    posX = event.clientX - 70;
    posY = event.clientY - 70;
    
    if(drag) {
        context.clearRect(0,0,1000,1000);
        x = posX;
        y = posY;
    }

    run();
});

