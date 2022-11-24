(() => {

  type ShirtSize = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title:string,
    createdAt: Date,
    stock: number,
    size: ShirtSize

  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const products1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(products1)
  console.log(products1.title)
  console.log(products1.createdAt)
  console.log(products1.stock)

  // las arrayFunction son las más utilzadas actualmente, function tiene
  // un problema con el this y en arrayFunction esto esta solucionado
  // podemos pasar ? para que el size sea opcional o cualquier variable
  const createProductToJsonV2 =(
    title?:string,
    createdAt?: Date,
    stock?: number,
    size?: ShirtSize

  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const products2 = createProductToJsonV2('P2', new Date(), 24);
  console.log(products2)
  console.log(products2.title)
  console.log(products2.createdAt)
  console.log(products2.stock)

})();
