import SPA from '../../assets/SPA.jpg';

const DefaultView = function () {
  const wrapper = document.createElement('div');
  wrapper.classList.add('mainwrapper');
  const imagePlace = document.createElement('div');
  imagePlace.classList.add('mainwrapper__imagePlace');
  const descriptionPlace = document.createElement('div');
  descriptionPlace.classList.add('mainwrapper__descriptionPlace');
  descriptionPlace.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta minima deleniti explicabo debitis modi magnam at voluptas. Earum cumque quaerat deserunt tempore fuga assumenda obcaecati, suscipit excepturi aut facere
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta minima deleniti explicabo debitis modi magnam at voluptas. Earum cumque quaerat deserunt tempore fuga assumenda obcaecati, suscipit excepturi aut facere
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta minima deleniti explicabo debitis modi magnam at voluptas. Earum cumque quaerat deserunt tempore fuga assumenda obcaecati, suscipit excepturi aut facere`;
  const mainImage = new Image();
  mainImage.src = SPA;
  imagePlace.appendChild(mainImage);
  wrapper.append(imagePlace, descriptionPlace);
  return wrapper;
};
export default DefaultView;
