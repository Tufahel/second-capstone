import './style.css';
import { callApi } from './modules/callApi.js';
import { getApiDetails } from './modules/getApiDetails.js';
import { frontStructure } from './modules/frontStructure.js';

const load = async () => {
  const data = await callApi();
  getApiDetails(data);
  frontStructure(data);
};

load();