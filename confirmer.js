const params = new URLSearchParams(document.location.search);
const username = params.get("username");
if(username){
    $("#username").text(username)
}

function confirmer(){
    localStorage.clear()
    $("#cards-container").text("Bonjour " + username + ", merci pour votre commande.")
    $("#droite").remove()
}