const Description = (wrapper, type) => {
  const name = document.createElement('span');
  name.classList.add('tableName');
  name.innerText = `${type}`;
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = 'Value';

  const removeButton = document.createElement('span');
  const quantity = document.createElement('span');
  li.classList.add(
    'list-group-item',
    'd-flex',
    'justify-content-between',
    'align-items-center',
    'li-custom'
  );
  removeButton.innerText = 'Remove';
  quantity.innerText = 'Quntity';

  const spanWrapper = document.createElement('div');
  spanWrapper.classList.add('spanWrapperDescription');
  spanWrapper.append(span, quantity, removeButton);
  li.append(name, spanWrapper);
  wrapper.append(li);
};
export default Description;
