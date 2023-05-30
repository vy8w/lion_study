let userName = "Pyo jeongin";

console.log(userName.length);   // 11

//charAt()
console.log(userName.charAt(0));    // p
console.log(userName.charAt(3));    // (공백)
console.log(userName.charAt(4));    // j

console.log(userName.indexOf("e")); // 5
console.log(userName.indexOf(" "));
console.log(userName.lastindexOf("e"));

console.log(userName.toUpperCase());    // -> 대문자
console.log(userName.toLowerCase());    // -> 소문자


// trim() -> 중간공백을 제외하고 앞이나 뒤의 공백을 제거해줌

//slice()
let fullname = " Pyo jeongin ";
let firstName;
let lastName;

// 인덱스 0번부터 ~ 공백 "전"까지를 firstName에 넣겠다.
firstName = fullname.slice(0, fullname.indexOf(' '));
console.log('fistName : ' + firstName);

// 시작 점을 주고 종료지점을 안 줌 -> 시작점부터 끝까지 넣겠다.
// indexof('') + 1 -> 공백까지 포함해서 lastName을 넣겠다.
lastName = fullname.slice(fullname.indexOf('  ') + 1);
console.log('lastName : ' + lastName);


// 음수 공부 많이 안해도 됨
let ttest = ' pyo jeongin '
