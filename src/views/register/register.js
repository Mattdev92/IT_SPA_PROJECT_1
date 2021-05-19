import axios from 'axios';
import createNavigationEvent from '../../components/navigation/navigation-event';
import { empty, equalPassword, passwordLength, emailValidation } from './check';

const uuidv4 = require('uuid/v4');

const register = function () {
  // Create elements
  const container = document.createElement('div');
  container.classList.add('container', 'register-form');

  const form = document.createElement('form');
  form.classList.add('form');

  const note = document.createElement('div');
  note.classList.add('note');

  const paragraph = document.createElement('p');
  paragraph.innerText = 'Registration Panel';

  note.append(paragraph);
  form.append(note);

  const formContent = document.createElement('div');
  formContent.classList.add('form-content');

  const row = document.createElement('row');
  row.classList.add('row');

  const colMD = document.createElement('div');
  colMD.classList.add('col-md-6');

  const colMD2 = document.createElement('div');
  colMD2.classList.add('col-md-6');

  const formGroup1 = document.createElement('div');
  formGroup1.classList.add('form-group');

  const formGroup2 = document.createElement('div');
  formGroup2.classList.add('form-group');

  const formGroup3 = document.createElement('div');
  formGroup3.classList.add('form-group');

  const formGroup4 = document.createElement('div');
  formGroup4.classList.add('form-group');

  const name = document.createElement('input');
  name.classList.add('form-control');
  name.setAttribute('required', 'true');

  const email = document.createElement('input');
  email.classList.add('form-control');
  email.setAttribute('required', 'true');
  email.setAttribute('type', 'email');

  const password = document.createElement('input');
  password.classList.add('form-control');
  password.setAttribute('required', 'true');
  password.setAttribute('type', 'password');

  const repeatedPassword = document.createElement('input');
  repeatedPassword.classList.add('form-control');
  repeatedPassword.setAttribute('required', 'true');
  repeatedPassword.setAttribute('type', 'password');

  const registerButton = document.createElement('button');
  registerButton.classList.add('btnSubmit');
  registerButton.setAttribute('type', 'submit');
  registerButton.innerText = 'Register';

  const logInButton = document.createElement('button');
  logInButton.classList.add('logIn');
  logInButton.setAttribute('type', 'button');
  logInButton.innerText = 'Login Panel';
  logInButton.addEventListener('click', (e) => {
    document.dispatchEvent(createNavigationEvent('login'));
    e.preventDefault();
  });

  // Create structure
  const groupTab = [formGroup1, formGroup2, formGroup3, formGroup4];
  const inputTab = [name, email, password, repeatedPassword];
  const placeholderTab = [
    'Your name *',
    'Your Email *',
    'Your Password *',
    'Confirm Password *',
  ];
  placeholderTab.forEach((item, i) => {
    inputTab[i].setAttribute('placeholder', item);
    inputTab[i].setAttribute('value', '');
    groupTab[i].append(inputTab[i]);
  });
  colMD.append(formGroup1, formGroup2);
  colMD2.append(formGroup3, formGroup4);
  row.append(colMD, colMD2);
  formContent.append(row, registerButton, logInButton);
  form.append(formContent);
  container.append(form);

  // Registration functonality - set actual input values
  const errorTitle = document.createElement('h2');
  errorTitle.innerText = 'Please fill all the fields';
  errorTitle.classList.add('errorTitle');
  row.append(errorTitle);
  const ipnutNames = ['name', 'email', 'password', 'repeatedPassword'];
  const actualValues = {
    name: '',
    email: '',
    password: '',
    repeatedPassword: '',
  };
  inputTab.forEach((item, i) =>
    item.addEventListener('change', (e) => {
      actualValues[`${ipnutNames[i]}`] = e.target.value;
      console.log(actualValues);
    })
  );

  // Add event listeners
  registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      empty(
        actualValues.password,
        actualValues.name,
        actualValues.repeatedPassword,
        actualValues.email
      ) &&
      emailValidation(actualValues.email) &&
      equalPassword(actualValues.password, actualValues.repeatedPassword) &&
      passwordLength(actualValues.password)
    ) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/',
        data: {
          name: actualValues.name,
          email: actualValues.email,
          password: actualValues.password,
          id: uuidv4(),
        },
      });
      const wrapper = document.createElement('div');
      wrapper.classList.add('congratWrapper');
      container.innerText = '';
      const congratTitle = document.createElement('h1');
      congratTitle.classList.add('congratTitle');
      congratTitle.innerText = 'Congratulation ! You are registered';
      wrapper.append(congratTitle, logInButton);
      container.append(wrapper);
    }
  });

  // Scroll to register view in main section
  const scrollTo = document.querySelector('.section__main');
  scrollTo.scrollIntoView({
    behavior: 'smooth',
  });
  return container;
};
export default register;
