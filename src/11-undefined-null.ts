(() => {
  let myNumber: number;
  let myString: string;

  // myNumber = undefined;;
  // myString = null;

  // no quedan de tipo null o undefined quedan como tipo any
  // let myNull = null;
  // let myUndefined = undefined;

  // definiendo el tipo si quedan como los tipos especificados
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  // ejemplo de uso la variable es tipo number pero la inicializamos en null
  let myNumber2: number | null = null;
  myNumber2 = 1;

  // ejemplo de uso la variable es tipo string pero la inicializamos en undefined
  let myString2: string | undefined = undefined;
  myString2 = 'Daniel';

  function hi(name: string | null) {
    let hello = 'Hola';
    if (name) {
      console.log(`${hello} ${name}`);
    } else {
      console.log(`${hello} nobody`);
    }
  }

  hi('Daniel');
  hi(null);

  // el signo de pregunta valida si el valor no viene null
  // es como un if abreviado es conocido como optional change = ?
  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hiV2('Daniel Mendieta');
  hiV2(null);
  
})();
