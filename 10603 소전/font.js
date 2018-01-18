const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

//font

context.font = '30px Arial';
context.strokeStyle = 'lightcoral';
context.textBaseline = 'top'; // 설정하지 않으면 글자가 잘려서 보임 (기본값 : middle)
context.fillText('Hello, Dhyo2!',10,10);
context.strokeText('Hello, World!',10,60);
