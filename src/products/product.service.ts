import { Product } from './product.model';

/* Creating an empty array of type Product. */
export const products: Product[] = [];

/**
 * It takes a Product object as an argument and adds it to the products array
 * @param {Product} data - Product - this is the data that is being passed in.
 */
export const addProduct = (data: Product) => {
  products.push(data);
};

/**
 * It takes an array of objects, and returns the sum of the stock property of each object.
 * @returns The total number of stocks.
 */
export const calStocks = (): number => {
  let total = 0;
  products.forEach((item)=>{
    total += item.stock;
  });
  return total;
}
