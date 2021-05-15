import Detail from '../../views/details/details';

const Card = (imageUrl, objectData, type) => {
  // Create card structure
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card');
  cardWrapper.classList.add('card__custom');

  // Create children
  const cardImage = new Image();
  cardImage.classList.add('card-img-top');
  cardImage.classList.add('card-img-top_custom');
  cardImage.src = imageUrl;

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('card-body');

  const paragraph = document.createElement('p');
  paragraph.classList.add('card-text');
  paragraph.innerText = objectData.name;

  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = 'Show more';

  // Add event listeners
  button.addEventListener('click', () => {
    const section = document.querySelector('.section__main');
    section.innerHTML = '';
    Detail(section, objectData, imageUrl, type);
  });

  // Add children to structure on image load
  textWrapper.append(paragraph);
  cardImage.onload = () => {
    cardWrapper.append(cardImage, textWrapper, button);
  };

  return cardWrapper;
};
export default Card;
