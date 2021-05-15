import { keys } from '../../../helperFunctions/localStorage';

const cartView = (cartSummary) => {
  // Create cart view structure
  cartSummary.classList.add('cartSummary');

  // Create list of rooms and treatments
  const list = document.createElement('ul');
  list.classList.add('list-group');

  // Create list from localStorage
  keys().forEach((item) => {
    const itemInCourt = localStorage.getItem(item);
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.classList.add('itemInCourt');
    if (item.includes('room')) {
      li.innerText = `Room number ${itemInCourt}`;
    } else {
      li.innerText = `Treatment number ${itemInCourt}`;
    }
    list.append(li);
  });

  // Add children to main wrapper
  cartSummary.appendChild(list);
  return cartSummary;
};
export default cartView;
