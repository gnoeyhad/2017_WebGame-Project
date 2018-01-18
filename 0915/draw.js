const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');



//리터럴
/*
const arr = []; // 리터럴
const arr = new Array();

const obj = {}; // 리터럴
const obj = new Object();
*/

const downKeys = {};

function GameObject(src, width, height){
    this.x = 0;
    this.y = 0;
    this.image = new Image();
    this.image.src = src;
    this.width = width;
    this.height = height;
    
    //투명도
    this.alpha = 1;

    //장애물인지 아닌지 확인
    this.isObstacle = false;

}

const player = new GameObject('usagi.png', 100, 100);
//player.alpha = 0.5;
const obstacle = new GameObject('emoji.png',130,130);


const objectArray = [];

// 배열의 맨 끝에 붙음
objectArray.push(player);
objectArray.push(obstacle);

obstacle.x = Math.random()*440;
obstacle.y = Math.random()*440;

// 일정시간마다 적 소환
// 1초마다 한 번씩 실행하기
setInterval(function(){
    
    const newObstacle = new GameObject('emoji.png',130,130);
    objectArray.push(newObstacle);
    newObstacle.isObstacle = true;
    
    newObstacle.x = Math.random() * 440;
    newObstacle.y = -newObstacle.height;

},1000);

window.addEventListener('keydown',onKeyDown);
window.addEventListener('keyup',onKeyUp);

function onKeyDown(event){
    downKeys[event.code] = true;
}

function onKeyUp(event){
    downKeys[event.code] = false;
}

window.requestAnimationFrame(run); // 브라우저

let gameover = false;

function run(){

    if (gameover) return ;

    context.fillStyle = 'lavender';
    context.fillRect(0, 0, canvas.width, canvas.height);


    for(let obj of objectArray){
        
        // 투명도
        context.globalAlpha = obj.alpha;

        context.drawImage(obj.image, 
            obj.x, obj.y,
            obj.width,obj.height);

        if(obj === player){
            continue;
        }
        if(obj.isObstacle){
            obj.y += 5;
        }
        if(checkCollision(player,obj)){
            gameover = true;
        }
        
        /*
        for(let otherObj of objectArray){
            // 자기 자신과는 충돌검사 x
            if(obj === otherObj){
                continue;
            }
            // 충돌검사
            if(checkCollision(obj,otherObj)){
                // 충돌 시에 불투명도 줄임
                obj.alpha = otherObj.alpha = 0.5;
            }

        }*/

        
    }

   
    
    if (downKeys['ArrowLeft']){
        player.x -= 10; // 왼쪽
    }else if(downKeys['ArrowRight']){
        player.x += 10; // 오른쪽
    }else if(downKeys['ArrowDown']){
        player.y += 10; // 아래
    }else if(downKeys['ArrowUp']){
        player.y -= 10; // 위
    }


    window.requestAnimationFrame(run);

}


function checkCollision(player,obstacle){


    return (obstacle.x < player.x + player.width &&
            obstacle.x + player.width > player.x &&
            obstacle.y < player.y + player.height &&
            obstacle.y + obstacle.height > player.y

    );

}

