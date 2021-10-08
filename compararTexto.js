const moment = require('moment')
const ANO = 31622400
const MES = 2628000
const DIA = (60 * 60) * 24
const HORA = 60 * 60
const MINUTO = 60
const SEGUNDO = 1
const regexList = [
    {regex: /^([0-9])a$/, time: [ANO] },
    {regex: /^([0-9])a(0?[1-9]|[0-1][0-2]|12)m$/, time: [ANO, MES] },
    {regex: /^([0-9])a(0?[1-9]|[0-1][0-2]|12)m(\d|[12]\d|3[01])d$/, time: [ANO, MES, DIA] },
    {regex: /^([0-9])a(0?[1-9]|[0-1][0-2]|12)m(\d|[12]\d|3[01])d(0?[1-9]|[1-5][0-9]|60)h$/, time: [ANO, MES,HORA] },
    {regex: /^([0-9])a(0?[1-9]|[0-1][0-2]|12)m(\d|[12]\d|3[01])d(0?[1-9]|[1-5][0-9]|60)h(0?[1-9]|[1-5][0-9]|60)min$/, time: [ANO, MES, HORA, MINUTO] },
    {regex: /^([0-9])a(0?[1-9]|[0-1][0-2]|12)m(\d|[12]\d|3[01])d(0?[1-9]|[1-5][0-9]|60)h(0?[1-9]|[1-5][0-9]|60)min(0?[1-9]|[1-5][0-9]|60)s$/, time: [ANO, MES, HORA, MINUTO, SEGUNDO] },
    {regex: /^(0?[1-9]|[0-1][0-2]|12)m$/, time: [MES] },
    {regex: /^(0?[1-9]|[0-1][0-2]|12)m(\d|[12]\d|3[01])d$/, time: [MES, DIA]},
    {regex: /^(0?[1-9]|[0-1][0-2]|12)m(\d|[12]\d|3[01])d(0?[1-9]|[1-5][0-9]|60)h$/, time: [MES, DIA, HORA]},
    {regex: /^(0?[1-9]|[0-1][0-2]|12)m(\d|[12]\d|3[01])d(0?[1-9]|[1-5][0-9]|60)h(0?[1-9]|[1-5][0-9]|60)min$/, time: [MES,  DIA, HORA,  MINUTO ]},
    {regex: /^(0?[1-9]|[0-1][0-2]|12)m(\d|[12]\d|3[01])d(0?[1-9]|[1-5][0-9]|60)h(0?[1-9]|[1-5][0-9]|60)min(0?[1-9]|[1-5][0-9]|60)s$/, time: [MES, DIA, HORA, MINUTO, SEGUNDO] },
    {regex: /^(\d|[12]\d|3[01])d$/, time: [DIA] },
    {regex: /^(\d|[12]\d|3[01])d(0?[1-9]|[1-5][0-9]|60)h$/, time: [DIA, HORA] },
    {regex: /^(\d|[12]\d|3[01])d(0?[1-9]|[1-5][0-9]|60)h(0?[1-9]|[1-5][0-9]|60)min$/, time: [DIA, HORA, MINUTO]},
    {regex: /^(\d|[12]\d|3[01])d(0?[1-9]|[1-5][0-9]|60)h(0?[1-9]|[1-5][0-9]|60)min(0?[1-9]|[1-5][0-9]|60)s$/, time: [DIA, HORA, MINUTO,  SEGUNDO]},
    {regex: /^(0?[1-9]|[1-5][0-9]|60)h$/, time: [ HORA]},
    {regex: /^(0?[1-9]|[1-5][0-9]|60)h(0?[1-9]|[1-5][0-9]|60)min$/, time: [ HORA, MINUTO] },
    {regex: /^(0?[1-9]|[1-5][0-9]|60)h(0?[1-9]|[1-5][0-9]|60)min(0?[1-9]|[1-5][0-9]|60)s$/, time: [HORA, MINUTO, SEGUNDO] },
    {regex: /^(0?[1-9]|[1-5][0-9]|60)min$/, time: [MINUTO]},
    {regex: /^(0?[1-9]|[1-5][0-9]|60)min(0?[1-9]|[1-5][0-9]|60)s$/, time: [MINUTO, SEGUNDO]},
    {regex: /^(0?[1-9]|[1-5][0-9]|60)s$/ ,time: [SEGUNDO]},
]
const horaEhValida = tempo =>{
    const verifica = regexList.some(s => s.regex.test(tempo))
    return verifica
}

const converterParaSegundos = tempo => {
    const t = [tempo]
    const separarSomenteNumeros = t[0].match(/\d+/gi).map(Number);
   
    const obterTempo = regexList.filter(s => s.regex.test(tempo)).map(t => t.time)
    const juntarSubArray = [].concat.apply([], obterTempo)    
   
    const total = juntarSubArray.map((a, i) => a * separarSomenteNumeros[i]).reduce((prev, value) => prev + value,0)
    return total
}

const converterPara = tempo => {
    var year = 0
    var day = 0
    var month = 0
    var hours = 0
    var minutes = 0
    var seconds = 0
    var ano = ''
    var mes = ''
    var dia = ''
    var hora = ''
    var min = ''
    var sec = ''
    //console.log('dia', DIA);
    //console.log('MES', MES);
    const duration = moment.duration(tempo, 'seconds').locale('pt-br');

    //console.log(moment.duration(tempo, "seconds").locale("en").humanize()); 
    year = duration.years()
    month = duration.months()
    day = duration.days() 
    //console.log('hora',duration.hours() - 14);
    hours = duration.hours()
    minutes = duration.minutes()
    seconds = duration.seconds()
    
    if( duration.years() > 0 ){
        ano = `${year}a`
    }

    if( month > 0 ){
        mes = `${month}m`
    }

    if( day > 0 ){
        dia = `${day}d`
    }

    if( hours > 0 ){
        hora = `${hours}h`
    }

    if( minutes > 0 ){
        min = `${minutes}min`
    }

    if( seconds > 0 ){
        sec = `${seconds}s`
    }

    return `${ano}${mes}${dia}${hora}${min}${sec}`

    
}

//REAL SITUATION
//const tempo = '5min4s'
//const tempo = '6m22d11h'


const tempo = '1a'
//const tempo = '1a5m'
//const tempo = '5m1d1h30min'
//const tempo = '5m1d1h30min5s'
//const tempo = '1m' //validacao apenas mes
//const tempo = '11m25d' //validacao mes e dia --> error
//const tempo = '10m25d7h' //validacao mes dia hora --> error
//const tempo = '11m25d12h59min' //validacao mes dia hora minuto
//const tempo = '11m25d9h59min2s' //validacao mes dia hora segundo
//const tempo = '26d' //validacao dia
//const tempo = '22d3h' //validacao dia hora
//const tempo = '29d3h' //validacao dia hora
//const tempo = '26d3h30min' //validacao dia hora minuto
//const tempo = '25d3h30min10s' //validacao dia hora minuto segundo
//const tempo = '3h' //validacao hora
//const tempo = '3h35min' //validacao hora minuto
//const tempo = '3h35min50s' //validacao hora minuto segundo
//const tempo = '35min' //validacao minuto
//const tempo = '35min12s' //validacao minuto
//const tempo = '12s' //validacao segundo
//console.log( 'validar',horaEhValida( tempo ) );
//console.log( 'time',converterParaSegundos( tempo ) );
console.log('---> ', tempo);
const sec = converterParaSegundos( tempo )

console.log( 'tempo',converterPara( sec ) );

