const header = () => {
  console.log('title');
  const fragment = document.createDocumentFragment();
  const title = document.createElement('h1');
  const text = 'SPA for Programmers';
  title.innerHTML = text;
  fragment.append(title);
  return fragment;
};
export default header;
