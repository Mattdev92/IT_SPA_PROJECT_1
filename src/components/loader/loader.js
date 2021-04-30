const loaderComponent = () => {
  const loader = document.createElement('div');
  loader.classList.add('clearfix');
  loader.classList.add('justify-content-center');
  loader.classList.add('custom-loader');

  const spinner = document.createElement('div');
  spinner.classList.add('spinner-border');
  spinner.setAttribute('role', 'status');
  const span = document.createElement('span');
  span.classList.add('visually-hidden');

  spinner.append(span);
  loader.append(spinner);
  return loader;
};
export default loaderComponent;
