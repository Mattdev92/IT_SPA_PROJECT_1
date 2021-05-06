import Logo from '../../assets/logo.png';

const createNavigationEvent = (view) =>
  new CustomEvent('navigation', {
    detail: {
      view,
    },
  });

const navigation = () => {
  const logo = new Image();
  logo.src = Logo;
  logo.classList.add('logo');
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  const ul = document.createElement('ul');
  ul.classList.add('nav__list');
  nav.append(logo);
  const navigationElements = ['treatments', 'rooms', 'cart'];
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
  nav.append(ul);
  return nav;
};
export default navigation;
