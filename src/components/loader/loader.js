const loaderComponent = (prop) => {
  // Create main structure
  const loader = document.createElement('div');
  loader.classList.add('clearfix');
  loader.classList.add('justify-content-center');

  // Change styles of loader in case of view
  if (prop === 'main') {
    loader.classList.add('custom-loader');
  } else {
    loader.classList.add('grid-loader');
  }

  // Create spinner
  const spinner = document.createElement('div');
  spinner.classList.add('spinner-border');
  spinner.setAttribute('role', 'status');
  const span = document.createElement('span');
  span.classList.add('visually-hidden');

  // Add children to loader structure
  spinner.append(span);
  loader.append(spinner);
  return loader;
};
export default loaderComponent;
