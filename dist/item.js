"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(createItem(7, "apple", 25, "sweet"))
const uuid_1 = require("uuid");
class Item {
    constructor(name, price) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.price = price;
    }
}
exports.default = Item;
