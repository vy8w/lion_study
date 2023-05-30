// // 자동으로 로또 번호를 만드는 코드이다.

// // lottonumbers안에 6개 수를 넣을 수 있게 공간을 만들었다.
// var lottonumbers = [];

// // while문을 사용하여 로또번호가 6보다 작을 때까지 반복한다.
// while (lottonumbers.length < 6) {
//   var number = Math.floor(Math.random() * 45) + 1; // Math.floor를 사용해서 소수점 이하는 버리도록 한다.
  
//   if (!lottonumbers.includes(number)) {
//     lottonumbers.push(number);
//   }
// }

var weather = prompt("현재 날씨를 입력하세요 (맑음, 흐림, 비, 눈):");

switch (weather) {
  case "맑음":
    console.log("오늘은 편안한 옷과 바지를 입으세요.");
    break;
  case "흐림":
    console.log("오늘은 긴옷과 긴바지를 입으세요.");
    break;
  case "비":
    console.log("오늘은 우비와 장화를 신으세요.");
    break;
  case "눈":
    console.log("오늘은 패딩과 장갑을 끼세요.");
    break;
  default:
    console.log("날씨 정보가 올바르지 않습니다.");
    break;
}
