const linge = [
    new Produit(0, "T-Shirt", "XS"),
    new Produit(1, "Shorts", "L")
];

let $cardsContainer = $('#cards-container');
linge.forEach(function(product) {
    $cardsContainer.append(product.toString());
})


function acheter(id) {
    localStorage.setItem("Linge_" + id, JSON.stringify(linge[id]));
}
