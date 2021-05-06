import axios from 'axios';
import Card from '../../components/card/card';
import massage from '../../assets/massage.jpg';
import madMassage from '../../assets/madMassage.jpg';
import faceMassage from '../../assets/faceMassage.jpg';
import waterExercises from '../../assets/waterExercises.jpg';
import manicure from '../../assets/manicure.jpg';
import pedicure from '../../assets/pedicure.jpg';
import coffee from '../../assets/coffee.jpg';
import loaderComponent from '../../components/loader/loader';

const treatments = function () {
  const wrapper = document.createElement('div');
  const scrollTo = document.querySelector('.section__main');
  const nav = document.querySelector('.nav');
  nav.classList.add('nav__sectionView');
  wrapper.classList.add('treatments');
  const title = document.createElement('h1');
  title.classList.add('sectionView_title');
  title.innerText = 'Available treatments';
  scrollTo.append(title);
  wrapper.append(loaderComponent());
  const imageTab = [
    massage,
    madMassage,
    faceMassage,
    waterExercises,
    manicure,
    pedicure,
    coffee,
  ];
  axios
    .get('http://localhost:3000/treatments')
    .then((data) => {
      scrollTo.scrollIntoView({
        behavior: 'smooth',
      });
      return data;
    })
    .then(({ data }) => {
      setTimeout(() => {
        imageTab.map((item, i) => wrapper.append(Card(item, data[i].name)));
        const loader = document.querySelector('.treatments-loader');
        loader.remove();
      }, 1000);
    })
    .catch((error) => {
      wrapper.append('No connection with database');
      console.log(error);
    });
  return wrapper;
};
export default treatments;
