
# Summary of Day6
# Data Fetching & Promises
To fetch resources from a server, fetch-method is used, it's asynchronously (return a promise)
# Destructuring Data
Destructuring is a JS expression that allows you to extract data from arrays, objects, 
and maps and set them into new, distinct variables. This can be useful for making code more 
concise and readable, and for avoiding the need to use nested loops or if statements.
```js
const user = {
  name: 'John Doe',
  age: 30
};

const { name, age } = user;

console.log(name); // John Doe
console.log(age); // 30
```

# Async
The async keyword in JavaScript is used to declare an asynchronous function. Asynchronous functions are functions 
that can run concurrently with other functions, and they do not block the execution of the rest of the program.

This can be useful for tasks that take a long time to complete, such as making an HTTP request or reading a file from disk.
# Modules
- A module in JavaScript is a file that contains related code.
- Modules are used to break up code into smaller, more manageable chunks. 
- This can make code easier to read, understand, and maintain.
- Modules can also be used to share code between different projects.
## DELIVERABLES

1. Compound Assignment With Augmented Multiplication
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Rick and Morty Characters</title>
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <h1>Rick and Morty Characters</h1>
  <ul id="characters">
  </ul>
  <script src="./index.js"></script>
</body>
</html>
```

related js file:

```js
const fetchCharacters = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?status=alive`);
  const data = await response.json();

  if (data.results.length === 0) {
    document.getElementById('characters').innerHTML = 'No characters found.';
    return;
  }

  const characters = data.results.slice(0, 50);

  for (const character of characters) {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h2>${character.name}</h2>
      <p>Location: ${character.location.name}</p>
      <p>Species: ${character.species}</p>
      <p>Gender: ${character.gender}</p>
    `;
    document.getElementById('characters').appendChild(li);
  }
};

fetchCharacters();

```

See video in rickAndMorty repository