import './style.css';
import './img/pic1.png';
import { callApi } from './modules/callApi.js';
import { getApiDetails } from './modules/getApiDetails.js';
import { frontStructure } from './modules/frontStructure.js';
import displayPop from './modules/displayPop.js';

const load = async () => {
  const data = await callApi();
  getApiDetails(data);
  frontStructure(data);
};

load();

// Api section-Start
// var
const popUp = document.querySelector('.pop-up');
const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const form = document.querySelector('.add-comment');
const name = document.querySelector('#name');
const insights = document.querySelector('#insights');

// Send comment Data to API
const newScoreAndUser = async () => {
  await fetch(`${api}S7bgLJujc1ed84xOIncM/comments/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: 31,
      username: name.value,
      comment: insights.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

// GET comment Data from API
const getScoresList = async () => {
  const getScrores = await fetch(`${api}S7bgLJujc1ed84xOIncM/comments?item_id=31`);
  const data = await getScrores.json();
  displayCmnt(data);
};

// Display comments
const scoresList = document.querySelector('.com-display');

const displayCmnt = (data) => {
  scoresList.innerHTML = '';
  data.forEach((item) => {
    scoresList.innerHTML += `<li class="score_and_name">${item.username}:${item.comment}</li>`;
  });
};

// Comments event listners

window.addEventListener('click', async (e) => {
  if (e.target.className === 'btn-cmnt') {
    const { id } = e.target;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => data.json());
    displayPop(data);
  }
});

// close pop up
window.addEventListener('click', async (e) => {
  if (e.target.className === 'close-btn') {
    popUp.style.cssText = 'transform: scale(0);';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

// Api section-End

// Window onLoad

window.onload = getScoresList();
