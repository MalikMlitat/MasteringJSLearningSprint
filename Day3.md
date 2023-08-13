

# Summary of Day3


## Arrays

    Arrays are a way to store multiple values in a single variable.
    Arrays can be created using the array literal syntax, or the Array constructor.
    Elements in an array can be accessed using their index.
    Arrays can be iterated over using a for loop or a for...of loop.
    Arrays can be used to store a variety of data types, including strings, numbers, and objects.
## (Im)mutable
Mutable data is changeable data, contrary to immutable data.
## Objects
Objects have attributes which can be accessed by the dot notation (".")  or brackets notation (obj[name])
# DELIVERABLE

# Copy Array Items Using slice()
```javascript
function forecast(arr) {
  // Only change code below this line

  return arr.slice(2,4);
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```
# Combine Arrays with the Spread Operator	
```javascript
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());
```
# Profile Lookup	
```javascript
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let result = 'No such contact'
  for (const contact of contacts)
  {
    if (name == contact.firstName)
    {
      if (contact.hasOwnProperty(prop))
      {
        result = contact[prop]
      }
      else
      {
        result = 'No such property'
      }
      break
    }
 
 } // end for
 return result

}

lookUpProfile("Akira", "likes");
```
# Write Reusable JavaScript with Functions	
```javascript
function reusableFunction()
{
  console.log("Hi World")
}
reusableFunction()
```
# Understanding Undefined Value returned from a Function
```javascript
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive()
{
  sum += 5
}
// Only change code above this line

addThree();
addFive();
```
# Return a Value from a Function with Return
```javascript
function timesFive(number)
{
  return 5*number
}
```