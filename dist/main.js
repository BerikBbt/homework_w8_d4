"use strict";
// import { createUser, addToCart, removeFromCart, removeQuantityFromCart, cartTotal, printCart } from './user';
// import { createItem } from './item'; 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const user = createUser('Berik Bbt', 30);
// const item1 = createItem(20, 'Item 1', 10, 'Description Apple');
// const item2 = createItem(30, 'Item 2', 15, 'Description Banana');
// const item3 = createItem(40, 'Item 3', 20, 'Description Coconut');
// const item4 = createItem(50, 'Item 4', 25, 'Description Dolphin');
// const item5 = createItem(60, 'Item 5', 30, 'Description Elephant');
// addToCart(user, item1);
// printCart(user);
// console.log('Cart Total:', cartTotal(user));
// addToCart(user, item2);
// addToCart(user, item3);
// addToCart(user, item1);
// addToCart(user, item5);
// addToCart(user, item4);
// printCart(user);
// console.log('Cart Total:', cartTotal(user));
// removeFromCart(user, item1);
// printCart(user);
// console.log('Cart Total:', cartTotal(user));
const user_1 = __importDefault(require("./user"));
const item_1 = __importDefault(require("./item"));
const user = new user_1.default('Berik');
const item1 = new item_1.default('Item 1', 25);
const item2 = new item_1.default('Item 2', 44);
user.addToCart(item1.id);
user.addToCart(item2.id);
user.printCart();
user.removeFromCart(item1.id);
user.removeQuantityFromCart(item2.id, 1);
user.printCart();
