(() => {
  // podemos usar la inferencia de TypeScript para que identifique el tipo de dato
  // que lleva la variable o especificarle que tipo de datos va a permitir pues si
  // solo le ingresamo numeros en el inicio no permitira ingresar string o boolean

  let prices = [1,2,2,1,1,212];
  // prices.push('asssasas');
  // prices.push(true);
  // prices.push({});
  prices.push(12313123);

  let prices2 = [1,2,2,1,1,212, 'asdasd', true];
  prices2.push(12313123);

  let products = ['asdasd', true];
  products.push(false);

  // esto es un ejemplo de union types
  let mixed:(number | string | boolean | Object)[] = ['asdasd', true];
  mixed.push(false);
  mixed.push('asas');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  // en caso de que los datos del array sea string, la inferencia mostrara un error
  prices.map(item => item * 2);

})();
