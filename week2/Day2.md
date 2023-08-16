
# Summary of Day2

## Closure
Closure is a JS concept that allows a function to access variables that were declared in the enclosing function scope, 
even after the enclosing function has finished executing. This can be used to create powerful pro-level 
functions like ‘once’ and ‘memoize’.

It allows to create self-contained modules that encapsulate their own state and logic !!!

## Async JS (part 1)
- Promises - the most significant ES6 feature (ECMAScript 6)
- Asynchronicity - the feature that makes dynamic web applications possible

JavaScript engine has 3 main parts:
- Thread of execution
- Memory/variable environment
- Call stack

## DELIVERABLE

### Question 1:

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
### Question 2:

```js
function calculateAverage(nums) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const length = nums.length;

  return function() {
    return sum / length;
  };
}
```
Example of usage :

```js
const average = calculateAverage([1, 2, 3, 4, 5]);

console.log(average()); // 3
```
### Question 3:

```js
function powerOf(base) {
  const cache = new Map();

  // The returned function is a closure.
  // it can access the base and cache variables
  // even after the powerOf function has finished executing.
  return function(exp) {
    if (cache.has(exp)) {
      return cache.get(exp);
    } else {
      const result = Math.pow(base, exp);
      cache.set(exp, result);
      return result;
    }
  };
}


```

Example of usage :

```js
const powerOf2 = powerOf(2);

console.log(powerOf2(3)); // 8
console.log(powerOf2(4)); // 16
```

### Question 4:

```js
function compose(...functions) {
  return function(input) {
    let result = input;
    
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    
    return result;
  };
}

```
Example of usage :
```js
function addTwo(x) {
  return x + 2;
}

function multiplyByThree(x) {
  return x * 3;
}

function subtractTen(x) {
  return x - 10;
}

const composedFunction = compose(subtractTen, multiplyByThree, addTwo);

const input = 5;
const output = composedFunction(input);
// It should first add 2 = 7
// then multiply by 3 = 21
// and subtract 10 = 11
console.log(output); // Output should be 11
```