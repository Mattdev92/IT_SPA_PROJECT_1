import loaderComponent from '../loader/loader';
import Detail from '../../views/details/details';

const Card = (imageUrl, objectData, type) => {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card');
  cardWrapper.classList.add('card__custom');

  const cardImage = new Image();

  cardImage.classList.add('card-img-top');
  cardImage.classList.add('card-img-top_custom');

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('card-body');

  const paragraph = document.createElement('p');
  paragraph.classList.add('card-text');
  paragraph.innerText = objectData.name;

  textWrapper.append(paragraph);
  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = 'Show more';
  button.addEventListener('click', () => {
    const section = document.querySelector('.section__main');
    section.innerHTML = '';
    section.append(loaderComponent());
    Detail(section, objectData, imageUrl, type);
  });
  cardImage.src = imageUrl;
  cardImage.onload = () => {
    cardWrapper.append(cardImage, textWrapper, button);
  };

  return cardWrapper;
};
export default Card;
