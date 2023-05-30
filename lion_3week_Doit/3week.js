let students = 20;

students = students + 1;
console.log('students 1 더하기' + students);
// students는 20인데 1을 더했으니까 21

students = students - 1;
console.log('students 1 빼기' + students);
// students는 21인데 1을 뼀으니 20

students = students * 2;
console.log('students 2 곱하기' + students);
// students는 20인데 2곱했으니 40

students = students / 2;
console.log('students 2 나누기' + students);
// students는 40인데 2로 나눴으니 20


// % : 나머지 연산
let extra;
extra = students % 2;
console.log(extra);
// 나머지 연산자란
// 위의 코드를 해석하자면, 2로 나누고 나머지를 출력하라는 뜻

extra = students % 3;

// 축약형
// students = students + 1과 같은 의미
students += 1;
console.log(students);

// students = students - 1과 같은 의미
students -= 1;
console.log(students);

// students = students *2와 같은 의미
students *= 2;
console.log(students);

// students = students /2와 같은 의미
students /= 2;
console.log(students);



// log로 작성후 네모 모양의 log클릭
console.log()