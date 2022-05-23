

window.onload = function() {
let xname = prompt("Insert your Name");
let surname = prompt("Insert your Surname");
let birthday = prompt("Insert your birthday");
let birthplace = prompt("Insert your birth place");
let zodiacSign = prompt("Insert your zodiac sign");

document.getElementById("data").innerHTML= `<p><b>Name:</b> ${xname}</p> <p><b>Surname:</b> ${surname}</p> <p><b>Birthday:</b> ${birthday}</p>  <p><b>Birthplace:</b> ${birthplace}</p> <p><b>Zodiac Sign:</b> ${zodiacSign}</p>`;;
}
