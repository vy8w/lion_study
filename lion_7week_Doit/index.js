//array : 순서가있는 리스트 -> 인덱스 0번부터 시작, 대괄호 사용
//인덱스 :고유번호
//array : 다양한 타입을 넣을 수 있음
//메소드 1. push: 배열 끝에 요소 추가, pop : 배열 끝에 요소 제거 -> 중간 값을 추가, 제거 할 수 없음
        //unshift : 배열 앞에 요소 추가, shift : 배열 앞에 요소 제거 (맨 앞임) -> 중간 값(특정 요소)을 추가, 제거 할 수 없음
        //slice(n,m) : n번부터 (m-1)까지 반환 (n,m을 둘 다 넣을 필요 없이 n만 넣어서 출력할 수 있음)

        // var examScores = [
        //     { subject: "국어", score: 33 },
        //     { subject: "영어", score: 33 },
        //     { subject: "수학", score: 54 },
        //     { subject: "과학", score: 98 }
        //   ];

        // console.log(examScores[3].score);

//object : 키와 값의 형태로 이루어짐, 중괄호 사용
//접근방법 : 대괄호 사용 에) student["Korea"]

//object 추가설명
//key의 값에 쌍따옴표, 홀따옴표 모두 사용 가능
//사용할 경우, key의 값에 띄어쓰기를 할 수 있다.

let rapClass = {
학급: "rapClass",
학생: [
    { 이름: "승철", 생년월일: "1995-08-08", 나이: 29 },
    { 이름: "원우", 생년월일: "1996-07-17", 나이: 28 }
]
};
  
let vocalClass = {
학급: "vocalClass",
학생: [
    { 이름: "승관", 생년월일: "1998-01-16", 나이: 26 },
    { 이름: "도겸", 생년월일: "1997-02-18", 나이: 27 }
]
};
  
let danceClass = {
학급: "danceClass",
학생: [
    { 이름: "디노", 생년월일: "1999-02-11", 나이: 25 },
    { 이름: "호시", 생년월일: "1996-06-10", 나이: 28 }
]
};

console.log(rapClass.학생[1].생년월일);
console.log(vocalClass.학생[1].나이)
1998-02-18
let 버논생일 = window.prompt("버논의 생년월일을 입력하세요.");
let 버논나이 = window.prompt("버논의 나이를 입력하세요.");

rapClass.버논 = {
    생년월일: 버논생일,
    나이: 버논나이
}
console.log(rapClass.버논)

//1998-02-18 26

// let 버논 = [ "버논", 버논생일, parseInt(버논나이) ];
// rapClass.학생 = [rapClass.학생, 버논];
// console.log(rapClass);

//2-1 버논
버논생일 = window.prompt("버논의 생년월일을 입력하세요.");
버논나이 =window.prompt("버논의 나이를 입력하세요.");
console.log(typeof 버논나이); //string
버논나이 = parselnt(버논나이); //type string -> number
console.log(typeof 버논나이); //number

rapClass.버논= {생년월일: 버논나이, 나이: 버논나이};
console.log(버논생일, 버논나이);

//2-1 버논 다른방법
rapClass.버논 = {생년월일: '1998-02-18', 나이: 26}; //rapClass.버논.나이의 type은 number
console.log(rapClass.버논.생년월일, rapClass.버논.나이);

//2-2
console.log(rapClass.버논.생년월일 + ', ' + rapClass.버논.나이)