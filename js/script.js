//alert('Buongiorno Utente');

// INIZIO --------------------------


// 1. Chiedi all'utente il suo nome

const Nome = prompt('qual è il tuo nome?');
console.log(Nome);
console.log(typeof Nome);



//2. chiedi il suo cognome
const Cognome = prompt('qual è il tuo cognome?');
console.log(Cognome);
console.log(typeof Cognome);


// 3. chiedi il suo colore preferito
const ColorePreferito = prompt('qual è il tuo colore preferito?');
console.log(ColorePreferito);
console.log(typeof ColorePreferito);





// 4. Infine scrivi sulla pagina nomecognomecolorepreferito21
let password = Nome + Cognome + ColorePreferito + '21';
console.log(password);
console.log(typeof password);

//riempimento

document.getElementById('info').innerHTML = password;


// FINE ------------------------------------------


// con prompt prendamo il valore inserito dall'utente.