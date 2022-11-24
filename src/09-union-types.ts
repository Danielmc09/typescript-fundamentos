(() => {
  let userId: string | number;
  userId = 123;
  console.log(userId);
  userId = 'userId';
  console.log(userId);

  // Poedmos recibir una variable que sea tipo string o number
  // y en base a eso hacer la operación que necesitemos
  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    }else{
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  
  greeting('Daniel');
  greeting(123.12421412412);

})();
