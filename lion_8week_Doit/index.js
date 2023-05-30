//고선진
//Object를 호출하는 방법 2가지를 서술하시오.
//1. new키워드를 사용하여 호출
//ex) const myObject = new Object();
//2. 객체 리터럴 사용 : 중괄호를 사용하여 객체를 만듦
//ex) const myObject = {};

//나민경
//아래의 값이 출력되는 for문을 작성하시오.
// 1 2
// 1 5
// 1 8
// 4 2
// 4 5
// 4 8
const numbers = [1, 4];
const values = [2, 5, 8];

for (const number of numbers) {
  for (const value of values) {
    console.log(number, value);
  }
}
//1. numbers, values 배열 선언
//2. numbers, values 배열을 for...of 반복문 사용하여 변수 number ,value에 할당함
//3. number, value 변수에 할당된 값을 출력함

//정지현
//선택자 id와 class의 차이점을 서술
//id는 고유하고 특정 요소를 식별하는데 사용됨, class는 여러 요소를 그룹화하고 스타일을 적용하거나 동시에 조작하는데 사용됨

//아래의 코드를 보고 출력값을 구하시오
let a = 3;
let b = 4;
let c = a++ + --b;
console.log(a, b, ++c); //4 3 7
// 1. a 선언 후 3
// 2. b 선언 후 4
// 3. c 선언 후 a++은 후위 연산자이므로 아직까지 3임 --b는 전위 연산자이므로 3임 더하면 6이 나옴
// 4. 출력하면 a는 3+1=4, b는 3, ++c는 6+1=7

//김하경
//이메일을 입력받고 ‘@’ 전까지만 출력하시오.
let email = 'puojeongin41@gmail.com';
let index = email.indexOf('@');
let name = email.substring(0, index);
console.log(name);
//1. email 변수 선언
//2. indexOf() 메서드 사용하여 '@'인덱스 찾음 -> index에 저장
//3. 0부터 index직전을 name 변수에 저장
//4. 출력하면 puojeongin41이 출력됨

//조혜현
// 아래의 array 내용을 모두 출력하는 for문을 작성하시오.
// (단, length를 사용하여야 한다.)
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
// 1. array 변수 선언함
// 2. i 를 0으로 초기화하고 i가 배열 길이보다 작을 때까지 반복, i는 1씩 증가
// 3. 출력하면 1씩 증가하도록 출력됨

//1부터 100까지의 숫자 중 7의 배수들만을 합하여 그 결과를 출력하는 프로그램을 짜고자 할 때, 아래의 빈칸을 채우시오.
let sum = 0;
for(let i = 0; i <= 100; i++) {
  if (i % 7 === 0) {
    sum += i;
  }
}
console.log(sum);

//사용자가 컴퓨터가 생각하고 있는 숫자를 맞추는 프로그램을 짜시오. (예> 컴퓨터가 생각한 값 = 10, 사용자가 prompt를 이용해 5를 입력 -> “UP” 출력)
//잘 모르겠습니다..

//허정윤
//Object를 이용해 학생 3명의 이름과 학점, 백분율을 작성하시고, 학점이 3.0 이상이고 백분율이 90이상인 학생만을 출력하시오
let students = [
  { name: '민아', grade: 4.2, percentage: 95 },
  { name: '나경', grade: 2.7, percentage: 80 },
  { name: '연주', grade: 3.9, percentage: 90 }
];

let highAchievers = students.filter(student => student.grade >= 3.0 && student.percentage >= 90);

highAchievers.forEach(student => {
  console.log(`${student.name}: 학점 = ${student.grade}, 백분율 = ${student.percentage}`);
});

//표정인
//Object를 이용해서 물건의 이름과 가격을 5개 입력하고, for문을 이용해서 가격이 가장 비싼 물건의 이름과 가격을 출력하시오.
let thing = {
  1: {
    name: "banana",
    price: 3600
  },
  2: {
    name: "apple",
    price: 1700
  },
  3: {
    name: "pencil",
    price: 500
  },
  4: {
    name: "door",
    price: 19000
  },
  5: {
    name: "candy",
    price: 150
  }
};

let i;
let obj;
let max_price;
let max_name;

for (i = 1; i < 1000; i++) {
  obj = thing[i];

  if (i == 1) {
    max_price = obj.price;
    max_name = obj.name;
  }

  if (i >= 2) {
    if (max_price < obj.price) {
      max_price = obj.price;
      max_name = obj.name;
    }
  }

  while (thing[i + 1] == undefined) {
    i = 1000;
    break;
  }
}

console.log(`가장 비싼 물건의 이름은 ${max_name}이고, 그 물건의 가격은 ${max_price}원 입니다.`);
//1. thing객체는 1부터 5까지 키를 가짐 속성은 name과 price
//2. i는 반복문에서 사용할 변수이기에 지정함
//3. obj는 반복된 속성의 값을 담는 변수
//4. 첫번째 for반복문 i가 1부터 999까지 증가하는 동안 실행됨
//5. 반복문 안에 obj변수에 thing[i]값을 할당함
//6. if문 i가 1일 때 max_price랑 max_name을 객체 값으로 설정함
//7. i가 2일 때 obj.price가 max_price보다 큰지 확인하고 크다면 max_price와 max_name을 현재 객체값으로 바꿈
//8. while문 thing[i+ 1]이 정의되지 않은 경우 i를 1000으로 설정하고 break를 만나면서 종료함
//9. 출력하면 가장 비싼 물건의 이름은 door이 나오고 그 물건의 가격은 19000원이 나옴