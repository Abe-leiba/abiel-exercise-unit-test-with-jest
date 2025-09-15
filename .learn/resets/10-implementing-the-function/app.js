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







// const oneEuroIs =EUR (Euro) = 1.07 USD (US Dollar)
 const fromDollarToYen = (USD) => {
   const JPY = EUR * 156.5
     return JPY
}
const fromEuroToDollar = (EUR) =>{
    return EUR * 1.07
}
const fromYenToPound = (JPY) =>{
      const GBP = (JPY / 156.5) * 0.87
    return GBP
    
    
}
// console.log(fromEuroToDollar(3.5,1.07))
module.exports =  {sum, fromEuroToDollar, fromYenToPound, fromDollarToYen};



