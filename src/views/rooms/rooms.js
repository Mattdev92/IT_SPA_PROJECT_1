const rooms = function () {
  const fragment = document.createDocumentFragment();
  const component = document.createElement('div');
  component.innerHTML = 'Available rooms';
  fragment.append(component);
  return fragment;
};
export default rooms;
