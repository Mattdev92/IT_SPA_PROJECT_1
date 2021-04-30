const createNavigationEvent = (view) =>
  new CustomEvent('navigation', {
    detail: {
      view,
    },
  });

const navigation = () => {
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  const ul = document.createElement('ul');
  ul.classList.add('nav__list');
  const navigationElements = ['treatments', 'rooms', 'cart'];
  navigationElements.map((item) => {
    const liElement = document.createElement('li');
    liElement.classList.add('nav__list__item');
    liElement.innerHTML = item;
    ul.append(liElement);
    return null;
  });
  ul.addEventListener('click', (e) => {
    e.preventDefault();
    document.dispatchEvent(createNavigationEvent(e.target.innerHTML));
  });
  nav.append(ul);
  return nav;
};
export default navigation;
