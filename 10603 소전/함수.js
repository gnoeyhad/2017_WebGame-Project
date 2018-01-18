// 함수

function add(a,b){
    if (typeof(a) !='number'){ //a가 숫자가 아니면 undefined
        return ;
    }
    return a+b;
}

console.log(add(1,2));
console.log(add("1","2")); // 숫자로 계산한게 아닌 문자열합침
console.log(add("1","def")); 

console.log(1 == '1'); // => 자료형까지 검사하지 않음
console.log(1 === '1'); // => 자료형까지 검사

