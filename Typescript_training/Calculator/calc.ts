let num1:(number|bigint)=parseInt(prompt("Enter number 1:"))
let operator=prompt("enter operator +,-,*,/:")
let num2:(number|bigint)=parseInt(prompt("Enter number 2:"))
let num3:(number|bigint);

switch(operator){
    case "+":
        num3=num1+num2
        console.log(`${num1}+${num2}=${num3}`)
        break;
    case "-":
        num3=num1-num2
        console.log(`${num1}-${num2}=${num3}`)
        break;
    case "*":
        num3=num1*num2
        console.log(`${num1}*${num2}=${num3}`)
        break;
    case "/":
        num3=num1/num2
        console.log(`${num1}/${num2}=${num3}`)
        break;
    default:
        console.log("Something Seems Wrong ")
        break
}

console.log("This is your result")