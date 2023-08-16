
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
- Higher order functions and callbacks:
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