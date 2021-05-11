import detailCard from '../../components/detailCard/detailCard';

const Detail = function (section, objectData, imageUrl, type) {
  console.log('From Detail componnent');
  const loader = document.querySelector('.treatments-loader');
  const title = document.createElement('h1');
  title.classList.add('titleDetail');
  title.innerText = `${objectData.name}`;
  section.append(title, detailCard(imageUrl, objectData, type));
  loader.remove();
};
export default Detail;
