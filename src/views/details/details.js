import detailCard from '../../components/detailCard/detailCard';

const Detail = function (section, objectData, imageUrl) {
  console.log('From Detail componnent');
  const loader = document.querySelector('.treatments-loader');
  const someDetails = document.createElement('div');
  someDetails.innerText = `${objectData.name}`;
  section.append(detailCard(imageUrl, objectData));
  loader.remove();
};
export default Detail;
