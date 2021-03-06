import axios from 'axios';

export const equalPassword = (password, repeatedPassword) => {
  if (password === repeatedPassword) {
    return true;
  }
  const errorTitle = document.querySelector('.errorTitle');
  errorTitle.innerText = 'Passwords not equal';
  return false;
};

export const passwordLength = (password) => {
  if (password.length >= 6) {
    return true;
  }
  const errorTitle = document.querySelector('.errorTitle');
  errorTitle.innerText = 'Password is too short';
  return false;
};

export const empty = (
  password = '',
  name = '',
  repeatedPassword = 'none',
  email = 'none'
) => {
  if (
    password === '' ||
    name === '' ||
    email === '' ||
    repeatedPassword === ''
  ) {
    const errorTitle = document.querySelector('.errorTitle');
    errorTitle.innerText = 'One of the field is empty';
    return false;
  }
  return true;
};

export const emailValidation = (email) => {
  if (email.includes('@')) {
    return true;
  }
  const errorTitle = document.querySelector('.errorTitle');
  errorTitle.innerText = 'Not proper email structure';
  return false;
};

export const emailExist = async (emaill) => {
  if (emaill !== '') {
    const { data } = await axios.get('http://localhost:3000/users/');
    console.log(data);
    let desontexist = true;
    data.forEach((item) => {
      console.log(item.email);
      if (item.email === emaill) {
        desontexist = false;
        const errorTitle = document.querySelector('.errorTitle');
        errorTitle.innerText = 'Email already exist';
        console.log(desontexist);
      }
    });
    return desontexist;
  }
  return false;
};
