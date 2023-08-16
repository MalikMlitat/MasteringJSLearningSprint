
# Summary of Day1

## Introduction
-
## JavaScript Principles
- JS runs the code line-by-line, known as **thread of execution**
- JS saves functions and data in its **memory** to be reused
- JS keeps track of current running call-stack
## Functions & Callbacks
- Makes code more readable and even declarative
- There are too many coding principles to follow: DRY (Don't Repeat Yourself)
- Make functions more generic instead specific (parametrized)
- Higher order functions (map, reduce, filter...etc.) and callbacks:
```js
function iAmHighOrderFucntion(array, instruction)
{
    const result = []
    for (const arr of array)
           result.push(instruction(arr))
    return result
}

function iAmCallBack(input) {return input + input }

const results = iAmHighOrderFucntion ([1,2,3,4], iAmCallBack)
```

## DELIVERABLE
### Higher order functions
```js
const squareList = arr => {
  const positive_arr = arr.filter(x => x > 0 && Number.isInteger(x) )
  const squired_arr = positive_arr.map(x => x * x, positive_arr )
  return squired_arr;
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
```

### Apply Functional Programming to Convert Strings to URL Slugs
```js
function urlSlug(title) {
  
  const words = title.split(' '); // split into an array of words.
  const lowercaseWds = words.map((word) => word.toLowerCase()); // convert to lowercase.
  const nonEmptyWds = lowercaseWds.filter((word) => word !== ''); // remove any empty words
  const hyphenatedWds = nonEmptyWds.join('-'); // join with -

  return hyphenatedWds

}
```

### Functions and Callbacks

```js
function mapAsync(array, callback) {
  const results = [];

  array.forEach((element) => {
    // promise to represent the async call
    const promise = new Promise((resolve, reject) => {
      callback(element, resolve, reject);
    });

    results.push(promise);
  });

  return Promise.all(results);
}
```


Example on usage: 
```js
const array = [1, 2, 3, 4, 5];

const mapAsyncFunction = (element) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(element * 2);
    }, 1000);
  });
};

const promise = mapAsync(array, mapAsyncFunction);

promise.then((results) => {
  console.log(results); // should print: [2, 4, 6, 8, 10]
});
```