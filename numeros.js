const sumAllEven = list => {
    if( Array.isArray( list ) ){
        const array = [].concat.apply([], list)
        const lista = [].concat.apply([], array)
        const arLista = [].concat.apply([], lista)
        const nvalido = arLista.filter( l =>  Number(!isNaN(l)) ).filter( l => l != undefined )
        if( nvalido.length > 0 ){
            const pares   = nvalido.filter( n => (n % 2 == 0) )
            
            const nValido = pares.map(p => Number(p))
            return nValido.reduce((a, b)=> a + b, 0)
        }else{
            return 0
        }

    }else{
        const arLista = list.split(',')
        const nvalido = arLista.filter( l =>  Number(!isNaN(l)) ).filter( l => l != undefined )        
        if( nvalido.length > 0 ){
            const pares   = nvalido.filter( n => (n % 2 == 0) )
            
            const nValido = pares.map(p => Number(p))
            return nValido.reduce((a, b)=> a + b, 0)
        }else{
            return 0
        }
    }

}

console.log(sumAllEven(["0",[0,1,2,3,null,4],[5,[6,7,8,9,[10,11,12]]],"John"]));
console.log(sumAllEven('0,1,2,3,4'));
console.log(sumAllEven(['a','b']));
console.log(sumAllEven('a'));