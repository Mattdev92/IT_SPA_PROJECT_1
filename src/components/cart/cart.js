import OrderList from '../orderlist/orderlist';

const cart = () => {
  const cartComponent = document.createElement('div');
  const keys = Object.keys(localStorage);
  console.log(keys);
  cartComponent.innerHTML = 'Summary of reservation';
  cartComponent.append(OrderList(keys));
  const scrollTo = document.querySelector('.section__main');
  scrollTo.scrollIntoView({
    behavior: 'smooth',
  });
  return cartComponent;
};
export default cart;
