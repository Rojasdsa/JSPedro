'use strict'

let objeto1 = {
    name: "Rafa",
    estado: "procrastinando",
    funcionEstado(){
        let arrow = () =>  alert (this.name + ": " +this.estado);
        arrow();
    }
}

let objeto2 = {
    name: "Pedro",
    estado: "dando clase",
    funcionEstado(){
        let arrow = () =>  alert (this.name + ": " +this.estado);
        arrow();
    }
}

objeto1.funcionEstado();
objeto2.funcionEstado();

for (let key in objeto1) {
    console.log(key,":",objeto1[key]);
}

for (let key in objeto2) {
    console.log(key,":",objeto2[key]);
}