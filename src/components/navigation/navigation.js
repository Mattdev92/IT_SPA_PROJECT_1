const createNavigationEvent = (view) =>
  new CustomEvent('navigation', {
    detail: {
      view,
    },
  });
const navigation = () => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const navigationElements = ['Treatments', 'Rooms', 'Cart'];
  navigationElements.map((item) => {
    const liElement = document.createElement('li');
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
