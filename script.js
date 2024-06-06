function verificar(){
    let a = window.document.getElementById(`n1`)
    let b = window.document.getElementById(`n2`)
    let res = window.document.getElementById(`res`)
    if (a.value < b.value){
        res.innerHTML = `<p><strong>Parabéns! Seu formulário está válido!</strong></p`
        document.getElementById(`res`).style.color = `#33A621`
    }else {res.innerHTML=`<p><strong>Infelizmente seu formulário não está válido! Tente novamente.</strong></p>`
        document.getElementById(`res`).style.color = `#F20505`
    }
}