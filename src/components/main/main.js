import login from '../../views/login/login';
import treatments from '../../views/treatments/treatments';
import rooms from '../../views/rooms/rooms';
import register from '../../views/register/register';
import cart from '../cart/cart';

const main = () => {
  console.log('main');
  const section = document.createElement('section');
  const defaultTitle = document.createElement('h1');
  const defaultText = 'lorem ipsum ....';
  defaultTitle.innerHTML = defaultText;
  section.append(defaultTitle);
  document.addEventListener('navigation', (e) => {
    section.innerHTML = '';
    const {
      detail: { view },
    } = e;
    switch (view) {
      case 'treatments':
        section.append(treatments());
        break;
      case 'rooms':
        section.append(rooms());
        break;
      case 'login':
        section.append(login());
        break;
      case 'register':
        section.append(register());
        break;
      case 'cart':
        section.append(cart());
        break;
      default:
        section.append('Cos poszlo nie tak');
    }
  });
  return section;
};
export default main;
