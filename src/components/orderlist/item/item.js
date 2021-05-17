import { keys } from '../../../helperFunctions/localStorage';

const item = (sum, itemsInCart, id, i, sumInfo, wrapper, name, data) => {
  // Create item structure
  const li = document.createElement('li');
  li.classList.add(
    'list-group-item',
    'd-flex',
    'justify-content-between',
    'align-items-center',
    'li-custom'
  );

  // Create item elements
  const span = document.createElement('span');
  span.classList.add('badge', 'bg-primary', 'rounded-pill');

  const removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'btn-warning', 'btn-remove-custom');
  removeButton.innerText = 'Remove';

  const quantity = document.createElement('input');
  quantity.setAttribute('type', 'number');
  quantity.setAttribute('value', 1);
  quantity.setAttribute('min', 0);
  quantity.classList.add('quantity');

  const spanWrapper = document.createElement('div');
  spanWrapper.classList.add('spanWrapper');

  // Add event listeners

  removeButton.addEventListener('click', () => {
    itemsInCart[i] = 0;
    sum = itemsInCart.reduce((a, b) => a + b);
    li.remove();
    localStorage.removeItem(`${name}:${id}`);
    sumInfo.innerText = `Total sum of your cart ${sum} PLN`;
    if (keys().length === 0) {
      const orderWrapper = document.querySelector('.orderWrapper');
      const emptyTitle = document.createElement('h1');
      emptyTitle.innerText = 'Your cart is empty';
      emptyTitle.classList.add('orderWrapper__emptyTitle');
      orderWrapper.innerHTML = '';
      orderWrapper.appendChild(emptyTitle);
    }
  });

  quantity.addEventListener('change', () => {
    itemsInCart[i] = data.price * quantity.value;
    span.innerText = '';
    sum = itemsInCart.reduce((a, b) => a + b);
    span.append(data.price);
    sumInfo.innerText = `Total sum of your cart ${sum} PLN`;
  });

  // Add children elements to item
  span.append(data.price * quantity.value);
  spanWrapper.append(span, quantity, removeButton);
  li.append(data.name, spanWrapper);
  wrapper.append(li);
  itemsInCart.push(data.price * quantity.value);
};
export default item;
