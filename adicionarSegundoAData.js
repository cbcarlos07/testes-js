const adicionarSegundos = seconds => {
    const now = new Date('2021-09-20 11:51:45')
    now.setSeconds( now.getSeconds() + seconds )
    return now
}
console.log(3600 * 24);
console.log(adicionarSegundos(3600 * 24));