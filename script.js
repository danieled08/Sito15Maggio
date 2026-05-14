const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

/* ===== MENU MOBILE ===== */

if(hamburger){

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/* ===== BOTTONE TORNA SU ===== */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(topBtn){

        if(window.scrollY > 300){

            topBtn.style.display = "block";

        }

        else{

            topBtn.style.display = "none";

        }

    }

});

if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}

/* ===== FORM CONTATTI ===== */

const form =
document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const nome =
        document.getElementById("nome").value.trim();

        const email =
        document.getElementById("email").value.trim();

        const telefono =
        document.getElementById("telefono").value.trim();

        const messaggio =
        document.getElementById("messaggio").value.trim();

        const formMessage =
        document.getElementById("formMessage");

        /* ===== CONTROLLO NOME ===== */

        if(nome === ""){

            formMessage.innerHTML =
            "⚠ Inserisci il nome.";

            formMessage.style.color =
            "red";

            return;

        }

        /* ===== CONTROLLO EMAIL ===== */

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){

            formMessage.innerHTML =
            "⚠ Inserisci una email valida con @ e dominio.";

            formMessage.style.color =
            "red";

            return;

        }

        /* ===== CONTROLLO TELEFONO ===== */

        const phoneRegex =
        /^[0-9]{10}$/;

        if(!phoneRegex.test(telefono)){

            formMessage.innerHTML =
            "⚠ Il numero deve contenere 10 cifre.";

            formMessage.style.color =
            "red";

            return;

        }

        /* ===== CONTROLLO MESSAGGIO ===== */

        if(messaggio === ""){

            formMessage.innerHTML =
            "⚠ Scrivi un messaggio.";

            formMessage.style.color =
            "red";

            return;

        }

        /* ===== SUCCESSO ===== */

        formMessage.innerHTML =
        "✔ Messaggio inviato correttamente!";

        formMessage.style.color =
        "#2ecc71";

        form.reset();

    });

}

/* ===== REGISTRAZIONE ===== */

let registered = false;

const registerBtn =
document.getElementById("registerBtn");

if(registerBtn){

    registerBtn.addEventListener("click", () => {

        const nome =
        document.getElementById("regNome").value.trim();

        const email =
        document.getElementById("regEmail").value.trim();

        const telefono =
        document.getElementById("regTelefono").value.trim();

        const password =
        document.getElementById("regPassword").value.trim();

        const registerMessage =
        document.getElementById("registerMessage");

        /* ===== CONTROLLO NOME ===== */

        if(nome === ""){

            registerMessage.innerHTML =
            "⚠ Inserisci il nome.";

            registerMessage.style.color =
            "red";

            return;

        }

        /* ===== CONTROLLO EMAIL ===== */

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){

            registerMessage.innerHTML =
            "⚠ Inserisci una email valida.";

            registerMessage.style.color =
            "red";

            return;

        }

        /* ===== CONTROLLO TELEFONO ===== */

        const phoneRegex =
        /^[0-9]{10}$/;

        if(!phoneRegex.test(telefono)){

            registerMessage.innerHTML =
            "⚠ Il numero deve avere 10 cifre.";

            registerMessage.style.color =
            "red";

            return;

        }

        /* ===== CONTROLLO PASSWORD ===== */

        if(password.length < 6){

            registerMessage.innerHTML =
            "⚠ La password deve avere almeno 6 caratteri.";

            registerMessage.style.color =
            "red";

            return;

        }

        registered = true;

        registerMessage.innerHTML =
        "✔ Registrazione completata!";

        registerMessage.style.color =
        "#2ecc71";

    });

}

/* ===== PRENOTAZIONE ===== */

const slider =
document.getElementById("budgetSlider");

const budgetValue =
document.getElementById("budgetValue");

const solutions =
document.getElementById("travelSolutions");

const bookingBtn =
document.getElementById("bookingBtn");

/* ===== AGGIORNAMENTO BUDGET ===== */

