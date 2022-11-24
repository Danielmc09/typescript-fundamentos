(() => {

  type ShirtSize = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: ShirtSize
  };

  const products: Product[] = []

  const addProduct = (data: Product ) => {
    products.push(data)
  }

  addProduct({
    title: 'Bread',
    createdAt: new Date(1994, 1, 0),
    stock: 12
  })

  addProduct({
    title: 'Bread',
    createdAt: new Date(1994, 1, 0),
    stock: 13,
    size: 'XL'
  })

  //products1.push(123123)

  products.push({
    title: 'Bread3',
    createdAt: new Date(1994, 1, 0),
    stock: 3,
    size: 'XL'
  })

  console.log(products)

})();
