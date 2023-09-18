// Cena vstupenky
// Spočítejte cenu vstupenky do divadla.
// Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla.
// Založte si webovou stránku s JavaScriptem.
// Nechte uživatele zadat jeho věk.
// Vytvořte si proměnnou plnaCena, udávající základní cenu vstupenky a uložte do ní hodnotu 12.
// Vytvořte podmínku, která do proměnné cena uloží cenu spočítanou podle věku uživatele dle následujících pravidel:
// 0 euro pro návštěvníky mladší 6 let,
// 65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
// 100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
// 50 % ze základní ceny pro ostatní (senior).
// Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých centech.
// Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.

const userAge = Number(prompt('Zadejte svůj věk.'));
const fullPrice = 12;

let price = '';
if (userAge < 6) {
  price = 0;
} else if ((userAge >= 6, userAge <= 26)) {
  price = Math.round(fullPrice * 0.65);
} else if ((userAge >= 27, userAge <= 64)) {
  price = fullPrice;
} else {
  price = Math.round(fullPrice * 0.5);
}

document.body.innerHTML += `<h1><p>Cena vaší vstupenky je ${price}eur</p></h1>`;
