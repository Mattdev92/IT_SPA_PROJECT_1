import axios from 'axios';
import loaderComponent from '../loader/loader';
import card from '../card/card';

const grid = (imageTab, name) => {
  // Create main grid structure
  const wrapper = document.createElement('div');
  wrapper.classList.add('grid');

  const title = document.createElement('h1');
  title.classList.add('sectionView_title');
  title.innerText = `Available ${name}`;

  const nav = document.querySelector('.nav');
  nav.classList.add('nav__sectionView');

  // Create scroll to funcionality
  const scrollTo = document.querySelector('.section__main');
  scrollTo.append(title);

  // Create loader before loading the page
  wrapper.append(loaderComponent());

  // Fetch data from database and load items
  axios
    .get(`http://localhost:3000/${name}`)
    .then((data) => {
      scrollTo.scrollIntoView({
        behavior: 'smooth',
      });
      return data;
    })
    .then(({ data }) => {
      setTimeout(() => {
        imageTab.map((item, i) => wrapper.append(card(item, data[i], name)));
        const loader = document.querySelector('.grid-loader');
        loader.remove();
      }, 800);
    })
    .catch((error) => {
      scrollTo.scrollIntoView({
        behavior: 'smooth',
      });
      const loader = document.querySelector('.grid-loader');
      loader.remove();
      wrapper.append('No connection with database');
      console.log(error);
    });
  return wrapper;
};
export default grid;
