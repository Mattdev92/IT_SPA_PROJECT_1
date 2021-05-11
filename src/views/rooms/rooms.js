import axios from 'axios';
import Card from '../../components/card/card';
import room4 from '../../assets/room4.jpg';
import room1 from '../../assets/room1.jpg';
import room2 from '../../assets/room2.jpg';
import room3 from '../../assets/room3.jpg';
import loaderComponent from '../../components/loader/loader';

const rooms = function () {
  const wrapper = document.createElement('div');
  const scrollTo = document.querySelector('.section__main');
  const nav = document.querySelector('.nav');
  nav.classList.add('nav__sectionView');
  wrapper.classList.add('treatments');
  const title = document.createElement('h1');
  title.classList.add('sectionView_title');
  title.innerText = 'Available Rooms';
  scrollTo.append(title);
  wrapper.append(loaderComponent());
  const imageTab = [room1, room2, room3, room4];
  axios
    .get('http://localhost:3000/rooms')
    .then((data) => {
      scrollTo.scrollIntoView({
        behavior: 'smooth',
      });
      return data;
    })
    .then(({ data }) => {
      setTimeout(() => {
        imageTab.map((item, i) => wrapper.append(Card(item, data[i], 'rooms')));
        const loader = document.querySelector('.treatments-loader');
        loader.remove();
      }, 800);
    })
    .catch((error) => {
      wrapper.append('No connection with database');
      console.log(error);
    });
  return wrapper;
};
export default rooms;
