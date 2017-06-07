// 1.
// Without logging the values, list the value of `sports`
var sports = ['soccer', 'baseball'];
sports.push('football', 'swimming');
// A:
// sports = <(4["soccer", "baseball", "football", "swimming"]>



// 2.
// Using the `strings` array, write a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];
// A:

function longestString(array){
  var winner = "a";
  for(let x = 0; x < array.length; x++){
    var i = x;
    if(array[i].length > winner.length){
      winner = array[i];
      console.log(winner);
    }
  }
  return winner;
}


console.assert(longestString(strings) === 'collection', { "message": "longestString should return 'collection'" });


// Use the `numbers` array for questions 3 - 8.
var numbers = [18, 12, 4, 1, 9, 7, 11, 3, 101, 5, 6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:
function smallestNumber(array) {
    return Math.min.apply(Math, array);
};


console.assert(smallestNumber(numbers) === 1, { "message": "smallestNumber should return 1" });



// 4.

// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:

var numbers = [18,12,4,1,9,7,11,3,101,5,6];
numbers.reverse()


console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', { 'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"' });


// 5.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:
function sumArrayOfNumbers(array) {
var total = 0;
   for (i = 0; i < array.length; i++) {
   total += array[i];
   }
return total;
}

console.assert(sumArrayOfNumbers(numbers) === 177, { 'message': 'sumArrayOfNumbers should return 177' });


// 6.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:
var numbers = ["1" , "3" , "5" , "12" , "18" , "11" , "101"];
 
let over10 = []
for(let x = 0; x < numbers.length; x++) {
   if(numbers[x] > 10){
      console.log (numbers[x]);
   }
}

console.assert(numbersOver10(numbers).toString() === "12,18,11,101", { 'message': 'numbersOver10 should return "12,18,11,101"' });


// 7.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:

const numbers = [18,12,4,1,9,7,11,3,101,5,6];

function numbersOverX(array, n)  {
  let answer7 = [];
  for (let x = 0; x < array.length; x++){
    let i = x;
    if (array[i] > n) {
      answer7.push(array[i]);
    }
  }
  return answer7;
}


console.assert(numbersOverX(numbers, 15).toString() === "18,101", { 'message': 'numbersOverX should return "18,101"' });

// 8.
// Write a function `joinArrays()` that takes two arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var numbersTwo = [33, 56, 72, 2, 5, 66, 90, 21, 42];
// A:


console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', { 'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"' });


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD', 'JavaScript'],
    ['Tim', 'JavaScript'],
    ['Brit', 'Ruby'],
    ['Joe', 'iOS'],
    ['Dan', 'JavaScript'],
    ['Will', 'JavaScript'],
    ['Calvin', 'JavaScript'],
    ['James', 'Ruby']
];

var instructorNameDiscipline = instructors[5];
    instructorNameDiscipline = ['Will', 'JavaScript']

var instructorOne = instructors[4][0];
    instructorOne = 'Dan'

var instructorTwo = instructors[0][1];
    instructorTwo = 'JavaScript'

var instructorThree = instructors[2][0];



    instructorThree = 'Brit'
