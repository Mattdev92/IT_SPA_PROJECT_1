import { Carousel } from 'bootstrap';
import SPA1 from '../../assets/1.jpg';
import SPA2 from '../../assets/2.jpg';
import SPA3 from '../../assets/3.jpg';

const carouselComponent = () => {
  const carousel = document.createElement('div');
  carousel.id = 'myCarousel';
  carousel.classList.add('carousel');
  carousel.classList.add('slide');
  carousel.setAttribute('data-bs-ride', 'carousel');
  const wrapper = document.createElement('div');
  wrapper.classList.add('carousel-inner');
  const item1 = document.createElement('div');
  item1.classList.add('carousel-item');
  item1.classList.add('active');
  const item2 = document.createElement('div');
  item2.classList.add('carousel-item');
  const item3 = document.createElement('div');
  item3.classList.add('carousel-item');

  wrapper.append(item1, item2, item3);
  carousel.append(wrapper);
  const myImage1 = new Image();
  myImage1.src = SPA1;
  myImage1.classList.add('d-block');
  myImage1.classList.add('w-100');
  myImage1.classList.add('custom_carousel_slider');

  const myImage2 = new Image();
  myImage2.src = SPA2;
  myImage2.classList.add('d-block');
  myImage2.classList.add('w-100');
  myImage2.classList.add('custom_carousel_slider');
  const myImage3 = new Image();
  myImage3.src = SPA3;
  myImage3.classList.add('d-block');
  myImage3.classList.add('w-100');
  myImage3.classList.add('custom_carousel_slider');
  const tab = [myImage1, myImage2, myImage3];

  const carouselCollection = wrapper.children;

  const carousell = Array.from(carouselCollection);
  carousell.map((item, i) => item.append(tab[i]));

  const myCarousel = new Carousel(carousel, {
    interval: 4000,
    wrap: true,
  });
  return carousel;
};
export default carouselComponent;
