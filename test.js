// const { sum } = require('./app.js');

// test('adds 14 + 9 to equal 23', () => {

      // let total = sum(14, 9);

        // expect(total).toBe(23);
// });




// euro to dollar test is done, missing the other 2 and 2 more const and 2 more expect.
test("One euro should be 1.07 dollars", function() {
  const { fromEuroToDollar } = require('./app.js');
 expect(fromEuroToDollar(3.5)).toBe(3.745);
 })

test("One JPY should be EUR * 156.5", function() {
      const { DollarToYen } = require('./app.js');
  expect(DollarToYen(1.07)).toBe(167.455);
})

 test("One GBP should be  EUR * 0.87", function() {
      const { YenToPound } = require('./app.js');
     expect(YenToPound(156.5)).toBe(136.155);
 });

    // Import the function from app.js
    
  
     


    // Use the function like its supposed to be used
    // const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    // const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
    
    
      // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)

