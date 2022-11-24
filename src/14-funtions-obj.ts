(() => {

  // Así se recibe un objeto
  const login = (data: {email:string, password: string}) => {
    console.log(data.email, data.password);
  }

  //login('admc@da.com', 'dadada');
  // de esta manera pasamos un objeto
  login({
    email: 'admc@da.com',
    password: 'dadada'
  });

  type ShirtSize = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = []

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: string,
    size?: ShirtSize
  }) => {
    products.push(data)
  }

  addProduct({
    title: 'Bread',
    createdAt: new Date(1994, 1, 0),
    stock: 'Bread'
  })

  addProduct({
    title: 'Bread',
    createdAt: new Date(1994, 1, 0),
    stock: 'Bread',
    size: 'XL'
  })

  console.log(products)

})();
