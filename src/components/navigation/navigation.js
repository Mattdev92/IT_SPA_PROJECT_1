import Logo from '../../assets/logo.png';
import Cart from '../../assets/cart.png';
import createNavigationEvent from './navigation-event';
import cartView from './cartViev/cartView';

const navigation = () => {
  // Create navigation structure
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  const ul = document.createElement('ul');
  ul.classList.add('nav__list');

  // Create navigation elements
  const logo = new Image();
  logo.src = Logo;
  logo.classList.add('logo');

  const cart = new Image();
  cart.src = Cart;
  cart.classList.add('cart');

  const navigationElements = ['treatments', 'rooms'];
  const cartSummary = document.createElement('div');

  // Add event listeners
  logo.addEventListener('click', () => {
    const top = document.querySelector('body');
    top.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    nav.classList.remove('nav__sectionView');
    document.dispatchEvent(createNavigationEvent('defaultview'));
  });

  ul.addEventListener('click', (e) => {
    document.dispatchEvent(createNavigationEvent(e.target.innerHTML));
    e.preventDefault();
  });

  cart.addEventListener('click', () => {
    document.dispatchEvent(createNavigationEvent('cart'));
  });

  cart.addEventListener('mouseover', () => {
    nav.append(cartView(cartSummary));
  });

  cart.addEventListener('mouseleave', () => {
    cartSummary.innerText = '';
    nav.removeChild(cartSummary);
  });

  // Add children to Navigation structure
  navigationElements.forEach((item) => {
    const liElement = document.createElement('li');
    liElement.classList.add('nav__list__item');
    liElement.innerHTML = item;
    ul.append(liElement);
  });
  nav.append(logo, ul, cart);
  return nav;
};
export default navigation;
