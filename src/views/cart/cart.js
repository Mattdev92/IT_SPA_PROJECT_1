import orderList from '../../components/orderlist/orderlist';
import cartEmpty from '../../assets/cartEmpty.png';
import { keys } from '../../helperFunctions/localStorage';

const cart = () => {
  // remove Nav class
  const nav = document.querySelector('.nav');
  nav.classList.remove('nav__sectionView');

  // Create cart structure
  const cartComponent = document.createElement('div');
  cartComponent.classList.add('cartWrapper');

  // Create default cart view in some conditions
  const cartTitle = document.createElement('span');
  const titleEmpty = document.createElement('span');
  cartTitle.innerText = 'Summary of reservation';
  const cartImage = new Image();
  cartImage.classList.add('cartEmptyImage');
  if (keys().length !== 0) {
    cartImage.remove();
    titleEmpty.remove();
    cartComponent.append(cartTitle);
  } else {
    titleEmpty.innerText = 'Your Cart is empty';
    cartTitle.classList.add('cartTitle');
    cartImage.src = cartEmpty;
    cartComponent.append(cartTitle, titleEmpty, cartImage);
  }

  // Add children to cart structure
  cartComponent.append(cartTitle, titleEmpty, cartImage);
  cartComponent.append(orderList());

  // Scroll to main section
  const scrollTo = document.querySelector('.section__main');
  scrollTo.scrollIntoView({
    behavior: 'smooth',
  });
  return cartComponent;
};
export default cart;
