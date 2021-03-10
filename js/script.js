var generaBtn = document.getElementById("genera");
var annullaBtn = document.getElementById("annulla");
var costo = 0.21;
var costoTotale = 0;

generaBtn.addEventListener('click', function(){

    var name = document.getElementById('name').value;
    var km = parseInt(document.getElementById('km').value);
    var age = document.getElementById('age').value;

    console.log(name, km, age);

if (name !== "" && km > 0 && age !== "") {

    costoTotale = costo * km;
    document.getElementById('nome').innerHTML = name;

    var rndCarrozza = Math.floor(Math.random() * 10) + 1;
    document.getElementById('carrozza').innerHTML = rndCarrozza;

    var rndCodice = Math.floor(Math.random() * (100000-90000)) + 90000;
    document.getElementById('codice').innerHTML = rndCodice;



    if(age == 1){ //minorenne
        var costoEffettivo = ((costoTotale * 80) / 100);
        document.getElementById('offerta').innerHTML = "Offerta Minorenne";
        document.getElementById('costoEffettivo').innerHTML = costoEffettivo;
    }else if(age == 3){ //over 65
        var costoEffettivo = ((costoTotale * 60) / 100);
        document.getElementById('offerta').innerHTML = "Offerta Over 65";
        document.getElementById('costoEffettivo').innerHTML = costoEffettivo;

    }else{
        var costoEffettivo = costoTotale;
        document.getElementById('offerta').innerHTML = "---";
        document.getElementById('costoEffettivo').innerHTML = costoEffettivo;

    }
    console.log(costoEffettivo);
} else {
 alert("Si prega di inserire tutti i dati");
}
})

annullaBtn.addEventListener('click', function(){

})
