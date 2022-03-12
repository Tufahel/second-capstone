const callApi = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.json());
  return res;
};

export default callApi;