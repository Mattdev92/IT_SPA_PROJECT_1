const Card = (imageUrl, someText) => {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card');
  cardWrapper.classList.add('card__custom');

  const cardImage = new Image();
  cardImage.src = imageUrl;
  cardImage.classList.add('card-img-top');
  cardImage.classList.add('card-img-top_custom');

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('card-body');

  const paragraph = document.createElement('p');
  paragraph.classList.add('card-text');
  paragraph.innerText = someText;

  textWrapper.append(paragraph);
  cardWrapper.append(cardImage, textWrapper);

  return cardWrapper;
};
export default Card;
