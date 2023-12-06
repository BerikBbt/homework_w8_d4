// import { Item } from './item';
// import { v4 as uuidv4 } from 'uuid';
// export type User = {
//   id: string;
//   name: string;
//   age: number;
//   cart: Item[];
  
// };


// export function createUser(name: string, age: number): User {
//   return {
//     id: uuidv4(),
//     name,
//     age,
//     cart: [],
//   };
// }
// export function addToCart(user: User, item: Item): void {
//   user.cart.push(item);
// }
// export function removeFromCart(user: User, item: Item): void {
//   user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
// }
// export function removeQuantityFromCart(user: User, item: Item, quantity: number): void {
//   const index = user.cart.findIndex((cartItem) => cartItem.id === item.id);
//   if (index !== -1) {
//     user.cart[index].quantity -= quantity;
//     if (user.cart[index].quantity <= 0) {
//       user.cart.splice(index, 1);
//     }
//   }
// }
// export function cartTotal(user: User): number {
//   return user.cart.reduce((total, item) => total + item.price, 0);
// }
// export function printCart(user: User): void {
//   console.log('User Cart:');
//   user.cart.forEach((item) => {
//     console.log(`- ${item.name}: $${item.price}`);
//   });
// }





import { v4 as uuidv4 } from 'uuid';

class User {
  id: string;
  name: string;
  cart: string[];

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
    this.cart = [];
  }

  addToCart(itemId: string) {
    this.cart.push(itemId);
  }

  removeFromCart(itemId: string) {
    this.cart = this.cart.filter(item => item !== itemId);
  }

  removeQuantityFromCart(itemId: string, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      this.removeFromCart(itemId);
    }
  }

  printCart() {
    console.log(`User: ${this.name}'s Cart:`);
    this.cart.forEach(itemId => {
      console.log(`- Item ID: ${itemId}`);
    });
  }
}

export default User;