const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

//image
const image = new Image();
image.src='pixelheart.png';
imgX = image.width ;
imgY = image.height;

let x = 0;
let y = 0;

/*
window.addEventListener('DOMContentLoaded',function(){
    context.font = '30px Arial';
    context.strokeStyle = 'lightsalmon';
    context.strokeText('Hello',10,190);
});
*/

/*
image.addEventListener('load',function(){
    //크기 줄이기 (imgae,0,0,100,100) <= 100부분
    context.drawImage(image,
         0, 0, 200, 200, // <= 자르기
          0, 0, 100, 100 // <= 뿌리기 (크기)
        );
});
*/

image.addEventListener('load',function(){
    //console.log(arguments);
    context.drawImage(image,x,y);
});

//방법 1 : 단순한 방법 (이벤트 리스너만 사용)
/*
window.addEventListener('keydown',function(event){
    //console.log(event);

    //캔버스 전체 영역 설정
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    //방법 1 : 노가다 (쓰지마셈)
    
    if(event.keyCode == 39){ //방향키 오른쪽
        x += 10;
    }else if(event.keyCode == 37){ // 왼쪽
        x -=10;
    }else if(event.keyCode == 38){ // 위
        y -= 10;
    }else if(event.keyCode == 40){ // 아래
        y += 10;
    }

    
    switch(event.code){
        case 'ArrowRight' :
        x +=10;
        break;

        case 'ArrowLeft' :
        x -=10;
        break;

        case 'ArrowUp' :
        y -= 10;
        break;

        case 'ArrowDown' :
        y += 10;
        break;
    }

    context.drawImage(image,x,y);
});
*/


//방법 2 : 키보드 이벤트 + 객체 사용
/*
let downKeys = {};

window.addEventListener('keydown',onKeyDown);
window.addEventListener('keyup',onKeyUp);



function onKeyDown(event){
    downKeys[event.code] = true;
}

function onKeyUp(event){
    downKeys[event.code] = false;
}


window.requestAnimationFrame(run); // 브라우저

function run(){

    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.drawImage(image, x, y);
    
    if (downKeys['ArrowLeft']){
        x -= 10; // 왼쪽
    }else if(downKeys['ArrowRight']){
        x += 10; // 오른쪽
    }else if(downKeys['ArrowDown']){
        y += 10; // 아래
    }else if(downKeys['ArrowUp']){
        y -= 10; // 위
    }


    window.requestAnimationFrame(run);

}
*/


//마우스
function getMousePosition(){
    const rect = canvas.getBoundingClientRect();
    return {
        x : event.clientX - rect.left,
        y : event.clientY - rect.top
    }
}

window.addEventListener('mousemove',function(){
    //console.log(event);
    let pos = getMousePosition(event);

    if(imgX == pos.x && imgY == pos.y){
        
    }


})

