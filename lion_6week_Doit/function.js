// Q1. “안녕 내 이름은 (본인 이름)(이)야“ 라는 문장을 프린트하는 함수 ‘hello’를 만드시오
function hello() {
    console.log('안녕 내 이름은 정인이야');
}
hello(); //함수 호출

// Q2. 변수 name에 본인 이름을 할당해 “안녕 내 이름은 (본인 이름)(이)야” 라는 문장을 프린트 하는 함수 ‘hi’를 만드시오.
let name = "표정인";
function hi() {
  console.log(`안녕 내 이름은 ${name}이야`);
}
hi();

// 다른 버전
function hi(name){
    console.log('안녕 내 이름은 ${name}(이)야');
        // return name;
}
const name = hi('정인') //인자 -> 정인&함수 호출
const name = '정인';
hi(name);

// Q3. 숫자 1과 2를 더한 결과를 출력하는 함수를 만드시오.
function add(x, y) {
    result = x + y;
    console.log(result);
}
add(1, 2);

//두개의 변수에 값을 할당해 이 두개를 매개변수로 받아 더한 값을 출력하는 함수 'add'를 만드시오.
function add(a, b) {
  result = a + b;
  console.log(result);
}
add(3, 5);

// 다른버전
function add(x, y) {
    result = x + y;
    console.log(result);
}

let a = 3;
let b = 5;

add(a, b);


// Q5. 철수는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌다. 변수 age(나이)가 주어질 때, 2023을 기준으로 출생 연도를 출력하는 함수 ‘year’를 만드시오.
let age = 40;
function year(age) {
  let BirthYear = 2023 - age;
  console.log(BirthYear);
}
year(age);

//다른버전
function year(age) {
    let result = 2024 - age;
    console.log(result);
}
let age = 40;

year(age);

// Q6. 두 개의 매개변수가 주어질 때, 두 매개변수 중 더 큰 숫자를 출력하는 함수 ‘max’를만드시오. (단, if문을 활용)
function max(a, b) {
    if (a > b) {
        console.log(a);
    }   else {
        console.log(b);
    }
}
max(3, 5);

//다른버전
function max(num1, num2) {
    if(num1 > num2) {
        console.log(num1);
    }   else {
        console.log(num2);
    }
}
let x = 7;
let y = 3;

solution(x, y);

// Q7. 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 정수로 출력하는 함수 ‘solution’을 만드시오. (단, 문자형 데이터를 파라미터로 전달해주면 정수형으로변환하는 parseInt()를 활용)
function solution(num1, num2) {
    let quotient = parseInt(num1 / num2);   //몫 함수(quotient) 사용
    console.log(quotient);
  }
solution("20", "3");

//다른 버전
function solution(num1, num2) {
    let result = parseInt(num1 / num2);
    console.log(result);
}
let x = 7;
let y = 3;

solution(x, y);

//Q8. 정수 n이 주어질 때, n 이하의 양수를 모두 더한 값을 출력하는 함수 ‘sum’을 만드시오. (단, for문 활용)
function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    console.log(total);
  }
  
  sum(10);

//다른 버전
function sum(n) {
    let count = 0;  //n이하의 양수를 모두 더한 값을 대입할 변수
    for(let i=1; i<=n; i+=1){
        count += i;
    }
    console.log(count);
}
let n = 10;
sum(n);

//Q9. 정수 n이 주어질 때, n 이하의 짝수를 모두 더한 값을 출력하는 함수 'solution'을 만드시오. (단, for문 활용)
function solution(n) {
    let total = 0;
    for (let i = 2; i <= n; i += 2) {
      total += i;
    }
    console.log(total);
  }
  
  solution(10);

//Q10. 5부터 7까지의 구구단을 출력하는 함수 'gugudan'을 만드시오. (단, 중첩 for문을 활용)
function gugudan() {
    for (let i = 5; i <= 7; i++) {
      console.log(`${i}단`);
      for (let j = 1; j <= 9; j++) {
        console.log(`${i} X ${j} = ${i * j}`);
      }
      console.log(`${i}단`);
    }
  }
  gugudan();

//다른 버전
function gugudan() {
    for(let a=5; a<=7; a+=1) {
        for(let b=1; b<=9; b+=1) {
            result = a * b;
            console.log('${a} * ${b} = ${result}');
        }
    }
}
gugudan();

