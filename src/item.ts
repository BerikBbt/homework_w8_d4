// import { v4 as uuidv4 } from 'uuid';
// export type Item = {
//   quantity: number;
//   id: string;
//   name: string;
//   price: number;
//   description: string;
// };
// export function createItem(quantity: number, name: string, price: number, description: string): Item {
//     return {
//     quantity,
//     id: uuidv4(),
//     name,
//     price,
//     description,
//   };
// }

// console.log(createItem(7, "apple", 25, "sweet"))





import { v4 as uuidv4 } from 'uuid';

class Item {
  id: string;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
  }
}

export default Item;