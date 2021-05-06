import './css/index.scss';
import navigation from './components/navigation/navigation';
import header from './components/header/header';
import main from './components/main/main';
import footer from './components/footer/footer';
import carouselComponent from './components/carousel/carousel';
import loaderComponent from './components/loader/loader';

document.addEventListener('DOMContentLoaded', () => {
  console.log('content loaded');
  const root = document.querySelector('#root');
  root.append(loaderComponent('main'));
  root.append(carouselComponent());
  setTimeout(() => {
    root.append(navigation(), header(), main(), footer());
    const loader = document.querySelector('.custom-loader');
    loader.remove();
  }, 200);
});
