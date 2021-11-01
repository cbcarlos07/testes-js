const converterParaQueryParam = param => {
    let obj = '?'
    Object.keys(param).forEach(item => {
        obj += `${item}=${param[item]}&` 
    })
    return obj.substr(0, obj.length - 1)
}
const URL = "www.meusite.pt"
const obj = {var: "valor", "var2": "valor 2"}
console.log( `${URL}${converterParaQueryParam(obj)}` );