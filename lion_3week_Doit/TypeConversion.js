// // prompt는 사용자에게 값을 받아온다.
// let age = window.prompt("How old are you?");

// // typeof 변수 => 변수의 type은 무엇인가요?
// // prompt를 이용해서 받아온 값의 type을 console.log로 출력합니다!
// // string로 log값이 출력
// console.log(typeof age);

// // 현재 age는 string type이다.
// age = age + 1;
// console.log(age);

// // 나는 22이고 number을 입력했는데 string으로 출력됨 -> prompt로 받아온 값은
// // 항상 string으로 변환시킵니다.


// let age2 = window.prompt("How old are you222?");
// //사용자에게 받아온 age라는 값을 number로 바꿔준다.
// age2 = Number(age2);

// // number로 log값이 출력
// console.log(typeof age2);

// // 현재 age2는 number type
// age2 = age2 + 1;
// console.log(typeof age2);


// // 이어 출력하기 ver1 -> 쌍따옴포를 이용해서 출력
// console.log("첫번 째 문장" + "두번 째 문장" + age + "세번 째 문장");
// // 이어 출력하기 ver2 -> 쌍따옴표를 이용해서 사용하는 것이 아니라, '${}를 활용하여
// // 편리하게 출력할 수 있다.
// console.log('첫번 째 문장 ${age} 두번 째 문장 세번 째 문장');

// // ver2의 방식을 자주 사용한다.

// age = Number(age);
// console.log(typeof age);

// age += 1;
// console.log("Happy Birthday! You are", age, "years old");
// //Happy Birthday! You are 21 years old

// // 사용자에게 입력받은 값은 무조건 string으로 출력된다.
// // *를 하게 되면 여러분들이 아는 덧셈 연산이 되는게 아니라 string이기 때문에 이어붙이기가 된다.

