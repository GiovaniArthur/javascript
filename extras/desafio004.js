function myFunction(a, b) {
    return b.match(new RegExp(a, "gi")).length
  }
  
/*function myFunction(a, b) {
    return b.split(a).length - 1
}*/


  console.log(myFunction("a", "Quantas vzes o valor de 'a' ocorre aqui?"))
  console.log(myFunction("as", "Quantas vzes o valor de 'a' ocorre aqui?"))               
  console.log(myFunction("1", "Quantas vzes o valor de 'a' ocorre aqui?"))    