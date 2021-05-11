import OrderList from '../orderlist/orderlist';

const cart = () => {
  const cartComponent = document.createElement('div');
  cartComponent.classList.add('cartWrapper');
  const keys = Object.keys(localStorage);
  const cartTitle = document.createElement('span');
  cartTitle.classList.add('cartTitle');
  cartTitle.innerText = 'Summary of reservation';
  cartComponent.append(cartTitle);
  cartComponent.append(OrderList(keys));
  const scrollTo = document.querySelector('.section__main');
  scrollTo.scrollIntoView({
    behavior: 'smooth',
  });
  return cartComponent;
};
export default cart;
