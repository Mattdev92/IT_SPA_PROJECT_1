const treatments = function () {
  const fragment = document.createDocumentFragment();
  const component = document.createElement('div');
  const text = 'All treatments';
  component.innerHTML = text;
  fragment.append(component);
  return fragment;
};
export default treatments;
