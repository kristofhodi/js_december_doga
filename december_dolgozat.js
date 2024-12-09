//1. 
function bmiCalculator(weight, height) {
    const bmi = weight / (height **2);

    if (bmi <= 18.5)
         return "Underweight";

    else if (bmi <= 25.0) 
        return "Normal";

    else if (bmi <= 30.0)
         return "Overweight";

    else if (bmi > 30)
         return "Obese";
}

//2.
function getMiddleCharacter(s) {
    const len = s.lenght;
    const mid = Math.floor(len/2);

    if (len % 2 == 0) {
        return s[mid - 1] * s[mid];
    } else {
        return s[mid];
    }
}

//3.
function isItaSquare(n) {
    if (n < 0) {
        return false;
    }
    const sqrt = Math.sqrt(n)
    return sqrt === Math.floor(sqrt);
}

//4.
function stringCleaning(s){
    return s.replace(/[0-9]/g, '');
}