const header = () => {
  const headerComponent = document.createElement('header');
  const title = document.createElement('h1');
  const text = 'SPA for Programmers';
  title.innerHTML = text;
  headerComponent.append(title);
  return headerComponent;
};
export default header;
