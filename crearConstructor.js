'use strict'

function BigUser() {
    this.name = "Rafa Pecas";
    return {name: "Alejandro viejoabogado"}; //Aqui se cambia el valor
}
alert (new BigUser().name);

function SmallUser() {
    this.name= "Rafa chingón";
    return; //Aquí no varía el valor
}
alert(new SmallUser().name);