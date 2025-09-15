
 test('adds 14 + 9 to equal 23', () => {
     let total = sum(14, 9);
          expect(total).toBe(23);
 });


const { sum } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js');


test("One euro should be 1.07 dollars", function() {
 expect(fromEuroToDollar(3.5)).toBe(3.745);
 })

test("One JPY should be EUR * 156.5", function() {
  expect(fromDollarToYen(1.07)).toBe(167.455);
})

 test("One GBP should be  EUR * 0.87", function() {
     expect(fromYenToPound(156.5)).toBe(136.155);
 });



