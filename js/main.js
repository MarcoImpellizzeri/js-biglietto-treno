const totKm = prompt("Inserisci quanti chilometri vuoi percorrere");
const age = prompt("Inserisci la tua etá");
let priceTiket = parseInt(totKm) * 0.21;

if (parseInt(age) < 18) {
    document.getElementById("testo-risposta").innerHTML = "Congratulazioni hai lo sconto del 20%";
    document.getElementById("tot-price").innerHTML = (priceTiket - (priceTiket * 20) / 100 ).toFixed(2);
} else if (parseInt(age) >= 65) {
    document.getElementById("testo-risposta").innerHTML = "Congratulazioni hai lo sconto del 40%";
    document.getElementById("tot-price").innerHTML = (priceTiket - (priceTiket * 40) / 100 ).toFixed(2);
} else {
    document.getElementById("tot-price").innerHTML = priceTiket.toFixed(2);
}



