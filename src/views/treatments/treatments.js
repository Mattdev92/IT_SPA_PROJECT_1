import axios from 'axios';
import Card from '../../components/card/card';
import massage from '../../assets/massage.jpg';
import madMassage from '../../assets/madMassage.jpg';
import faceMassage from '../../assets/faceMassage.jpg';
import waterExercises from '../../assets/waterExercises.jpg';

axios
  .get('http://localhost:3000/treatments')
  .then((data) => {
    // handle success
    console.log(data);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
const treatments = function () {
  const wrapper = document.createElement('div');
  wrapper.classList.add('treatments');
  // const text = 'All treatments';
  // wrapper.innerHTML = text;
  const imageTab = [massage, madMassage, faceMassage, waterExercises];
  const textTab = [
    'usuall relaxing massage',
    ' mad relaxing massage',
    'face massage',
    'water exercises',
  ];
  imageTab.map((item, i) => wrapper.append(Card(item, textTab[i])));
  return wrapper;
};
export default treatments;
