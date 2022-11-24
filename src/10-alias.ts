(() => {
  // vamos a crear nuestros propios tipos
  // ya no necesitariamos definir el tipo en la variable
  // solo llamariamos la variable que define nuestro tipos

  type UserId = string | number;

  let userId: UserId;

  function greeting(userId: UserId) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    } else {
      console.log(`number ${userId.toFixed(1)}`);
    }
  }

  // Manera incorrecta
  let shirtSize: string;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  // Manera correcta
  type ShirtSize2 = 'S' | 'M' | 'L' | 'XL';
  let shirtSize2: ShirtSize2;
  // Solo podemos usar los datos declarados en la variable

  function greeting2(userId: UserId, shirtSize2: ShirtSize2) {
    if (typeof userId === 'string') {
      console.log(`
        userID ${userId.toLowerCase()}
        shirtSize2 ${shirtSize2}
       `);
    }
  }

  greeting2(123123, 'M');
  greeting2('123123', 'M');
})();
