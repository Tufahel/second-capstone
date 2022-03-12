import { update } from './likeDetails.js';

const frontStructure = async (data) => {
  const { name } = data;
  const { id } = data;
  const img = data.sprites.other['official-artwork'].front_default;

  const like = await update(id);
  const gridList = document.querySelector('.grid-list');
  gridList.innerHTML += `
        <div class="grid-item">
        <img src="${img}"/>
        <div class="header-content">
        <h3 class="name">${name}<h3>
        <div class="like-details">
        <i id="btn-like" class="fa fa-regular fa-heart btn-like"></i>
        <span id=${id}>${like}</span>
        </div>
        </div>
        <button type="button" class="btn-cmnt" id="${id}">Comments</button>
        </div>
    `;
};

export default frontStructure;

