import detailCard from '../../components/detailCard/detailCard';

const Detail = function (section, objectData, imageUrl, type) {
  console.log('From Detail componnent');
  const loader = document.querySelector('.treatments-loader');
  const someDetails = document.createElement('div');
  someDetails.innerText = `${objectData.name}`;
  section.append(detailCard(imageUrl, objectData, type));
  loader.remove();
};
export default Detail;
