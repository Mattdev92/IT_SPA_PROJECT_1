import OrderList from '../orderlist/orderlist';
import cartEmpty from '../../assets/cartEmpty.png';

const cart = () => {
  const cartComponent = document.createElement('div');
  cartComponent.classList.add('cartWrapper');
  const keys = Object.keys(localStorage);
  const cartTitle = document.createElement('span');
  const titleEmpty = document.createElement('span');
  cartTitle.innerText = 'Summary of reservation';
  const cartImage = new Image();
  if (keys.length !== 0) {
    cartImage.remove();
    titleEmpty.remove();
    cartComponent.append(cartTitle);
  } else {
    titleEmpty.innerText = 'Your Cart is empty';
    cartTitle.classList.add('cartTitle');
    cartImage.src = cartEmpty;
    cartComponent.append(cartTitle, titleEmpty, cartImage);
  }
  cartComponent.append(cartTitle, titleEmpty, cartImage);
  cartComponent.append(OrderList(keys));
  const scrollTo = document.querySelector('.section__main');
  scrollTo.scrollIntoView({
    behavior: 'smooth',
  });
  return cartComponent;
};
export default cart;
