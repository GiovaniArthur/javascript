function getText(text, flag = "start") {
    if (text.length < 3) {
      return text
    } else {
      if (flag === "start") {
        return text.substring(0,3)
      } else if (flag === "end") {
        return text.slice(-3)
      }
    }
  }
  
console.log(getText("julia", "start"))
console.log(getText("pedro", "end"))
console.log(getText("Lucas"))
