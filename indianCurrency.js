/*
Problem: Convert number into a comma separated Indian currency format
In Indian numbering system the terms used are different from what is used in the western numbering system. 
Terms like Lakh to represent one hundred thousand and Crore to represent 10 Million.
Write code that takes as input a floating point number and returns an indian number string representation with commas separating the digits.
Eg: 123456.7891 should return 1,23,456.7891
*/ 

function toIndianCurrency(num) {
    let ans = num.toLocaleString("en-in");
    return ans;
}

let result = toIndianCurrency(11123456.7891);
console.log(result);