import axios from 'axios';

const LiItem = (sum, itemsInCart, id, i, sumInfo, wrapper, name) => {
  axios
    .get(`http://localhost:3000/${name}/${id}`)
    .then(({ data }) => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      const removeButton = document.createElement('button');
      const quantity = document.createElement('input');
      const orderWrapper = document.querySelector('.orderWrapper');
      li.classList.add(
        'list-group-item',
        'd-flex',
        'justify-content-between',
        'align-items-center',
        'li-custom'
      );
      span.classList.add('badge', 'bg-primary', 'rounded-pill');
      removeButton.classList.add('btn', 'btn-warning', 'btn-remove-custom');
      quantity.classList.add('quantity');
      removeButton.innerText = 'Remove';
      quantity.setAttribute('type', 'number');
      quantity.setAttribute('value', 1);
      quantity.setAttribute('min', 0);
      removeButton.addEventListener('click', () => {
        itemsInCart[i] = 0;
        sum = itemsInCart.reduce((a, b) => a + b);
        li.remove();
        localStorage.removeItem(`${name}:${id}`);
        sumInfo.innerText = `Total sum of your cart ${sum} PLN`;
        if (Object.keys(localStorage).length === 0) {
          orderWrapper.remove();
        }
      });
      quantity.addEventListener('change', () => {
        itemsInCart[i] = data.price * quantity.value;
        span.innerText = '';
        sum = itemsInCart.reduce((a, b) => a + b);
        span.append(data.price);
        sumInfo.innerText = `Total sum of your cart ${sum} PLN`;
        console.log(itemsInCart);
      });
      const spanWrapper = document.createElement('div');
      spanWrapper.classList.add('spanWrapper');
      span.append(data.price * quantity.value);
      spanWrapper.append(span, quantity, removeButton);
      li.append(data.name, spanWrapper);
      wrapper.append(li);
      itemsInCart.push(data.price * quantity.value);
    })
    .catch((error) => {
      console.log(error);
    });
  return sum;
};
export default LiItem;
