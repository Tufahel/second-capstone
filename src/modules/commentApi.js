async function postInvolveCommentApi(id, name, userComment) {
  const userObj = {
    item_id: id,
    username: name,
    comment: userComment,
  };
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7bgLJujc1ed84xOIncM/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
      // eslint-disable-next-line comma-dangle
    }
  );
  const data = await response.json();
  return data;
}