if(slider && budgetValue){

    budgetValue.innerHTML =
    "Budget massimo: " + slider.value + "€";

    slider.addEventListener("input", () => {

        budgetValue.innerHTML =
        "Budget massimo: " + slider.value + "€";

        generateTravelSolutions();

    });

}

/* ===== CAMBIO AUTOMATICO OFFERTE ===== */

const bookingInputs = [

    "country",
    "destination",
    "travelDate",
    "travelTime",
    "people",
    "travelStyle",
    "transport",
    "hotelType",
    "days"

];

bookingInputs.forEach((id) => {

    const input =
    document.getElementById(id);

    if(input){

        input.addEventListener("change", () => {

            generateTravelSolutions();

        });

    }

});

/* ===== GENERATORE OFFERTE ===== */

function generateTravelSolutions(){

    if(!solutions) return;

    const country =
    document.getElementById("country")?.value || "";

    const destination =
    document.getElementById("destination")?.value || "";

    const people =
    document.getElementById("people")?.value || "1";

    const travelStyle =
    document.getElementById("travelStyle")?.value || "Comfort";

    const transport =
    document.getElementById("transport")?.value || "Aereo";

    const hotelType =
    document.getElementById("hotelType")?.value || "Hotel ★★★";

    const days =
    document.getElementById("days")?.value || "4 giorni";

    const budget =
    parseInt(slider?.value || 1500);

    if(destination === ""){

        solutions.innerHTML = "";

        return;

    }

    let basePrice = 0;

    /* ===== PREZZI REALISTICI ===== */

    switch(destination){

        case "Roma":
            basePrice = 250;
        break;

        case "Parigi":
            basePrice = 550;
        break;

        case "Londra":
            basePrice = 700;
        break;

        case "Madrid":
            basePrice = 500;
        break;

        case "New York":
            basePrice = 1800;
        break;

        case "Tokyo":
            basePrice = 2400;
        break;

        case "Dubai":
            basePrice = 2100;
        break;

        case "Bali":
            basePrice = 2600;
        break;

        case "Rio de Janeiro":
            basePrice = 2900;
        break;

        case "Sharm El Sheikh":
            basePrice = 1200;
        break;

    }

    /* ===== BONUS REALISTICI ===== */

    if(country === "Italia" && destination === "Roma"){

        basePrice -= 150;

    }

    if(transport === "Aereo"){

        basePrice += 300;

    }

    if(transport === "Treno"){

        basePrice += 80;

    }

    if(transport === "Nave"){

        basePrice += 180;

    }

    if(transport === "Pullman"){

        basePrice += 50;

    }

    if(hotelType === "Hotel ★★★★"){

        basePrice += 250;

    }

    if(hotelType === "Hotel ★★★★★"){

        basePrice += 500;

    }

    if(hotelType === "Resort"){

        basePrice += 700;

    }

    if(hotelType === "Villa privata"){

        basePrice += 1200;

    }

    if(travelStyle === "Premium"){

        basePrice += 400;

    }

    if(travelStyle === "Lusso"){

        basePrice += 900;

    }

    if(days === "7 giorni"){

        basePrice += 400;

    }

    if(days === "10 giorni"){

        basePrice += 700;

    }

    if(days === "14 giorni"){

        basePrice += 1200;

    }

    /* ===== PERSONE ===== */

    let multiplier = 1;

    if(people === "2"){

        multiplier = 1.8;

    }

    else if(people === "3"){

        multiplier = 2.5;

    }

    else if(people === "4"){

        multiplier = 3.2;

    }

    else if(people === "5+"){

        multiplier = 4;

    }

    basePrice =
    Math.floor(basePrice * multiplier);

    /* ===== OFFERTE ===== */

    let html = "";

    const lowPrice =
    Math.floor(basePrice * 0.75);

    const normalPrice =
    Math.floor(basePrice);

    const luxuryPrice =
    Math.floor(basePrice * 1.4);

    /* ===== SMART ===== */

    if(lowPrice <= budget){

        html += `

        <div class="solution-card">

            <h2>
                Offerta Smart
            </h2>

            <p>
                Destinazione:
                ${destination}
            </p>

            <p>
                Trasporto:
                ${transport}
            </p>

            <p>
                Hotel:
                Ostello / Hotel ★★★
            </p>

            <p>
                Durata:
                ${days}
            </p>

            <p>
                ${people} persone
            </p>

            <h3>
                ${lowPrice}€
            </h3>

        </div>

        `;

    }

    /* ===== COMFORT ===== */

    if(normalPrice <= budget){

        html += `

        <div class="solution-card">

            <h2>
                Offerta Comfort
            </h2>

            <p>
                Destinazione:
                ${destination}
            </p>

            <p>
                Trasporto:
                ${transport}
            </p>

            <p>
                Alloggio:
                ${hotelType}
            </p>

            <p>
                Stile:
                ${travelStyle}
            </p>

            <p>
                ${people} persone
            </p>

            <h3>
                ${normalPrice}€
            </h3>

        </div>

        `;

    }

    /* ===== LUXURY ===== */

    if(luxuryPrice <= budget){

        html += `

        <div class="solution-card luxury">

            <h2>
                Luxury Experience
            </h2>

            <p>
                Destinazione:
                ${destination}
            </p>

            <p>
                Business / First Class
            </p>

            <p>
                Suite premium
            </p>

            <p>
                Concierge privato
            </p>

            <p>
                Transfer VIP incluso
            </p>

            <p>
                ${people} persone
            </p>

            <h3>
                ${luxuryPrice}€
            </h3>

        </div>

        `;

    }

    if(html === ""){

        html = `

        <div class="solution-card">

            <h2>
                Nessuna soluzione trovata
            </h2>

            <p>
                Aumenta il budget
                oppure modifica le preferenze.
            </p>

        </div>

        `;

    }

    solutions.innerHTML = html;

}

