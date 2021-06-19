import products from "../../products.json";

export const shuffle = () => {
  let array = products

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  array = array.slice(0,16)

  return array;
};
