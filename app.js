//const sum = (a,b) => {
   // return a + b
// }

//console.log(sum(7,3))

//module.exports = { sum };


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// const oneEuroIs =EUR (Euro) = 1.07 USD (US Dollar)
 const DollarToYen = (USD, JPY) => {
    return USD * JPY
}
const EurotoDollar = (EUR,USD) =>{
    return EUR * USD
}
const YenToPound = (YEN,GBP) =>{
    return YEN * GBP
}
