let grade = "I";

switch(grade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did goo!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed... barely!");
        break;
    case "F":
        console.log("You Failed!");
        break;
    default:
        console.log(grade, "is not a letter grade!");
}