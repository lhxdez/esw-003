async function loadPacotes(criteria) {
  const response = await fetch(endpointFor(criteria));
  const data = await response.json();
  console.log(`Carregado pacotes (payload : ${data})`);
  return data;
}

function endpointFor(criteria) {
  const endpoint = "http://localhost:8080/pacotes";

  if (criteria) {
    return `${endpoint}?q=${criteria}`;
  } else {
    return endpoint;
  }
}

export { loadPacotes };
