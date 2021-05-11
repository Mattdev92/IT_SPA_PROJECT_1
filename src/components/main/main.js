import login from '../../views/login/login';
import treatments from '../../views/treatments/treatments';
import rooms from '../../views/rooms/rooms';
import register from '../../views/register/register';
import cart from '../cart/cart';
import DefaultView from '../../views/defaultview/defaultview';

const main = () => {
  const section = document.createElement('section');
  section.classList.add('section');

  const emptySpace = document.createElement('div');
  emptySpace.classList.add('section__empty');

  const mainSection = document.createElement('div');
  mainSection.classList.add('section__main');

  const defaultTitle = document.createElement('h1');
  const defaultText = 'Welcome in wonderfull place for Programmers';
  defaultTitle.innerHTML = defaultText;
  mainSection.append(defaultTitle, DefaultView());
  section.append(emptySpace, mainSection);
  document.addEventListener('navigation', (e) => {
    mainSection.innerHTML = '';
    const {
      detail: { view },
    } = e;
    switch (view) {
      case 'treatments':
        mainSection.append(treatments());
        break;
      case 'rooms':
        mainSection.append(rooms());
        break;
      case 'login':
        mainSection.append(login());
        break;
      case 'register':
        mainSection.append(register());
        break;
      case 'cart':
        mainSection.append(cart());
        break;
      case 'defaultview':
        mainSection.append(defaultTitle, DefaultView());
        break;
      default:
        mainSection.append('Cos poszlo nie tak');
    }
  });
  return section;
};
export default main;
