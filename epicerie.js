const epicerie = [
    new Produit(0, "Pomme", "1 $"),
    new Produit(1, "Orange", "3 $")
];

let $cardsContainer = $('#cards-container');
epicerie.forEach(function(epicerie) {
    $cardsContainer.append(epicerie.toString());
})


function acheter(id) {
    localStorage.setItem("Epicerie_" + id, JSON.stringify(epicerie[id]));
}
