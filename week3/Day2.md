
# Summary of Day2

## Philosophy of Coercion
# Equality
- == and === are equal when the type matches.
- == allow coercion when the types are different
- === disallow coercion when the types are the same
- == prefers numeric comparison
- null or undefined: equals
- non-primitive: ToPrimitive

# Static Typing
**Benefits**:
1. Catch type related mistakes
2. Communicate type intent
3. Provide IDE feedback
4. 
## DELIVERABLE
### [QUESTION #1](https://github.com/orjwan-alrajaby/gsg-QA-Nablus-training-2023/blob/main/learning-sprint-1/week3%20-%20deep-javascript-foundations-v3/day%202/tasks.md#question-1)

```javascript
const sayHelloWorld = new Promise((resolve, reject) => {
  resolve("Hello world!");
});

const checkBoolean = (boolean) => new Promise((resolve, reject) => {
  if (boolean) {
    resolve(boolean);
  } else {
    reject(`Input is false :(`);
  }
});

const returnObj = new Promise((resolve, reject) => {
  resolve({
    x: "meow",
    y: 45,
  });
});

const promisesArray = [sayHelloWorld, checkBoolean, returnObj];

const convertToObj = async (array) => {
  const obj = {};
  
  for (let i = 0; i < array.length; i++) {
    try {
      obj[`promise${i + 1}`] = await array[i];
    } catch (error) {
      obj[`promise${i + 1}`] = { error: error.toString() };
    }
  }
  
  return obj;
};

(async () => {
  const convertedObj = await convertToObj(promisesArray);
  console.log(convertedObj);
})();

```

### [QUESTION #2]
```javascript
function testScope1() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a);
  console.log(b);
  console.log(c);
}

testScope1();

```
C) `1`, `ReferenceError`, `ReferenceError` 

a is declared with var inside the if block and is accessible outside it. It's assigned 1.

b and c are declared with let and const inside the if block, making them block-scoped. They are not accessible outside the block, resulting in ReferenceError when accessed.

### QUESTION #3:

What will be the output of the following code snippet? Pick the right choice
then **justify your answer with an explanation**.

```javascript
function testScope2() {
  console.log(a);
  console.log(b);
  console.log(c);
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
}

testScope2();

```

Solution: C) undefined, undefined, ReferenceError

Explanation:
    a is declared with var, so it's hoisted but uninitialized, leading to undefined.
    b and c are declared using let and const, respectively. They are hoisted but remain uninitialized, causing a ReferenceError when accessed.
    An error occurs when trying to access b in the console.log.



### QUESTION #4:

What will be the output of the following code snippet? Pick the right choice
then **justify your answer with an explanation**.

```javascript

function testScope3() {
  var a = 36;
  let b = 100;
  const c = 45;

  console.log([a, b, c]);

  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;

    console.log([a, b, c]);
  }

  console.log([a, b, c]);
}

testScope3();

```

Solution: 
C) `[ 36, 100, 45 ]` | `[ 1, 2, 3 ]` | `[ 1,100, 45 ]`

there are two separate blocks of code with their own variable declarations and scopes.

1: Before the if statement, variables a, b, and c are declared using var, let, and const respectively --> **[36, 100, 45]**.

2: if statement: there are new declarations for a, b, and c.
The crucial part here is that var does not have block scope; it has function scope or global scope.
So, when re-declare var a inside the if block, it affects the outer scope variable a as well. --> **[1, 2, 3].**
3: After the if statement, printing the values of the variables again.
The var a declaration inside the if block affected the value of a in the outer scope,
so the value of a is 1 in this third console.log. The values of b and c remain unaffected, so we get --> **[1, 100, 45].**
