/*
Problem: Minimizing Loss
Rajeev has a chart of distinct projected prices for a house over the next several years. He must buy the house in one year and sell it in another, and he must do so at a loss. He wants to minimize her financial loss.
Eg:
price = [20, 15, 7, 2, 13]
His minimum loss is incurred by purchasing in year 2 at price[1] and selling in year 5 at price[4]
Write code that takes as input the number of years and prices for those years and outputs the year to buy and sell in with the loss value
*/

let arr = [20, 15, 7, 2, 13]

function minimizeLoss(arr) {
    let min = Number.MAX_VALUE;
    let buyYear = 0;
    let sellYear = 0;

    for(let i = 0; i<arr.length; i++) {
       for(let j = i + 1; j<arr.length; j++) {
        if(arr[i] > arr[j]) {
            let diff = arr[i] - arr[j]
            if(diff < min) {
                min = diff;
                buyYear = i + 1;
                sellYear = j + 1;
            }
        } else {
            continue
        }
       } 
    } 
    return { min, sellYear, buyYear };
}

let result = minimizeLoss(arr);

console.log(`Buy in year ${result.buyYear}, sell in year ${result.sellYear}, minimum loss: ${result.min}`);


