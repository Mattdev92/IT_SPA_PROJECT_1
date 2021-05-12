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
  nav.append(ul, cart);
  return nav;
};
export default navigation;
