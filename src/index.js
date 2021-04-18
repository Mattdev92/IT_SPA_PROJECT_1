import './css/index.scss';
import navigation from './components/navigation/navigation';
import header from './components/header/header';
import main from './components/main/main';
import footer from './components/footer/footer';
// import 'bootstrap/dist/css/bootstrap.css';
// const myIcon = new Image();
// myIcon.src = Icon;
// document.querySelector('div').appendChild(myIcon);
document.addEventListener('DOMContentLoaded', () => {
  console.log('content loaded');
  const body = document.querySelector('body');
  body.append(navigation(), header(), main(), footer());
});
