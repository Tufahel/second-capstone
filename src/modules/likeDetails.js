const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3sTUOK2yYGDszBmzMFAW/likes';

const likes = async (id) => {
  const user = { item_id: id };
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log('res-likes: ', res);
  return res;
};

const collectLikeData = async () => {
  const like = await fetch(url)
    .then((like) => like.json());

  // console.log('like:: ', like);
  return like;
};

export const update = async (id) => {
  const likesCollection = await collectLikeData();
  console.log('lkcollection: ', likesCollection);
  let replace = 0;
  likesCollection.forEach((element) => {
    if (element.item_id.toString() === id.toString()) {
      replace = element.likes;
    }
  });
  console.log('replace: ', replace);
  return replace;
};

const showLikeCounts = (e) => {
  const currentNumber = e.innerText;
  e.innerText = parseInt(currentNumber, 10) + 1;
};

export const showItemsCount = (counter) => {
  const counts = document.querySelector('.items-count');
  counts.innerText = `Products (${counter})`;
};

const gridList = document.querySelector('.grid-list');
// const btnLike = document.querySelector('.btn-like');

gridList.addEventListener('click', (e) => {
  if (e.target.id === 'btn-like') {
    const targetElement = e.target;
    const { id } = targetElement.parentNode.querySelector('span');
    const likeSpan = targetElement.parentNode.querySelector('span');
    console.log('id: ', id);
    likes(id);
    update(id);
    showLikeCounts(likeSpan);
  }
});