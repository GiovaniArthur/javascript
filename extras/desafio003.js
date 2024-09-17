function getText(fullname, flag) {
  const parts = fullname.split(" ")
  return flag.length == 0 || parts.length <=1 ? fullname : flag ==="firstname" ? parts[0] : parts.slice(1).join(" ")
  
  /*if (flag.length == 0 || parts.length <= 1) {
    return fullname
  } else {
    if (flag === "firstname") {
      return parts[0]
    } else if (flag === "lastname"){
      return parts.slice(1).join(" ")
    }
  }*/
}

console.log(getText("Jhon Williams Smith", "firstname"))
console.log(getText("Jhon Williams Smith", "lastname"))
console.log(getText("Jhon Williams Smith"))
console.log(getText("Jhon", "firstname"))