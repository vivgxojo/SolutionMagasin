class Produit {
    constructor(id, name, detail) {
        this.id = id;
        this.name = name;
        this.detail = detail;
    }

    toString() {
        return `<div class="col-md-6">
              <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">${this.name}</h5>
                  <p class="card-text">${this.detail}</p>
                  <button class="btn btn-primary" onclick="acheter(${this.id})">Acheter</button>
                </div>
              </div>
            </div>`
    };
}

