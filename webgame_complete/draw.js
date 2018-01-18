const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const bg = new Image();
var score = 0;
bg.src = "background.jpg";

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

    //포션인지 아닌지 확인
    this.isPotion = false;

    this.isObstacleLo = 0;


}


const player = new GameObject('usagi.png', 100, 100);
//player.alpha = 0.5;
const obstacle = new GameObject('bomb.png',50,50);
// 포션을 먹으면 score + 50
const potion = new GameObject('potion.png',50,50);


const objectArray = [];

// 플레이어를 띄워줌
objectArray.push(player);

// 적을 랜덤으로 띄워줌
setInterval(function(){
    
    const newObstacle = new GameObject('bomb.png',50,50);
    objectArray.push(newObstacle);
    newObstacle.isObstacle = true;

    //랜덤 값을 지정해줌 1 ~ 4 까지
    newObstacle.isObstacleLo = Math.floor(Math.random() * 4 + 1);
    
    
    newObstacle.x = Math.random() * 440;
    newObstacle.y = -newObstacle.height;

    // 랜덤 생성
    if(newObstacle.isObstacleLo == 1){
        newObstacle.x = Math.random() * 440;
        newObstacle.y = -newObstacle.height;
    }if(newObstacle.isObstacleLo == 2){
        newObstacle.x = Math.random() * 440;
        newObstacle.y = 400+newObstacle.height;
    }if(newObstacle.isObstacleLo == 3){
        newObstacle.x = -newObstacle.width;
        newObstacle.y = Math.random() * 440;
    }if(newObstacle.isObstacleLo == 4){
        newObstacle.x = 400+newObstacle.width;
        newObstacle.y = Math.random() * 440;
    }      


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

    // 배경 이미지 불러오기
    context.fillRect(0,0,canvas.width,canvas.height);
    context.drawImage(bg,0,0,600,600);

    //점수
    

    for(let obj of objectArray){

        
        // 투명도
        //context.globalAlpha = obj.alpha;

        context.drawImage(obj.image, 
            obj.x, obj.y,
            obj.width,obj.height);

        if(obj === player){
            continue;
        }
        if(obj === potion){
            continue;
        }

        //방향 설정
        if (obj.isObstacleLo == 1) {
            obj.y += 5;
        }
        if (obj.isObstacleLo == 2) {
            obj.y -= 5;
        }
        if (obj.isObstacleLo == 3) {
            obj.x += 5;
        }
        if (obj.isObstacleLo == 4) {
            obj.x -= 5;
        }

        // 충돌체크 , 충돌 시 Game Over 출력
        if(checkCollision(player,obj)){


            context.font = '80px Lobster';
            context.fillStyle = 'white';
            context.textBaseline = 'top'; // 설정하지 않으면 글자가 잘려서 보임 (기본값 : middle)
            context.fillText('Game Over!',130,230);

            gameover = true;
            


        }


    }
        // 점수 표시    
        context.font = '30px Lobster';
        context.fillStyle = 'white';
        context.fillText("Score",420,15);
        context.fillText(score,500,15);
        context.textBaseline = 'top';
    


    // 키 이벤트

    if (downKeys['ArrowLeft']){
        player.x -= 10; // 왼쪽
    }else if(downKeys['ArrowRight']){
        player.x += 10; // 오른쪽
    }else if(downKeys['ArrowDown']){
        player.y += 10; // 아래
    }else if(downKeys['ArrowUp']){
        player.y -= 10; // 위
    }

    //canvas 창을 넘을 시 플레이어 이동시켜줌
    if(player.x >= canvas.width){
        player.x -=canvas.width;
    }else if(player.x <= 0){
        player.x += canvas.width;
    }else if(player.y >= canvas.height){
        player.y -=canvas.height;
    }else if(player.y <= 0){
        player.y += canvas.height;
    }

    window.requestAnimationFrame(run);

}


function checkCollision(player, obstacle) {
    // 충돌체크 짜기
    // a와 b가 충돌했으면 true, 아니면 false 반환
    return !(player.x > obstacle.x + obstacle.width || 
        player.x + player.width < obstacle.x ||
        player.y > obstacle.y + obstacle.height ||
        player.y + player.height < obstacle.y
    );
}

// score 표시

setInterval(function(){
    if(!gameover)
    {
      score+=10;

    }
}, 500)


