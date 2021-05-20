import axios from 'axios';
import User from '../../assets/user.png';
import { empty } from '../../helperFunctions/check';

const login = function () {
  // Create elements
  const container = document.createElement('div');
  container.classList.add('container', 'register-form');

  const form = document.createElement('form');
  form.classList.add('form');

  const note = document.createElement('div');
  note.classList.add('note');

  const paragraph = document.createElement('p');
  paragraph.innerText = 'Login Panel';

  note.append(paragraph);
  form.append(note);

  const formContent = document.createElement('div');
  formContent.classList.add('form-content', 'custom-content');

  const formGroup1 = document.createElement('div');
  formGroup1.classList.add('form-group');

  const formGroup2 = document.createElement('div');
  formGroup2.classList.add('form-group');

  const name = document.createElement('input');
  name.classList.add('form-control');

  const number = document.createElement('input');
  number.classList.add('form-control');

  const password = document.createElement('input');
  password.classList.add('form-control');

  const logInButton = document.createElement('button');
  logInButton.classList.add('logIn');
  logInButton.setAttribute('type', 'button');
  logInButton.innerText = 'Log in';

  // Create structure
  const groupTab = [formGroup1, formGroup2];
  const inputTab = [name, number, password];
  const placeholderTab = ['Your name *', 'Password'];
  placeholderTab.forEach((item, i) => {
    inputTab[i].setAttribute('placeholder', item);
    inputTab[i].setAttribute('value', '');
    groupTab[i].append(inputTab[i]);
  });
  const errorTitle = document.createElement('h2');
  errorTitle.innerText = 'Please fill all the fields';
  errorTitle.classList.add('errorTitle');
  formContent.append(formGroup1, formGroup2, errorTitle, logInButton);
  form.append(formContent);
  container.append(form);
  const ipnutNames = ['name', 'password'];
  const actualValues = {
    name: '',
    password: '',
  };

  // Event listeners
  inputTab.forEach((item, i) =>
    item.addEventListener('change', (e) => {
      actualValues[`${ipnutNames[i]}`] = e.target.value;
      console.log(actualValues);
    })
  );
  logInButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (empty(actualValues.name, actualValues.password)) {
      axios
        .get('http://localhost:3000/users')
        .then(({ data }) => {
          data.forEach((item) => {
            if (
              item.name === actualValues.name &&
              item.password === actualValues.password
            ) {
              const loginAvatar = document.querySelector('.register');
              loginAvatar.src = User;
              const wrapper = document.createElement('div');
              wrapper.classList.add('congratWrapper');
              container.innerText = '';
              const congratTitle = document.createElement('h1');
              congratTitle.classList.add('congratTitle');
              congratTitle.innerText = 'Congratulation ! You are loged-in';
              wrapper.append(congratTitle);
              container.append(wrapper);
            }
            errorTitle.innerText = `Something is wrong. Check user name or password`;
          });
        })
        .catch((error) => console.log(error));
    }
  });
  return container;
};
export default login;
