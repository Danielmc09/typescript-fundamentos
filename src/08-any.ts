(() => {
  // Se aconseja que no sea utilizado  el any
  // por buenas practicas es mejor definir el tipo de dato
  let myDynamivVar: any;
  myDynamivVar = 100;
  myDynamivVar = 'sdadsa';
  myDynamivVar = null;
  myDynamivVar = {};
  myDynamivVar = '';

  myDynamivVar ='hola';
  // case de la variable se puede usar el as para forzarla a que se use como string
  const rta = (myDynamivVar as string).toLowerCase()
  console.log(rta);

  myDynamivVar = 123;
  // case con los llamados genericos para transformar la variable
  const rta2 = (<number>myDynamivVar).toFixed();

})();
