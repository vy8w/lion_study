let item = prompt("물건 이름을 입력");
let price;

switch(item) {
  case 'cola':
    price = 2000;
    console.log(`콜라는 ${price}원 입니다.`);
    break;
  case 'beer':
    price = 4000;
    console.log(`맥주는 ${price}원 입니다.`);
    break;
  case 'milk':
    price = 3000;
    console.log(`우유는 ${price}원 입니다.`);
    break;
  case 'coffee':
    price = 1000;
    console.log(`커피는 ${price}원 입니다.`);
    break;
  default:
    console.log(`${item}은(는) 팔지 않습니다.`);
}
// ==> console.log를 굳이 case마다 작성하지 않아도 됨 마지막에 한번만 아이템 이름과 가격을 쓰면 됨


//해설
// let product = window.prompt(
//   '구매할 상품을 입력하시오. cola는 2천원, beer는 4천원, milk는 3천원, coffee는 천원입니다.'
// );
// let price
// switch(product) {
//   case 'cola':
//     price = 2000;
//     break;
//   case 'beer':
//     price = 4000;
//     break;
//   case 'milk':
//     price = 3000;
//     break;
//   case 'coffee':
//     price = 1000;
//     console.log('$(product)는 $(price)원 입니다.');
//     break;
//   default:
//     console.log(`${product}은(는) 팔지 않습니다.`);
// }
