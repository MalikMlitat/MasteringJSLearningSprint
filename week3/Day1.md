
# Summary of Day1

## Introduction
## Types
Primitive Types:
* like: Undefined, Null, boolean, string...etc.
* Every thing in java is an object <-- not 100% correct, e.g.: False
* _typeof var_; gives the type of var as string back
* **BigInt**: integer which can grow infinitely large
* **undefined**: a variable exists but no value
* **undeclared**: never been created in any scope
* uninitialized (ES6): variables which are uninitialized
### Abstract Operations or Coercion
* **ToPrimitive**: tries first **valueOf** and then **toString**

```js
var numStudents = 42
console.log('There are ${numStudents} students')
```

## DELIVERABLE


## Question 1:

Write a function called `convertStringToNumber` that converts a string to a
number using the unary plus operator. 

If the input is not a string, return an object of the input's value and type.

```javascript
function convertStringToNumber(input) {
  //write your own code here
}
```

Solution: 
```javascript
function convertStringToNumber(input) {
  if (typeof input === 'string') {
    return +input; // Using unary plus op
  } else {
    return {
      value: input,
      type: typeof input
    };
  }
}

```

## Question 2:

Write a function called `checkNaN` that takes a single argument and returns
`true` if the argument is `NaN` and `false` otherwise. 

```javascript
const checkNaN = (value) => {
  //write your own code here
}
```

Solution:

```javascript
const checkNaN = (value) => {
  return isNaN(value);
}
```

## Question 3:

Write a function called `isEmptyValue` that checks if a given input is an empty value (undefined,
null, or empty string). 

```javascript
function isEmptyValue(value) {
  //write your own code here
}
```

Solution:

```javascript
function isEmptyValue(value) {
  return value === undefined || value === null || value === '';
}
```


## Question 4:

Write a function called `compareObjects` that takes 2 arguments of type
`"object"` and compares them. If both arguments are equal, return `true`. If
not, return `false`.

If either argument is not of type `"object"`, the function should return an
array of the arguments. 

```javascript
function compareObjects(input1, input2) {
  //write your own code here
}
```

Solution:

```javascript
function compareObjects(input1, input2) {
  if (typeof input1 !== 'object' || typeof input2 !== 'object') {
    return [input1, input2];
  }
```

## Question 5:

Write a function called `complexCoercion` that takes a single argument and
checks if its type is primitive, and if so returns a coerced value according to
the rules below.

coercion rules: 
- if input is primive and:
  - if input is a number, convert to string and then return a boolean. 
  - if input is a string, return a boolean.
  - if input is `null` or `undefined`, return `false`.

If input is not a primitive type, return the argument.

```javascript
const complexCoercion = (input) => {
  //write your own code here
}
```

Solution:
```javascript
const complexCoercion = (input) => {
  if (typeof input !== 'object') {
    if (typeof input === 'number') {
      return Boolean(String(input)); // number to string to boolean
    }
    if (typeof input === 'string') {
      return Boolean(input); // string to boolean
    }
    if (input === null || input === undefined) {
      return false;
    }
  }

  return input; // for non-primitive types return input
}

```
