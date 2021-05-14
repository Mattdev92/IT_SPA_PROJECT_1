import LiItem from './listItem/listItem';
import Description from './description/description';
import Date from './date/date';

const OrderList = (keys) => {
  // Basics
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
  const orderButton = document.createElement('button');
  let sum = 0;

  // Date
  const dateWrapper = document.createElement('div');
  Date(dateWrapper);

  // Description for Lists
  Description(roomsWrapper, 'Your room/s');
  Description(treatmentsWrapper, 'Your Treatments');

  // List of roos and treatments
  keys.forEach((item, i) => {
    const id = localStorage.getItem(item);
    if (item.includes('treatments')) {
      LiItem(sum, itemsInCart, id, i, sumInfo, treatmentsWrapper, treatments);
    } else LiItem(sum, itemsInCart, id, i, sumInfo, roomsWrapper, rooms);
  });

  // Clear List
  const clearButton = document.createElement('button');
  clearButton.innerText = 'Clear Cart';
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
    orderButton.remove();
    dateWrapper.remove();
  });

  // Order function
  orderButton.classList.add('btn', 'btn-success', 'btn-clear-custom');
  orderButton.innerText = 'Order';
  orderButton.setAttribute('type', 'button');
  orderButton.addEventListener('click', () => {
    alert('Congratulations ! Your SPA visit is ordered !');
    wrapper.append('Congratulations your order is completed ! ');
    localStorage.clear();
    treatmentsWrapper.innerText = '';
    roomsWrapper.innerText = '';
    sum = 0;
    sumInfo.innerText = `We will wait for you !`;
    clearButton.remove();
    orderButton.remove();
    dateWrapper.remove();
  });

  // Button section
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('buttonWrapper');
  buttonWrapper.append(clearButton, orderButton);

  // Wait for local storage data
  setTimeout(() => {
    sum = itemsInCart.reduce((a, b) => a + b);
    sumInfo.innerText = `Total sum of your cart ${sum} PLN`;
    const infoWrapper = document.createElement('div');
    infoWrapper.append(roomsWrapper, treatmentsWrapper);
    infoWrapper.classList.add('infoWrapper');
    wrapper.append(infoWrapper, dateWrapper, buttonWrapper, sumInfo);
  }, 200);

  return wrapper;
};
export default OrderList;
