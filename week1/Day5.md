# Summary of Day5

## Conditionals
if, else blocks:
```javascript
if (condition)
{
    dothis()
} else
{
    dothat()
}
```
but also ternary operator: _condition ? trueExpression : falseExpression_ :
```javascript
let myvar = 10 > 5 ? "10 is bigger than 5" : "no"
```

## Map & filter
map function apply a function to each element in a list.

```javascript
const strings = ["hello", "world"];
const upperCaseStrings = strings.map(str => str.toUpperCase());

console.log(upperCaseStrings); // ["HELLO", "WORLD"]
```
filter creates a new array, and its element are the values where the function returns true
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

## DELIVERABLE
# Use Multiple Conditional (Ternary) Operators

```javascript

function checkSign(num) {
  return num > 0 ? "positive": num < 0 ? "negative" : "zero"
}

checkSign(10);
```

# Use the map Method to Extract Data from an Array	
```javascript
...
...
const ratings = watchList.map( film => ({"title": film["Title"], "rating":film.imdbRating}))
console.log(JSON.stringify(ratings));
```

# Use the filter Method to Extract Data from an Array	

```javascript
const filteredLists = watchList.map(film => ({"title":film["Title"], "rating":film.imdbRating}))
const filteredList = filteredLists.filter(film => (new Number(film["rating"]) >= 8.0))


console.log(filteredList);
```

# Golf Code	
```js
...
function golfScore(par, strokes) {
 
  let score = names[6]
if (strokes == 1) {
  score = names[0];
} else if (strokes <= (par - 2)) {
  score = names[1];
} else if (strokes == par - 1) {
  score = names[2];
} else if (strokes == par) {
  score = names[3];
} else if (strokes == par + 1) {
  score = names[4];
} else if (strokes == par + 2) {
  score = names[5];
} else {
}

  return score;
}
```
