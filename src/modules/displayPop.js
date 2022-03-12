import productCount from './productCount.js';

export default async function displayPop(data, comments) {
  const moves = data.moves['0'].move.name;
  const { weight } = data;
  const { height } = data;
  const ability = data.abilities[0].ability.name;
  const { name } = data;
  const { id } = data;
  const img = data.sprites.other['official-artwork'].front_default;
  const popUp = document.querySelector('.pop-up');
  const cmntCounter = productCount(comments);
  popUp.innerHTML = `
  <div id="${id}">
  <img src="${img}" alt="" id="poke-img">
  <h3 id="poke-name">${name}</h3>
  <ul class="poke-attributes">
    <li class="attr-1">Move: ${moves}</li>
    <li class="attr-2">Length: ${height}</li>
    <li class="attr-3">Weight: ${weight}</li>
    <li class="attr-4">Power: ${ability}</li>
  </ul>
  <div>
    <h3 class="show-display">Comments (${cmntCounter}) </h3>
    <ul class="com-display">
      ${comments.map((item) => `<li>${item.creation_date} : ${item.username} : ${item.comment}</li>`).join('')}
    </ul>
  </div>
  <h3>Add Comments</h3>
  <form class="add-comment" onsubmit="subCmnt(event, ${id})">
    <input type="text" name="name" placeholder="Your name" id="name" required>
    <textarea name="insights" placeholder="Your insights" id="insights" cols="30" rows="10" required></textarea>
    <button type="submit" id="submit-comment">Comment</button>
    <button type="button" class="close-btn">X</button>
  </form>
  </div>
  `;
  popUp.style.cssText = 'transform: scale(1);';
}
