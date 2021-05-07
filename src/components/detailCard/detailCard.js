const detailCard = (imageUrl, objectData) => {
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
  paragraph2.innerText = objectData.description;

  textWrapper.append(paragraph);
  textWrapper.append(paragraph2);

  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = 'Add to cart';
  button.addEventListener('click', () => {
    const section = document.querySelector('.section__main');
    section.innerHTML = '';
  });
  cardImage.onload = () => cardWrapper.append(cardImage, textWrapper, button);
  return cardWrapper;
};
export default detailCard;
