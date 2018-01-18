let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

// 선
context.strokeStyle = '#ff0000'; // 선 색 바꾸기
context.moveTo(0,0);
context.lineTo(100,100);
context.stroke();

// 사각형
context.fillStyle = '#ff0000';
context.fillRect (20,20,50,50); // x, y, 너비, 높이

// 삼각형
context.fillStyle = '#00ff00';
context.beginPath(); // (= 일러 패스) => 패스시작을 알림
context.moveTo(25,25);
context.lineTo(105,25);
context.lineTo(25,105);
context.fill();

// 원
context.strokeStyle = '#000';
context.fillStyle = '#0000ff'
context.beginPath();
context.arc(40, 40, 20, 0, 2 / 3 *Math.PI, true ); 
// anticlockwise 설정 안하면 시계방향으로 돌음
// anticlockwise : 반시계방향
// 2 * Math.PI : 원, Math.PI : 반원
context.stroke();
context.fill();

//하트
context.beginPath();
context.moveTo(75,40);
context.bezierCurveTo(75, 37, 70, 25, 50, 25);
context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
context.bezierCurveTo(20, 80, 40, 102, 75, 120);
context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
context.bezierCurveTo(85, 25, 75, 37, 75, 40);
context.fillStyle = '#ff0000';
context.fill();
