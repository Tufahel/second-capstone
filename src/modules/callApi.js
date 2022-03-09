export const callApi = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.json());
  console.log('res', res);
  return res;
};