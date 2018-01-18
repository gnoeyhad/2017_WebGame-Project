// /*
// let arr = [];
// let arr = new Array();

// let obj = {};
// let obj = new Object();

// let f1 = function(a,b){};
// let f2 = (a,b) => {}; // Arrow function
// */

// function GameObject(){
//     this.x = 0;
// }

// console.log(GameObject);
// console.log(new GameObject());

// let player = {name : 'Yoongi'};

// // hasOwnProperty = > 불리언값 출력
// //console.log(player.hasOwnProperty('name'));

// console.log(player);

// // __proto__ : 이 객체가 생성될 때 어떤 객체를 기반으로 생성이 되었나

// // let player = new GameObject();를 했을 때 일어나는 일
// let player = new Object()
// player.__proto__ = GameObject.prototype;
// GameObject.bind(player)();

// //위에 것과 같음
// let player = new GameObject();

//prototype의 존재 이유

// let o = {x : 1, y: 2};
// let a = [1,2,3];

// console.log(o.toString()); // toString => 문자열로 변환
// console.log(a.toString());


// console.log(Array.prototype.indexOf);
// let a = [1,2,3];
// console.log(a.indexOf(2));

// let b = [5,6,7];
// console.log(b.indexOf(7));

// Array.prototype.indexOf
//  = function (){ console.log('사라짐 !')};

// console.log(a.indexOf(2));
// console.log(b.indexOf(7));

//자바스크립트는 모든 변수가 '참조'이다.

//객체 선언
//let obj = {x : 10};

//객체 복사? 얕은 복사(Shallow copy)
//let obj2 = obj;

//반대 개념: 깊은 복사(Deep copy)


//객체 수정
//obj2.x = 30;

//결과
//console.log(obj.x); //30 원래 것도 바뀜
//console.log(obj2.x); //30

// let a = {x: 1, y:2 };
// let b = {y:4, z:5};

// b.__proto__=a;

// let c = {};
// c.__proto__ = a;

// c.__proto__.y = 3;

// console.log(b.y);
// console.log(b.x);
// console.log(c.y);
// console.log(a.y);

// function GameObject(){


// }

// .prototype => 함수일 경우에만 생김
// 속성이 자동으로 생김

// GameObject.prototype.move = function(dx, dy){


// } 
//prototype : 포로토타입 객체(Prototype Object)
//            공용으로 쓰는 변수를 저장하는 장소
//__proto__ : 프로토타입 링크(Prototype Link)
//            . 으로 속성에 접근했을 때 발견하지 못했으면
//            찾아보는 장소

//let player = new GameObject(); 할 때 생기는 일

// let player = {};
// player.__proto__ = GameObject.prototype;
// GameObject.call(player);

// let player = new GameObject();
// let obstacle = new GameObject();

// player.move(1,2);
// obstacle.move(2,3);

// function GameObject(){
//     this.x = 0;
//     this.y = 0;
// }

// function Animation(){
//     this.images = []; //이미지 여러 장의 정보가 들어있음
// }

//Animation.prototype = Object.create(GameObject.prototype);

// Animation.__proto__ = GameObject.prototype;
// Animation.constructor = Animation;

// function Obstacle(){
//     GameObject.call(this);

//     //장애물 정보들
// }

//장애물 판별
// if(obj instanceof Obstacle){
//     //장애물 처리
// }


// // ES6에서 추가된 class
// class GameObject {
//     constructor(){
//         this.x = 0;
//         this.y = 0;
//     }

//     move(dx,dy){

//     }

//     get area(){


//     }
// }

// class Animation extends GameObject {
//     constructor(){
//         super();

//     }
// }

class Shape{

    constructor(name){
        this.name = name;
        }

        get area(){
            return "No information";
        }
}

class Rectangle extends Shape{
    constructor(width,height){
        //super => 확장
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.width * this.height;
    }
}

class Square extends Rectangle{
    constructor(length){
        super(length,length);
    }
}