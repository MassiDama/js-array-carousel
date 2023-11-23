
const items = document.getElementsByClassName ("item");
console.log (items[0]);

let activeItem = 0;

// navigazione
const next = document.querySelector(".next");

next.addEventListener( "click", function() {

    if (activeItem < items.length - 1) {
        // togliamo la classe active all'elemento corrente
        items[activeItem].classList.remove("active");

        // incrementiamo l'indice dell'elemento da visualizzare
        activeItem ++;

        // aggiungiamo la classe active all'elemento successivo
        items[activeItem].classList.add("active");

    }

});

const prev = document.querySelector(".prev");

prev.addEventListener( "click", function() {

    if (activeItem < items.length - 1) {
        // togliamo la classe active all'elemento corrente
        items[activeItem].classList.remove("active");

        // incrementiamo l'indice dell'elemento da visualizzare
        activeItem --;

        // aggiungiamo la classe active all'elemento successivo
        items[activeItem].classList.add("active");

    }

});
