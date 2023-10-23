'use strict'
// 2 objetos, definimos una funcion fuera y llamaos a la funcion desde cada objeto

let objeto1 = {
    name: "Rafa",
    estado: "procrastinando"
}

let objeto2 = {
    name: "Pedro",
    estado: "dando clase"
}

function funcionEstado(){

    alert (this.name + ": " +this.estado)
}


objeto1.f = funcionEstado;
objeto2.f = funcionEstado;

objeto1.f();
objeto2.f();

for (let key in objeto1) {
    console.log(key,":",objeto1[key]);
}

for (let key in objeto2) {
    console.log(key,":",objeto2[key]);
}