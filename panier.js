let $cardsContainer = $('#cards-container');

for(i = 0; i<2; i++){
    item = JSON.parse(localStorage.getItem("Epicerie_" + i))
    if(item){
        afficherItem(item)
    }

    item = JSON.parse(localStorage.getItem("Linge_" + i))
    if(item){
        afficherItem(item)
    }
}

function afficherItem(item){
    $cardsContainer.append(`<div class="col-md-6">
              <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text">${item.detail}</p>
                </div>
              </div>
            </div>`)
}