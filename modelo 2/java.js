function tabuada() {
    let num = document.getElementById('txtn'); // Corrigir a obtenção do valor do campo de entrada
    let tab = document.getElementById('seltab');
    if (num.length == 0) {
    window.alert('Por favor, digite um número!');
    } else {
        let n=Number(num.value)
        let c =1
        tab.innerHTML =''
        while (c <= 10 ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            
            c++
        }
    }
}
