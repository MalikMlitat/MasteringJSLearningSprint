
# Summary of Day2


## Values & Data Types
different data types in JavaScript, including:

    Numbers: Numbers can be integers (whole numbers) or floats (decimal numbers).
    Strings: Strings are sequences of characters.
    Booleans: Booleans can have two values: true or false.
    Null: Null is a special value that represents the absence of a value.
    Undefined: Undefined is a special value that represents a value that has not been assigned yet.

I learned also how to use the typeof operator to determine the data type of a value.

Here are some key takeaways from the video:

    Values are the things in JavaScript.
    Data types are the different types of values that can be stored in JavaScript.
    There are five basic data types in JavaScript: numbers, strings, booleans, null, and undefined.
    The typeof operator can be used to determine the data type of a value.
    Variables are names that we can use to refer to values.

## Operators

Arithmetic expressions:
```
2 + 2 is an arithmetic expression that evaluates to 4.
10 * 5 - 3 is an arithmetic expression that evaluates to 47.
(2 + 2) * 5 is an arithmetic expression that evaluates to 20.
```
Logical expressions:
```
true && false is a logical expression that evaluates to false.
!(true || false) is a logical expression that evaluates to true.
(2 > 1) && (3 < 4) is a logical expression that evaluates to true.
```
Comparison expressions:
```
2 == 2 is a comparison expression that evaluates to true.
10 != 5 is a comparison expression that evaluates to true.
"hello" === "hello" is a comparison expression that evaluates to true.
```

The order of operations in JavaScript is **PEMDAS**: **P**arentheses, **E**xponents, **M**ultiplication and **D**ivision, 
**A**ddition and **S**ubtraction. This means that expressions inside parentheses are evaluated first, followed by exponents...etc.

Here is an example of how the order of operations works:
```js
const expression = (2 + 2) * 5 - 3;

// The expression inside the parentheses is evaluated first, so 2 + 2 = 4.
// Then, the multiplication and division are evaluated, so 4 * 5 = 20.
// Finally, the addition and subtraction are evaluated, so 20 - 3 = 17.

console.log(expression); // 17
```
## Expressions

Expressions in JavaScript are valid sets of literals, variables, and operators that resolve to a single value.
There are three main types of expressions: _arithmetic, logical, and comparison._

**Arithmetic expressions** use arithmetic operators to perform mathematical operations.

**Logical expressions** use logical operators to evaluate the truth value of expressions.

**Comparison expressions** use comparison operators to compare two values and return a Boolean value.

## DELIEVERABLE

### QUESTION #1

Consider the following JavaScript code:

```javascript
let a = 0;
let b = "0";
let c = false;
let d = "false";

console.log(a == b); --> true, == compares values, b is casted to 0 which is equals to a
console.log(b === c); --> false, type comparassion string != bool
console.log(!!d); --> true, The !! operator in JavaScript is a double bang operator,
which is used to convert its operand to a Boolean value. If the operand is truthy, the double bang operator will return true, and if the operand is falsy, the double bang operator will return false.
```
-------------------------------------------------------------------

### QUESTION #2:


Consider the following JavaScript expression:

```javascript
console.log(4 + 5 * "7");
```

What will be the output of this expression? **_You MUST explain the steps of evaluation taken by JS_**.

Here is a breakdown of the expression step by step:

1. 4 + 5 * "7"
2. 4 + 35
3. 39

-------------------------------------------------------------------

### QUESTION #3:

Evaluate the following expression:

```javascript
let result = 5 + 2 * 3 - 1;
```

What will be the output of this expression? **_You MUST explain the steps of evaluation taken by JS_**.

Here is a breakdown of the expression step by step:
1. 5 + 2 * 3 - 1
2. (5 + 6) - 1
3. 11 - 1
4. 10
-------------------------------------------------------------------

### QUESTION #4:

Consider the following code:

```javascript
let x = 10;
let y = '10';
console.log(x == y); -->  true, x = y = 10
console.log(x === y); --> false, types are not equal
```
What will be the output of each `console.log` statement? **_You MUST explain WHY_**.

-------------------------------------------------------------------

### QUESTION #5:

Given the code below:

```javascript
let num = "15";
let isPositive = true;
let result = (num > 10 && isPositive) || num < 0;
console.log(result);
```

What is the value of result? **_You MUST explain the steps of evaluation taken by JS_**

Here is a breakdown of the expression step by step:
1. num > 10 --> true
2. true && isPositive = true