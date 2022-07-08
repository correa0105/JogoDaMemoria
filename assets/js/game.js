const grid = document.querySelector(".grid");

const ninjas = [
    "sasuke",
    "madara",
    "itachi",
    "sakura",
    "orochimaru",
    "jiraya",
    "naruto",
    "kakashi",
    "sasori",
    "deidara",
]

let firstCard = "";
let secondCard = "";

function checkEndGame () {
    const disabledCards = document.querySelectorAll(".disabled-card");

    if(disabledCards.length === 20) {
        alert("Você ganhou!");
    }
}

function checkCards() {
    const firstNinja = firstCard.getAttribute("data-ninja");
    const secondNinja = secondCard.getAttribute("data-ninja");

    if (firstNinja === secondNinja) {

        firstCard.firstChild.classList.add("disabled-card");
        secondCard.firstChild.classList.add("disabled-card");

        firstCard = "";
        secondCard = "";

    } else {

        setTimeout(() => {
            firstCard.classList.remove("reveal-card");
            secondCard.classList.remove("reveal-card");

            firstCard = "";
            secondCard = "";
        }, 750);

    }
}

function revealCard(event) {
    const element = event.target.parentNode;

    if (element.classList.contains("reveal-card")) {
        return
    }

    if (firstCard === "") {
        element.classList.add("reveal-card");
        firstCard = element;
    } else if (secondCard === "") {
        element.classList.add("reveal-card");
        secondCard = element;
    }

    checkCards();
    checkEndGame ();
}

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function createCard(ninja) {
    const card = createElement("div", "card",);
    const front = createElement("div", "face front");
    const back = createElement("div", "face back");

    front.style.backgroundImage = `url(/assets/img/${ninja}.jpg)`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", revealCard);
    card.setAttribute("data-ninja", ninja);

    return card;
}

function loadGame() {

    const duplicateNinja = [...ninjas, ...ninjas];

    const shuffleArrayNinja = duplicateNinja.sort(() => Math.random() - 0.5);

    shuffleArrayNinja.forEach((ninja) => {

        const card = createCard(ninja);
        grid.appendChild(card);

    });
}

loadGame();