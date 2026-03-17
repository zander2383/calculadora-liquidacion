document.getElementById("modo").addEventListener("change", cambiarModo)

function cambiarModo(){

const modo = document.getElementById("modo").value

if(modo === "dias"){

document.getElementById("diasBox").style.display="block"
document.getElementById("mesesBox").style.display="none"

}else{

document.getElementById("diasBox").style.display="none"
document.getElementById("mesesBox").style.display="block"

}

}

function formato(num){

return num.toLocaleString('es-CO',{
style:'currency',
currency:'COP',
maximumFractionDigits:0
})

}

function calcular(){

const salario =
parseFloat(document.getElementById("salario").value)


const modo =
document.getElementById("modo").value

let dias

if(modo === "dias"){

dias =
parseFloat(document.getElementById("dias").value)

}else{

const meses =
parseFloat(document.getElementById("meses").value)

if(!meses || meses <= 0){
alert("Completa los datos")
return
}

dias = meses * 30

}

if(!salario || !dias || dias <= 0){

alert("Completa los datos")
return

}

const prima = salario * dias / 360
const cesantias = salario * dias / 360
const intereses = cesantias * 0.12 * dias / 360
const vacaciones = salario * dias / 720
const salario_dia = salario / 30 

const total =
prima + cesantias + intereses + vacaciones

document.getElementById("prima").innerText =
formato(prima)

document.getElementById("cesantias").innerText =
formato(cesantias)

document.getElementById("intereses").innerText =
formato(intereses)

document.getElementById("vacaciones").innerText =
formato(vacaciones)

document.getElementById("total").innerText =
formato(cesantias + intereses + vacaciones)
document.getElementById("total-con-prima").innerText =
formato(total)

document.getElementById("salario-dia").innerText =
formato(salario_dia)

document.getElementById("resultados").style.display="block"



}