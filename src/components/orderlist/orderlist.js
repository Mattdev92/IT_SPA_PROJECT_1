import ListItem from './listItem/listItem';
import Description from './description/description';
import Date from './date/date';
import { treatments, rooms } from '../../helperFunctions/helperVariables';
import { keys } from '../../helperFunctions/localStorage';

const orderList = () => {
  // Create order component structure
  const wrapper = document.createElement('div');
  wrapper.classList.add('orderWrapper');

  // Rooms and treatments list structure
  const infoWrapper = document.createElement('div');
  infoWrapper.classList.add('infoWrapper');

  const roomsWrapper = document.createElement('ul');
  roomsWrapper.classList.add('list-group');

  const treatmentsWrapper = document.createElement('ul');
  treatmentsWrapper.classList.add('list-group');

  // Total sum of cart
  const sumInfo = document.createElement('span');
  sumInfo.classList.add('sumInfo');

  // Assing basic variables
  let sum = 0;
  const itemsInCart = [];

  // Date structure
  const dateWrapper = document.createElement('div');
  dateWrapper.classList.add('dateWrapper');
  Date(dateWrapper);

  // Create description for Lists
  Description(roomsWrapper, 'Your room/s');
  Description(treatmentsWrapper, 'Your Treatments');

  // Create list of rooms and treatments
  keys().forEach((item, i) => {
    const id = localStorage.getItem(item);
    if (item.includes('treatments')) {
      ListItem(sum, itemsInCart, id, i, sumInfo, treatmentsWrapper, treatments);
    } else ListItem(sum, itemsInCart, id, i, sumInfo, roomsWrapper, rooms);
  });

  // Button structure
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('buttonWrapper');

  const clearButton = document.createElement('button');
  clearButton.innerText = 'Clear Cart';
  clearButton.classList.add('btn', 'btn-danger', 'btn-clear-custom');
  clearButton.setAttribute('type', 'button');

  const orderButton = document.createElement('button');
  orderButton.classList.add('btn', 'btn-success', 'btn-clear-custom');
  orderButton.innerText = 'Order';
  orderButton.setAttribute('type', 'button');

  // Add event listeners
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

  // Add children to cart structure - wait for local storage data
  buttonWrapper.append(clearButton, orderButton);
  setTimeout(() => {
    sum = itemsInCart.reduce((a, b) => a + b);
    sumInfo.innerText = `Total sum of your cart ${sum} PLN`;
    infoWrapper.append(roomsWrapper, treatmentsWrapper);
    wrapper.append(infoWrapper, dateWrapper, buttonWrapper, sumInfo);
  }, 200);

  return wrapper;
};
export default orderList;
