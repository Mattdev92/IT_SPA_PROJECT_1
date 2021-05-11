import LiItem from './listItem/listItem';
import Description from './description/description';

const OrderList = (keys) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('orderWrapper');
  const roomsWrapper = document.createElement('ul');
  const treatmentsWrapper = document.createElement('ul');
  const sumInfo = document.createElement('span');
  sumInfo.classList.add('sumInfo');
  roomsWrapper.classList.add('list-group');
  treatmentsWrapper.classList.add('list-group');
  const itemsInCart = [];
  const treatments = 'treatments';
  const rooms = 'rooms';
  let sum = 0;
  Description(roomsWrapper, 'Your room');
  Description(treatmentsWrapper, 'Your Treatments');
  keys.forEach((item, i) => {
    const id = localStorage.getItem(item);
    if (item.includes('treatments')) {
      LiItem(sum, itemsInCart, id, i, sumInfo, treatmentsWrapper, treatments);
    } else LiItem(sum, itemsInCart, id, i, sumInfo, roomsWrapper, rooms);
  });
  const clearButton = document.createElement('button');
  clearButton.classList.add('btn', 'btn-danger', 'btn-clear-custom');
  clearButton.setAttribute('type', 'button');
  clearButton.addEventListener('click', () => {
    localStorage.clear();
    treatmentsWrapper.innerText = '';
    roomsWrapper.innerText = '';
    sum = 0;
    sumInfo.innerText = `Total sum of your cart ${sum} PLN`;
    wrapper.append('Your Cart is empty :(');
    clearButton.remove();
  });
  clearButton.innerText = 'Clear Cart';
  setTimeout(() => {
    sum = itemsInCart.reduce((a, b) => a + b);
    sumInfo.innerText = `Total sum of your cart ${sum} PLN`;
    const infoWrapper = document.createElement('div');
    infoWrapper.append(roomsWrapper, treatmentsWrapper);
    infoWrapper.classList.add('infoWrapper');
    wrapper.append(infoWrapper, clearButton, sumInfo);
  }, 200);
  return wrapper;
};
export default OrderList;
