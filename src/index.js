import './style.css';
import { callApi } from './modules/callApi.js';
import { getApiDetails } from './modules/getApiDetails.js';
import { frontStructure } from './modules/frontStructure.js';
import { productAndLikeCount, showItemsCount } from './modules/likeDetails.js';

const load = async () => {
  const data = await callApi();
  const item = productAndLikeCount(data.results);
  showItemsCount(item);
  await getApiDetails(data);
  await frontStructure(data);
};

load();

// variables

const popUp = document.querySelector('.pop-up');

/*
default & close is hidden
popUp.style.cssText = 'transform: scale(0);';
*/

// when click show pop up widnow turn on
popUp.style.cssText = 'transform: scale(1); ';

const pokemon = [
  {
    name: 'bulbasaur',
    move: 'attr1',
    length: 'attr2',
    weight: 'attr3',
    power: 'attr4',
  },
];

pokemon.forEach((poke) => {
  popUp.innerHTML += `
  <img src="./img/pic1.png" alt="" id="poke-img">
  <h3 id="poke-name">${poke.name}</h3>
  <ul class="poke-attributes">
      <li class="attr-1">Move: ${poke.move}</li>
      <li class="attr-2">Length: ${poke.length}</li>
      <li class="attr-3">Weight: ${poke.weight}</li>
      <li class="attr-4">Power: ${poke.power}</li>
  </ul>
  <ul class="com-display"></ul>
  <form class="add-comment">
      <input type="text" name="name" placeholder="Your name" id="name">
      <textarea name="insights" placeholder="Your insights" id="insights" cols="30" rows="10"></textarea>
      <button type="submit" id="submit-comment">Comment</button>
  </form>
  `;
});

const sub = document.getElementById('submit-comment');

// Api section-Start
// Send Data to API ==> Create a new score for the given game

const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const form = document.querySelector('.add-comment');
const name = document.querySelector('#name');
const insights = document.querySelector('#insights');

const newScoreAndUser = async () => {
  await fetch(`${api}dle2ITzmfUdOZVg74TkV/comments/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: 'none',
      username: name.value,
      comment: insights.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  newScoreAndUser();
  getScoresList();
  form.reset();
});

// Display the Data

const scoresList = document.querySelector('.com-display');

const display = (data) => {
  scoresList.innerHTML = '';
  data.forEach((item) => {
    scoresList.innerHTML += `<li class="score_and_name">${item.username}:${item.comment}</li>`;
  });
};

// GET Data to API

const getScoresList = async () => {
  const getScrores = await fetch(`${api}dle2ITzmfUdOZVg74TkV/comments/`);
  const reponse = await getScrores.json();
  const data = JSON.parse(JSON.stringify(reponse));
  display(data.result);
};

// Window onLoad

window.onload = getScoresList();