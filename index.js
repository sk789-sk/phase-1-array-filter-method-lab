// Code your solution here
const users = [
  {
    firstName: "Niky",
    lastName: "Morgan",
    favoriteColor: "Blue",
    favoriteAnimal: "Jaguar",
  },
  {
    firstName: "Tracy",
    lastName: "Lum",
    favoriteColor: "Yellow",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Josh",
    lastName: "Rowley",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Kate",
    lastName: "Travers",
    favoriteColor: "Red",
    favoriteAnimal: "Jaguar",
  },
  {
    firstName: "Avidor",
    lastName: "Turkewitz",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Drew",
    lastName: "Price",
    favoriteColor: "Yellow",
    favoriteAnimal: "Elephant",
  },
];




function findMatching(array,string) { //function should take and array of driver names and a string as an arguement and return a list of matching drivers 
  let outArray =[]                  // Without Filter, but just iterate over the array and compare lowercase values of the string and array and see if they match. Can put the loop into find and rename as a function
  for (let val in array){           // is there a way to make it so val isnt the index, but just the actual val directly
    if (array[val].toLowerCase() === string.toLowerCase()){
      outArray.push(array[val])
    }
  }
  return outArray
}



function fuzzyMatch(array,string) { //function takes and array of driver names and a string as an arguement and returns all drivers whose names begin with the provided letters
  let outArray = []                 // not sure if it is case independent, but we have a string of characters. Once again we will iterate over the array and this time compare the first n characters in each value in the array with the string of length n   
  for (let val in array){
    if (array[val].slice(0,string.length) === string) {
      outArray.push(array[val])
    }
  }
  return outArray
}

function matchName(array,string){ //function takes an array of driver objects and a string. Each driver object has a name and hometown. function return each element whose name property matches the string
  let outArray = []
  for (let val in array){
    if (array[val].name === string){
      outArray.push(array[val])
    }
  }
  return outArray
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

