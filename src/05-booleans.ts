(() => {
  let isEnable = true;
  isEnable = false;

  let isNew: boolean = false;
  console.log('isNew', isNew)
  isNew = true;
  console.log('isNew', isNew)

  const random = Math.random();
  console.log(random)
  // se puede escribir así
  isNew = random >= 0.5;
  // o así
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew)

  const myBoolean: boolean = false;
})();
