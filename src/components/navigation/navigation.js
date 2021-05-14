import Logo from '../../assets/logo.png';
import Cart from '../../assets/cart.png';

const createNavigationEvent = (view) =>
  new CustomEvent('navigation', {
    detail: {
      view,
    },
  });

const navigation = () => {
  const logo = new Image();
  logo.src = Logo;
  logo.addEventListener('click', () => {
    const top = document.querySelector('body');
    top.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    const nav = document.querySelector('.nav');
    nav.classList.remove('nav__sectionView');
    document.dispatchEvent(createNavigationEvent('defaultview'));
  });
  logo.classList.add('logo');
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  const ul = document.createElement('ul');
  ul.classList.add('nav__list');
  nav.append(logo);
  const cart = new Image();
  cart.src = Cart;
  cart.classList.add('cart');
  const navigationElements = ['treatments', 'rooms'];
  const cartSummary = document.createElement('div');
  navigationElements.map((item) => {
    const liElement = document.createElement('li');
    liElement.classList.add('nav__list__item');
    liElement.innerHTML = item;
    ul.append(liElement);
    return null;
  });
  ul.addEventListener('click', (e) => {
    document.dispatchEvent(createNavigationEvent(e.target.innerHTML));
    e.preventDefault();
  });
  cart.addEventListener('click', () => {
    document.dispatchEvent(createNavigationEvent('cart'));
  });
  cart.addEventListener('mouseover', () => {
    const list = document.createElement('ul');
    list.classList.add('list-group');
    const keys = Object.keys(localStorage);

    keys.forEach((item) => {
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

    cartSummary.classList.add('cartSummary');
    cartSummary.appendChild(list);
    nav.append(cartSummary);
  });
  cart.addEventListener('mouseleave', () => {
    cartSummary.innerText = '';
    nav.removeChild(cartSummary);
  });
  nav.append(ul, cart);
  return nav;
};
export default navigation;
