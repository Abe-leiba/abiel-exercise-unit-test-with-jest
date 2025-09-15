

const sum = (a,b) => {
    return a + b
}
 

 let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


  const fromDollarToYen = (USD) => {
 const JPY = USD * 156.5;
    return JPY;
}
const fromEuroToDollar = (EUR) =>{
     return EUR * 1.07;
}
const fromYenToPound = (JPY) =>{
const GBP = JPY * 0.87;
    return GBP;
}

module.exports =  {sum, fromEuroToDollar, fromYenToPound, fromDollarToYen};