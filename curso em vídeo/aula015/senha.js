let readLine = require('readline-sync')
let senha = 1234
let name = readLine.question('Qual seu nome? ')
let tentativas = 0

if (tentativas < 3) {
    while(tentativas < 3) {
        let wsenha = readLine.questionInt('Digite sua senha: ')
        tentativas++
        if(wsenha == senha) {
            console.log(`Seja bem vindo ${name}`)
            tentativas += 3
            } else {
            console.warn("[SENHA INCORRETA] Tente novamente")
            }
    } 
}







/*if(tentativas <= 3) {
    if(wsenha != senha) {
        console.warn('[SENHA INCORRETA] tente novamente')
        tentativas++
        return;
    } else {
        console.log(`Seja bem vindo ${name}`)
    }
} else {
    console.warin('Numero de tentativas excedido, tente novamente mais tarde!')
    return;
}*/
