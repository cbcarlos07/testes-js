const passwordValid = pass => {
    const regex = /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)).{8,}/
    return regex.test( pass )
}

console.log('senha', passwordValid('12345678Aa#'));