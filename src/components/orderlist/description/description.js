const Description = (wrapper, type) => {
  // Create description structure
  const name = document.createElement('span');
  name.classList.add('tableName');
  name.innerText = `${type}`;

  // Create children elements
  const li = document.createElement('li');
  li.classList.add(
    'list-group-item',
    'd-flex',
    'justify-content-between',
    'align-items-center',
    'li-custom'
  );

  const span = document.createElement('span');
  span.innerText = 'Value';

  const removeButton = document.createElement('span');
  removeButton.innerText = 'Remove';

  const quantity = document.createElement('span');
  quantity.innerText = 'Quntity';

  const spanWrapper = document.createElement('div');
  spanWrapper.classList.add('spanWrapperDescription');

  // Add children to description structure
  spanWrapper.append(span, quantity, removeButton);
  li.append(name, spanWrapper);
  wrapper.append(li);
};
export default Description;
