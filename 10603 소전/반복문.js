//반복문

var arr = [1, 2, 3];

// 배열 순회하며 원소 출력하기
for(var i = 0; i < arr.length; i++){
    // document.write(arr[i]+"<br/>");

    // 콘솔에만 띄워줌 
    console.log(arr[i]);
}

//i in arr => arr의 인덱스가 i에 들어오게 되고 출력
for(var i in arr){
    // console.log(i);
    console.log(arr[i]);
}

//num of arr => 바로 배열 요소에 접근해서 출력
for(var num of arr){
    console.log(num);
}