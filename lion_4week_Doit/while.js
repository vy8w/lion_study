let level = 50;
let point = 0;

while(level >= 30) {
    console.log("그의 레벨은30 이상이다.");
    ++point;
    console.log('획득한 토탈 포인트 : %{point}');

    if(level >= 50) {
        console.log("그의 레벨은 50이상이다.");
        ++point;
        console.log('횐득한 토탈 포인드: ${point}');
    
    }

    else if (lecel >= 80) {
        console.log("그의 레벨은 80이상이다.");
        ++point;
        console.log('획득한 토탈 포인드: ${point}');
    }
    
    else {
        console.log("그의 레벨은 30이상 50미만이다.");
    }

    break;
}