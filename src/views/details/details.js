import detailCard from '../../components/detailCard/detailCard';

const Detail = function (section, objectData, imageUrl, type) {
  // Create title
  const title = document.createElement('h1');
  title.classList.add('titleDetail');
  title.innerText = `${objectData.name}`;

  // Add children to main detail view structure
  section.append(title, detailCard(imageUrl, objectData, type));
};
export default Detail;
