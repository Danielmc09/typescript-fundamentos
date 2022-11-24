(() => {

  const calcTotal = (prices: number[]) => {
    let total = 0;
    prices.forEach((item: number) => {
      total += item;
    });
    return total = total >= 5 ? total : 0;
  }

  const rta = calcTotal([1,2,4])
  console.log(rta)

  // void es el tipo de las funciones que no retornan nada
  // ejecutan algo por dentro pero no retornan nada
  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices)
    console.log(`El total ${rta}`)
  }

  printTotal([1,2,3]);

})();
