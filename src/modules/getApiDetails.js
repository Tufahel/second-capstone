import frontStructure from './frontStructure.js';

const getApiDetails = async (data) => {
  data = data.results;
  console.log('data', data);
  data.forEach(async (element) => {
    const res = await fetch(`${element.url}`)
      .then((res) => res.json());
    console.log('url', res);
    frontStructure(res);
  });
};

export default getApiDetails;