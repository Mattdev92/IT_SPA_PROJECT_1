const MyDate = (dateWrapper) => {
  // Get totay date and convert to proper format
  const myDate = new Date(Date.now());
  const thisYear = myDate.getUTCFullYear();
  let thisDay = myDate.getUTCDate();
  let thisMonth = myDate.getUTCMonth() + 1;
  if (thisMonth < 10) {
    thisMonth = `0${thisMonth}`;
  }
  if (thisDay < 10) {
    thisDay = `0${thisDay}`;
  }

  // Create date component structure
  dateWrapper.classList.add('dateWrapper');
  const dateStartInput = document.createElement('input');
  const dateEndInput = document.createElement('input');

  // Set start and end date according to requirememnts
  dateStartInput.setAttribute('type', 'date');
  dateStartInput.setAttribute('min', `${thisYear}-${thisMonth}-${thisDay}`);
  dateStartInput.setAttribute('value', `${thisYear}-${thisMonth}-${thisDay}`);
  dateStartInput.setAttribute('max', `${thisYear + 1}-${thisMonth}-${thisDay}`);

  dateEndInput.setAttribute('type', 'date');
  dateEndInput.setAttribute('min', `${dateStartInput.value}`);
  dateEndInput.setAttribute('value', `${dateStartInput.value}`);
  dateEndInput.setAttribute('max', `${thisYear + 1}-${thisMonth}-${thisDay}`);

  // Add event listeners
  dateStartInput.addEventListener('change', () => {
    dateEndInput.setAttribute('min', `${dateStartInput.value}`);
    dateEndInput.setAttribute('value', `${dateStartInput.value}`);
    dateEndInput.setAttribute(
      'max',
      `${thisYear + 1}-${dateStartInput.value.slice(5)}`
    );
  });

  // Add children to date component structure
  dateWrapper.append(
    `Please provide your visit start date`,
    dateStartInput,
    `Please provide your visit end date`,
    dateEndInput
  );
};

export default MyDate;
