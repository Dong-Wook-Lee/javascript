//  var와 호이스팅 실습

// 함수 먼저
function hello1() {
    console.log('hello1');
}
hello1();

// 함수의 호출을 먼저

hello2();
function hello2(){
    console.log('hello2');
}
// var 사용한 호이스팅 
age =6;
age++
console.log(age);
var age;

// 또 다른 예제
var name;

console.log(name);

name ='mark';

console.log(name);

name ='dongwook';

// let은 var처럼 호이스팅이 안됨 그래서 주로 var보단 let 사용하는걸 권장!!
/*console.log(name);

name = 'mark';

console.log(name);
let name;*/
