import { frontStructure } from './frontStructure.js';

export const getApiDetails = async (data) => {
  data = data.results;
  console.log('data', data);
  data.forEach(async (element) => {
    const res = await fetch(`${element.url}`)
      .then((res) => res.json());
    console.log('url', res);
    frontStructure(res);
  });
};