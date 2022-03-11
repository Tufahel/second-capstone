export const frontStructure = (data) => {
  const { name } = data;
  const { id } = data;
  const img = data.sprites.other['official-artwork'].front_default;

  const gridList = document.querySelector('.grid-list');
  gridList.innerHTML += `
    <div class="grid-item">
    <img src="${img}"/>
    <div>
    <h3>${name}</h3>
    </div>
    <div class="btns"><button type="button" class="btn-like">Like</button>
    <button type="button" class="btn-cmnt" id="${id}">Comments</button>
    </div>
    </div>
  `;
};