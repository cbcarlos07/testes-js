var funcaoX = null
const funcaoA = n => {
    const funcaoB = c => {
        const d = c + 1
        return d
    }
    funcaoX = funcaoB
    const a = n + 2
    return funcaoB(a)
}
//funcaoB(1)
/*funcaoA(3)
*/
console.log(funcaoX(2));

