/* eslint-disable no-unused-expressions */
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

// // GET comment Data from API
// const getScoresList = async () => {
//   const getScrores = await fetch(`${api}S7bgLJujc1ed84xOIncM/comments?item_id=31`);
//   const data = await getScrores.json();
//   displayCmnt(data);
// };

// Display comments
const scoresList = document.querySelector('.com-display');

// const displayCmnt = (data) => {
//   scoresList.innerHTML = '';
//   data.forEach((item) => {
//     scoresList.innerHTML += `<li class="score_and_name">${item.username}:${item.comment}</li>`;
//   });
// };

// Comments event listners
window.subCmnt = async (e, id) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const insights = document.querySelector('#insights').value;
  const form = document.querySelector('.add-comment');
  await fetch(`${api}S7bgLJujc1ed84xOIncM/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: insights,
    }),
  }).then((res) => console.log(res))
    .catch((error) => console.log(error));
  form.reset();
};

// show pop up
window.addEventListener('click', async (e) => {
  if (e.target.className === 'btn-cmnt') {
    const { id } = e.target;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => data.json());
    const comments = await fetch(`${api}S7bgLJujc1ed84xOIncM/comments?item_id=${id}`).then((data) => data.json());
    displayPop(data, comments);
  }
});

// close pop up
window.addEventListener('click', async (e) => {
  if (e.target.className === 'close-btn') {
    popUp.style.cssText = 'transform: scale(0);';
  }
});

// Api section-End

// Window onLoad

window.onload = getScoresList();
