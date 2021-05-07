const detailCard = (imageUrl, objectData, type) => {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card');
  cardWrapper.classList.add('detailCard__custom');

  const cardImage = new Image();
  cardImage.src = imageUrl;
  cardImage.classList.add('card-img-top');
  cardImage.classList.add('card-img-top_custom');

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('card-body');

  const paragraph = document.createElement('p');
  paragraph.classList.add('card-text');
  paragraph.innerText = objectData.name;

  const paragraph2 = document.createElement('p');
  paragraph2.classList.add('card-text');
  if (type === 'rooms') {
    paragraph2.innerText = objectData.description;
  } else {
    paragraph2.innerText = `Estimated time: ${objectData.time} min`;
  }
  textWrapper.append(paragraph, paragraph2, `Price: ${objectData.price} euro`);
  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = 'Add to cart';
  button.addEventListener('click', () => {
    localStorage.setItem(`${type}:${objectData.id}`, objectData.id);
    button.classList.add('button--disabled');
    button.innerText = 'In cart';
  });
  cardImage.onload = () => cardWrapper.append(cardImage, textWrapper, button);
  return cardWrapper;
};
export default detailCard;
