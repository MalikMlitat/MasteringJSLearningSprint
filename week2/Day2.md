
# Summary of Day2

## Closure
Closure is a JS concept that allows a function to access variables that were declared in the enclosing function scope, 
even after the enclosing function has finished executing. This can be used to create powerful pro-level 
functions like ‘once’ and ‘memoize’.

It allows to create self-contained modules that encapsulate their own state and logic !!!

## DELIVERABLE

### Question 1: Functions and Callbacks
```js
function createCounter(start) {
  let counter = start;

  return function() {
    counter++;
    return counter;
  };
}
```
Usage example:
```js
const counter = createCounter(1);

console.log(counter()); // 2
console.log(counter()); // 3
```
### Question 2: Call Stack and Recursion
```js
function sumRange(start, end) {
  if (start > end) { // the termination condition
    return 0;
  } else {
    return start + sumRange(start + 1, end);
  }
}
```

Usage example:

The call stack is the stack of functions that are currently being executed. When the sumRange function is called, 
it is pushed onto the call stack. When the sumRange function returns, it is popped off the call stack:

```js
const sum = sumRange(1, 10);

console.log(sum); // 55

//sumRange(1, 10)
//sumRange(2, 10)
//sumRange(3, 10)
//...
//sumRange(10, 10)
```
