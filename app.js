// We declare the function with the exact name "fromEuroToDollar"
// const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    // let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    // return valueInDollar;
// }
const sum = (a,b) => {
    return a + b
 }

console.log(sum(7,3))





// let oneEuroIs = {
    // "JPY": 156.5, // japan yen
    // "USD": 1.07, // us dollar
    // "GBP": 0.87, // british pound
// }

// const oneEuroIs =EUR (Euro) = 1.07 USD (US Dollar)
 const DollarToYen = (USD) => {
    // const EUR = USD / 1.07
    const JPY = USD * 156.5
    return JPY
}
const fromEuroToDollar = (EUR) =>{
    return EUR * 1.07
}
const YenToPound = (JPY) =>{
     
    const GBP = JPY * 0.87
    return GBP
    
     0.87 
}
// console.log(fromEuroToDollar(3.5,1.07))
module.exports =  {sum, fromEuroToDollar, YenToPound, DollarToYen};