/* ===== SELEZIONE OFFERTA ===== */

let selectedOffer = null;

document.addEventListener("click", (e) => {

    const clickedCard =
    e.target.closest(".solution-card");

    if(!clickedCard) return;

    const allCards =
    document.querySelectorAll(".solution-card");

    allCards.forEach((card) => {

        card.classList.remove("selected");

    });

    clickedCard.classList.add("selected");

    selectedOffer = clickedCard;

});

/* ===== PRENOTA ORA ===== */

if(bookingBtn){

    bookingBtn.addEventListener("click", () => {

        const bookingMessage =
        document.getElementById("bookingMessage");

        if(!registered){

            bookingMessage.innerHTML =
            "⚠ Devi registrarti prima di prenotare.";

            bookingMessage.style.color =
            "red";

            return;

        }

        if(!selectedOffer){

            bookingMessage.innerHTML =
            "⚠ Seleziona prima un'offerta.";

            bookingMessage.style.color =
            "red";

            return;

        }

        const oldLabels =
        document.querySelectorAll(".selected-label");

        oldLabels.forEach((label) => {

            label.remove();

        });

        const label =
        document.createElement("div");

        label.classList.add("selected-label");

        label.innerHTML =
        "✔ PRENOTATA";

        selectedOffer.appendChild(label);

        bookingMessage.innerHTML =
        "✔ Viaggio prenotato correttamente!";

        bookingMessage.style.color =
        "#2ecc71";

    });

}

/* ===== VIDEO HOVER DESTINAZIONI ===== */

const cityCards =
document.querySelectorAll(".city-card");

cityCards.forEach((card) => {

    const video =
    card.querySelector(".city-video");

    if(video){

        card.addEventListener("mouseenter", () => {

            video.play();

        });

        card.addEventListener("mouseleave", () => {

            video.pause();

            video.currentTime = 0;

        });

    }

});
/* ===== AVVIO OFFERTE AUTOMATICO ===== */

window.addEventListener("load", () => {

    generateTravelSolutions();

});
