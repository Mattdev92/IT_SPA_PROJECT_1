import axios from 'axios';

const OrderList = (keys) => {
  const wrapper = document.createElement('div');
  const roomsWrapper = document.createElement('ul');
  const treatmentsWrapper = document.createElement('ul');
  roomsWrapper.classList.add('list-group');
  treatmentsWrapper.classList.add('list-group');
  keys.forEach((item) => {
    const id = localStorage.getItem(item);
    if (item.includes('treatments')) {
      axios
        .get(`http://localhost:3000/treatments/${id}`)
        .then(({ data }) => {
          const li = document.createElement('li');
          li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
          );
          const span = document.createElement('span');
          span.classList.add('badge', 'bg-primary', 'rounded-pill');
          span.append(data.price);
          li.append(data.name, span);
          const button = document.createElement('button');
          button.classList.add('btn', 'btn-warning');
          button.innerText = 'Remove';
          button.addEventListener('click', () => {
            li.remove();
          });
          li.append(button);
          treatmentsWrapper.append(li);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`http://localhost:3000/rooms/${id}`)
        .then(({ data }) => {
          console.log(data);
          const li = document.createElement('li');
          li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
          );
          const span = document.createElement('span');
          span.classList.add('badge', 'bg-primary', 'rounded-pill');
          span.append(data.price);
          li.append(data.name, span);
          const button = document.createElement('button');
          button.classList.add('btn', 'btn-warning');
          button.innerText = 'Remove';
          button.addEventListener('click', () => {
            li.remove();
          });
          li.append(button);
          treatmentsWrapper.append(li);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
  const clearButton = document.createElement('button');
  clearButton.classList.add('btn', 'btn-danger');
  clearButton.setAttribute('type', 'button');
  clearButton.addEventListener('click', () => {
    localStorage.clear();
    treatmentsWrapper.innerText = '';
    roomsWrapper.innerText = '';
    wrapper.append('Your Cart is empty :(');
  });
  clearButton.innerText = 'Clear Cart';
  wrapper.append(roomsWrapper, treatmentsWrapper, clearButton);
  return wrapper;
};
export default OrderList;
