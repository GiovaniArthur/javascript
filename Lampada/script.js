const btn = document.getElementById('clicker')
const img = document.getElementById('lamp')

btn.onclick = function() {
    if (btn.value === "acender") {
        img.src="ligada.jpg"
        btn.innerHTML = "apagar"
        btn.value = 'apagar'
    } else {
        img.src="desligada.jpg"
        btn.innerHTML = "acender"
        btn.value = 'acender'
    }
} 