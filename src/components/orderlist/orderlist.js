import LiItem from './listItem/listItem';
import Description from './description/description';

const OrderList = (keys) => {
  // const currentDate = Date(Date.now());
  // const previousYear = currentDate.getFullYear() - 1;
  // console.log(previousYear);
  const d = new Date();
  const pastYear = d.getFullYear() - 1;
  d.setFullYear(pastYear);
  console.log(d);
  const wrapper = document.createElement('div');
  wrapper.classList.add('orderWrapper');
  const roomsWrapper = document.createElement('ul');
  const treatmentsWrapper = document.createElement('ul');
  const sumInfo = document.createElement('span');
  const dateWrapper = document.createElement('div');
  dateWrapper.classList.add('dateWrapper');
  const dateInput = document.createElement('input');
  dateWrapper.append('Please provide your duration date', dateInput);
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('min', Date.UTC(d));
  sumInfo.classList.add('sumInfo');
  roomsWrapper.classList.add('list-group');
  treatmentsWrapper.classList.add('list-group');
  const itemsInCart = [];
  const treatments = 'treatments';
  const rooms = 'rooms';
  const orderButton = document.createElement('button');
  let sum = 0;
  Description(roomsWrapper, 'Your room/s');
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
    orderButton.remove();
  });
  clearButton.innerText = 'Clear Cart';
  orderButton.classList.add('btn', 'btn-success', 'btn-clear-custom');
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
  });
  orderButton.innerText = 'Order';

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('buttonWrapper');
  buttonWrapper.append(clearButton, orderButton);

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
