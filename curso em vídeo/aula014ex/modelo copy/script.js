function validar() {
    let nota = document.getElementById('txtn')
    let n = Number(nota.value)
    let res = document.getElementById('res')
    if (nota.value.length == 0 || n > 10 || n < 0) {
        window.alert('[ERRO] nota inválida, por favor insira novamente')
    } else{
    res.innerHTML= `parabens, sua nota é ${n}`
    }
} 
    
