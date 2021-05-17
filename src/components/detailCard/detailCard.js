const detailCard = (imageUrl, objectData, type) => {
  // remove Nav class
  const nav = document.querySelector('.nav');
  nav.classList.remove('nav__sectionView');

  // Create detail Card structure
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card');
  cardWrapper.classList.add('detailCard__custom');

  // Create children
  const cardImage = new Image();
  cardImage.src = imageUrl;
  cardImage.classList.add('card-img-top');
  cardImage.classList.add('card-img-top_custom');

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('card-body');

  const paragraph = document.createElement('p');
  paragraph.classList.add('card-text');
  if (type === 'rooms') {
    paragraph.innerText = objectData.description;
  } else {
    paragraph.innerText = `Estimated time: ${objectData.time} min`;
  }
  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = 'Add to cart';

  // Add event listeners
  button.addEventListener('click', () => {
    localStorage.setItem(`${type}:${objectData.id}`, objectData.id);
    button.classList.add('button--disabled');
    button.innerText = 'In cart';
  });

  // Add children to main structure
  textWrapper.append(paragraph, `Price: ${objectData.price} PLN`);
  cardImage.onload = () => cardWrapper.append(cardImage, textWrapper, button);
  return cardWrapper;
};
export default detailCard;
