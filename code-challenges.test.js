// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("capitalName", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {

    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
     expect(capitalName(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  
   })
   })

// Good Fail
// ReferenceError: capitalName is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Inputs: takes in an array
// Outputs: returns an array of only the REMAINDERS of the numbers when divided by 3.r


const capitalName = (array) => {
  return 
  // Use the map function to iterate over the array 
  // Use dot notation 
  // object.name
  // use toUpperCase (Capitalize names)
  
}



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remaindersThree", () => {
  it("Returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
 
  expect(remaindersThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect(remaindersThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  
   })
   })

// Good Fail
// ReferenceError: remaindersThree is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// b) Create the function that makes the test pass.

// Inputs: takes in an array
// Outputs: returns an array of only the REMAINDERS of the numbers when divided by 3.r


const remaindersThree = (array) => {
  return 
  // Use the filter function to iterate over the array and determine if it is a number
  // Use conditional statement - if a number
  // Use modulo operator to find remainders of numbers divdedby three 
  // return those numbers
  
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("numbersCubed", () => {
  it("returns the sum of all the numbers cubed.", () => {
    
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
 
  expect(numbersCubed(cubeAndSum1)).toEqual(99)
  expect(numbersCubed(cubeAndSum2)).toEqual(1125)
  
   })
   })

// Good Fail
// ReferenceError: numbersCubed is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total



// b) Create the function that makes the test pass.

// inputs: takes in an array
// outputs: 
const numbersCubed = (array) => {
  return 
  // use for loop to iterate over the array
  // index = 0, index<array.length, i++
  // use the exponent operator ** 3
  // create a variable called newNumber
  // use addition assignment newNumber += array
  
  
}