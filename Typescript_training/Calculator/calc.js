var num1 = parseInt(prompt("Enter number 1:"));
var operator = prompt("enter operator +,-,*,/:");
var num2 = parseInt(prompt("Enter number 2:"));
var num3;
switch (operator) {
    case "+":
        num3 = num1 + num2;
        console.log("".concat(num1, "+").concat(num2, "=").concat(num3));
        break;
    case "-":
        num3 = num1 - num2;
        console.log("".concat(num1, "-").concat(num2, "=").concat(num3));
        break;
    case "*":
        num3 = num1 * num2;
        console.log("".concat(num1, "*").concat(num2, "=").concat(num3));
        break;
    case "/":
        num3 = num1 / num2;
        console.log("".concat(num1, "/").concat(num2, "=").concat(num3));
        break;
    default:
        console.log("Something Seems Wrong ");
        break;
}
console.log("This is your result");
