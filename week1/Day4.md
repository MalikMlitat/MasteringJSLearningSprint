

# Summary of Day4


## Arrays

    Arrays are a way to store multiple values in a single variable.
    Arrays can be created using the array literal syntax, or the Array constructor.
    Elements in an array can be accessed using their index.
    Arrays can be iterated over using a for loop or a for...of loop.
    Arrays can be used to store a variety of data types, including strings, numbers, and objects.
# JS scoping: var vs let
var variables are mutable as let too, but not in blocks scope
# Event-listeners
Adds listeners to the DOM e.g.: click-listener
```javascript
document.addEventListener('click', ()) =>
{
    ...
})
```
# DELIVERABLE

# Global Scope and Functions	
```javascript
// Declare the myGlobal variable below this line
let myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
# Local Scope and Functions	
```javascript
function myLocalScope() {
  // Only change code below this line
  let myVar = 100
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
# Global vs. Local Scope in Functions	
```javascript
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let myOutfit = "sweater"
  let outerWear = myOutfit

  // Only change code above this line
  return outerWear;
}

myOutfit();
```
# Stand in Line	
```javascript
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  let firstElem = arr[0]
  arr.shift()
  return firstElem;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```