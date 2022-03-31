const $numero1 = document.getElementById("numero1");
const $numero2 = document.getElementById("numero2");
const $btn1 = document.getElementById("btn1");
const $btn2 = document.getElementById("btn2");
const $btn3 = document.getElementById("btn3");
const $btn4 = document.getElementById("btn4");

document.addEventListener("input", e =>{
    if (e.target === $numero1 || e.target === $numero2) {
        console.log(Math.round($numero1.value)) || console.log(Math.round($numero2.value))
        if (Math.sign($numero1.value) == 1 || Math.sign($numero2.value) === 1) {
            console.log("validacion completa")
        }
        else{
            console.log("Numeros negativos no se aceptan")
        }
    }
    else{
        return null
    }
})

function valorMenor(numero1 , numero2 ) {
        while (numero1 > numero2) {
            alert(`${numero2} es menor`)
            break;
        }
        while (numero1 < numero2) {
            alert(`${numero1} es menor`)
            break;
        }
        while (numero1 === numero2) {
            alert("Son iguales")
            break;
        }

}

function sonIguales(numero1 , numero2) {

    if (numero1 > numero2) {
        alert(`los numeros ${numero1} y ${numero2} no son iguales`)
    }
    else if (numero1 < numero2) {
        alert(`los numeros ${numero1} y ${numero2} no son iguales`)
        
    } else {
        alert("los numeros son iguales")
        
    }
}

function intercambiar(numero1 , numero2) {
    numero1 = numero1 ^ numero2
    numero2 = numero1 ^ numero2
    numero1 = numero1 ^ numero2

    alert(`${numero1} es ahora:` + " " + numero2 )
    alert(`${numero2} es ahora:`+ " " + numero1 )
}

function sumar(numero1, numero2) {
    if(isNaN(numero1) || isNaN(numero2)){
        alert("Es necesario introducir dos numeros validos")
    }
    else{
        suma = parseFloat(numero1)+ parseFloat(numero2);
        alert(`la suma es ${suma}`)
    }

}

document.addEventListener("click", e => {
    e.preventDefault()   
    if (e.target === $btn1){
        valorMenor($numero1.value, $numero2.value)
    }
})

document.addEventListener("click", e => {
    e.preventDefault()   
    if (e.target === $btn2){
        sonIguales($numero1.value, $numero2.value)
    }
})

document.addEventListener("click", e => {
    e.preventDefault()   
    if (e.target === $btn3){
        intercambiar($numero1.value, $numero2.value)
    }
})

document.addEventListener("click", e => {
    e.preventDefault()   
    if (e.target === $btn4){
        sumar($numero1.value, $numero2.value)
    }
})
 