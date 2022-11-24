import { products, addProduct, calStocks} from './product.service';

addProduct({
  name: 'Prod1',
  createdAt: new Date(1994, 1, 0),
  stock: 12
})

addProduct({
  name: 'Prod2',
  createdAt: new Date(1994, 1, 0),
  stock: 13,
  size: 'XL'
})

console.log(products);
const total = calStocks();
console.log(`El total de productos en Stock es: ${total}`);
