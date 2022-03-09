import './style.css';
import _ from 'lodash';
import { callApi } from './modules/callApi.js';
import { getApiDetails } from './modules/getApiDetails.js';
import { frontStructure } from './modules/frontStructure.js';

const load = async () => {
  const data = await callApi();
  await getApiDetails(data);
  await frontStructure(data);
};

load();