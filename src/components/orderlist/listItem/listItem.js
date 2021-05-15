import axios from 'axios';
import item from '../item/item';

const listItem = (sum, itemsInCart, id, i, sumInfo, wrapper, name) => {
  axios
    .get(`http://localhost:3000/${name}/${id}`)
    .then(({ data }) => {
      item(sum, itemsInCart, id, i, sumInfo, wrapper, name, data);
    })
    .catch((error) => {
      console.log(error);
    });
  return sum;
};
export default listItem;
