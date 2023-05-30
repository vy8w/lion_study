//1. 아래의 출력문을 보고 출력결과와 둘의 출력 차이를 서술하시오.

// let a = 789;
// console.log(“안녕하세요! 저는 ${a} 숫자를 좋아합니다.”);
// console.log(`안녕하세요! 저는 ${a} 숫자를 좋아합니다.`);

//첫번째문에서 따옴표를 사용하였다. 그래서 ${a}는 문자열 그대로 출렵값이 나온다. -> ${a}가 출력됨
//두번째문에서 백틱을 사용하였다. ${a}는 a값을 문자열로 전환하여 출력된다. a 변수인 789가 츌력됨

//2. 오류가 발생한다면 그 이유와 해당 위치 서술하고, const와 let의 가장 큰 차이점을 1가지 이상 서술하시오. 

// const A = 8;
// let b = 80;
// while(b >= 3) {
//     console.log(--b);
//     console.log(++A);
// }

//const와 let의 차이점은 재할당의 여부이다.
//const는 재할당 불가능, let은 재할당 가능
//const A = 8: 은 A 값은 8이 됨
//let b = 80; 은 b 값이 재할당 가능

//3. 변수 이름 규칙 내용을 정리하여 작성하시오.
//변수명에는 -(하이픈)이 올 수 없음
//변수명 첫 글자는 숫자가 올 수 없음 but 숫자로 끝나는 것은 가능함
//예약어(키워드)는 변수명으로 사용될 수 없음

//4. 지금까지 배운 내용을 토대로 문제 최소 3개를 만시오.
//비싼 물건의 가격을 찾아서 반환하는 문제

// const prices = [500, 1000, 8000, 12000, 4000];
// const maxPrice = findMaxPrice(prices);
// console.log(maxPrice);

//배열의 모든 요소를 더한 결과를 반환하는 문제
function sumArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }

console.log(sumArray([6, 7, 9, 10, 4])); // 36
console.log(sumArray([50, 70, 30])); // 150

//객체를 사용하여 주문 관리하는 코드
class Order {
    constructor(orderNumber, orderDate, product) {
      this.orderNumber = orderNumber; // 주문번호
      this.orderDate = orderDate; // 주문날짜
      this.product = product; // 주문 상품
    }
  
    getOrderNumber() {
      return this.orderNumber;
    }
  
    getOrderDate() {
      return this.orderDate;
    }
  
    getProduct() {
      return this.product;
    }
  
    updateOrder(orderNumber, orderDate) {
      this.orderNumber = orderNumber;
      this.orderDate = orderDate;
    }
  }

const order1 = new Order("20230015", "2023-05-22", "Apple Watch");
console.log(order1.getOrderNumber()); // "2023005"
console.log(order1.getOrderDate()); // "2023-05-22"
console.log(order1.getProduct()); // "Apple Watch"
  
order1.updateOrder("2023004", "2023-05-23");
  
console.log(order1.getOrderNumber()); // "2023004"
console.log(order1.getOrderDate()); // "2023-05-23"
console.log(order1.getProduct()); // "Apple Watch"


// 일상생활에서 사용하는 패턴 찾는 코드
function findPattern(str) {
    const phonePattern = /\b(\d{3}[-.]?\d{3,4}[-.]?\d{4})\b/;
    const phoneMatche = str.match(phonePattern);
    if (phoneMatche) {
      return "전화번호 패턴을 찾았습니다.";
    }
}
console.log(findPattern("전화번호는 010-1234-5678 입니다."));

//5. undefined와 null의 차이점을 서술하시오.
//undefined는 변수를 선언하고 값을 할당하지 않은 상태임 즉 자료형이 없는 상태임
//null은 변수를 선언하고 빈 값을 할당한 상태 즉 빈 객체임

