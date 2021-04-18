import login from '../../views/login/login';
import treatments from '../../views/treatments/treatments';
import rooms from '../../views/rooms/rooms';
import register from '../../views/register/register';
import cart from '../cart/cart';

const main = () => {
  console.log('main');
  const section = document.createElement('section');
  document.addEventListener('navigation', (e) => {
    const {
      detail: { view },
    } = e;
    switch (view) {
      case 'home':
        section.empty().append(treatments());
        break;
      case 'rooms':
        section.empty().append(rooms());
        break;
      case 'login':
        section.empty().append(login());
        break;
      case 'register':
        section.empty().append(register());
        break;
      case 'cart':
        section.empty().append(cart());
        break;
      default:
        section.empty().append('Coś poszło nie tak :-(');
    }
    return section;
  });
};
export default main;
