// 연관 배열

var player = {
    hp : 3,
    name : "Noname"
}

console.log(player.hp); // . 으로 접근
console.log(player.name);

console.log(player.costume); // => 정의된게 없기에 undefined

// 원할 때 추가 가능
player.costume = "normal";

console.log(player.costume);

//지우기
delete player.skill;

console.log(player.skill) // => 지워졌기에 undefined



console.log(player["hp"]);
console.log(player["name"]);

Array.prototype.concat = function(){};