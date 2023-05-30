let age = 15;

if(age>=50) {
    //let age = 80; 80>50 ⭕
    //21 < 50 -> 출력 ❌
    console.log("당신은 성숙한 어른입니다.");
}
else if(age<0) {
    console.log("당신은 아직 안 태어났습니다.");
}
else if(age>=18){
    console.log("당신은 성인입니다.");
}
else{
    console.log("당신은 어린아이입니다.");
}

