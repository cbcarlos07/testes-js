const usinaData = [
    {
      time_h: 5.333333333333333,
      tensao_V: 550.9,
      corrente_A: 0,
      potencia_kW: 0,
      temperatura_C: 26.2
    },
    {
      time_h: 5.416666666666667,
      tensao_V: 623.2,
      corrente_A: 0,
      potencia_kW: 0,
      temperatura_C: 29.1
    },
    {
      time_h: 5.5,
      tensao_V: 635,
      corrente_A: 0,
      potencia_kW: 0.254,
      temperatura_C: 30.3
    },
    {
      time_h: 5.583333333333333,
      tensao_V: 578.2,
      corrente_A: 0,
      potencia_kW: 0.636,
      temperatura_C: 32.4
    },
    {
      time_h: 5.666666666666667,
      tensao_V: 577.7,
      corrente_A: 0,
      potencia_kW: 0.924,
      temperatura_C: 33.6
    },
    {
      time_h: 5.75,
      tensao_V: 612.7,
      corrente_A: 0,
      potencia_kW: 1.347,
      temperatura_C: 34.5
    }
  ]

  /*usinaData.forEach(obj => {
    var time = obj.time_h;
    const hours = Math.floor(obj.time_h);
    const decimal = time - hours;
    const minutes = Math.floor(decimal*60);
    const total = hours + ':' + minutes;
    obj.time_h = total;
  })

  console.log(usinaData);
  */
  const usinaData1 = usinaData.map(obj => {
        var time = obj.time_h;
        const hours = Math.floor(obj.time_h);
        const decimal = time - hours;
        const minutes = Math.floor(decimal*60);
        const total = hours + ':' + minutes;
        obj.time_h = total;
    return obj
})

console.log(usinaData1);

  