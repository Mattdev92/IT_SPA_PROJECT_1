import SPA from '../../assets/SPA.jpg';

const DefaultView = function () {
  // Create default view structure
  const wrapper = document.createElement('div');
  wrapper.classList.add('mainWrapper');

  // Create children - image nad description
  const imagePlace = document.createElement('div');
  imagePlace.classList.add('mainWrapper__imagePlace');
  const descriptionPlace = document.createElement('div');
  descriptionPlace.classList.add('mainWrapper__descriptionPlace');
  descriptionPlace.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta minima deleniti explicabo debitis modi magnam at voluptas. Earum cumque quaerat deserunt tempore fuga assumenda obcaecati, suscipit excepturi aut facere
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta minima deleniti explicabo debitis modi magnam at voluptas. Earum cumque quaerat deserunt tempore fuga assumenda obcaecati, suscipit excepturi aut facere
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta minima deleniti explicabo debitis modi magnam at voluptas. Earum cumque quaerat deserunt tempore fuga assumenda obcaecati, suscipit excepturi aut facere. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta minima deleniti explicabo debitis modi magnam at voluptas. Earum cumque quaerat deserunt tempore fuga assumenda obcaecati, suscipit excepturi aut facere
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta minima deleniti explicabo debitis modi magnam at voluptas. Earum cumque quaerat deserunt tempore fuga assumenda obcaecati, suscipit excepturi aut facere
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta minima deleniti explicabo debitis modi magnam at voluptas. Earum cumque quaerat deserunt tempore fuga assumenda obcaecati, suscipit excepturi aut facere`;
  const mainImage = new Image();
  mainImage.src = SPA;
  imagePlace.appendChild(mainImage);

  // Add children to parent wrapper
  wrapper.append(imagePlace, descriptionPlace);
  return wrapper;
};
export default DefaultView;
