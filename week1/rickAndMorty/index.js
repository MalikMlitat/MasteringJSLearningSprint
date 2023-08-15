const fetchCharacters = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?status=alive`);
  const data = await response.json();

  if (data.results.length === 0) {
    document.getElementById('characters').innerHTML = 'No characters found.';
    return;
  }

  const characters = data.results.slice(0, 150);

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
