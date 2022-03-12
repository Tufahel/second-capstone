import frontStructure from './frontStructure.js';

const getApiDetails = async (data) => {
  data = data.results;
  data.forEach(async (element) => {
    const res = await fetch(`${element.url}`)
      .then((res) => res.json());
    frontStructure(res);
  });
};

export default getApiDetails;