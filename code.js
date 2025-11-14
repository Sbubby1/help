import { MemoryButton } from "./memoryButton.js";
import { Toolbox } from "./toolbox.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil
let toolbox = new Toolbox();

let color1 = toolbox.getRandomColor();
let color2 = toolbox.getRandomColor();
let color3 = toolbox.getRandomColor();
let color4 = toolbox.getRandomColor();
let color5 = toolbox.getRandomColor();
let color6 = toolbox.getRandomColor();

let card1a = new MemoryButton(canvas, pencil, 30, 50, color1);
let card1b = new MemoryButton(canvas, pencil, 180, 50, color1);
let card2a = new MemoryButton(canvas, pencil, 330, 50, color2 );
let card2b = new MemoryButton(canvas, pencil, 470, 50, color2);
let card3a = new MemoryButton(canvas, pencil, 30, 230, color3);
let card3b = new MemoryButton(canvas, pencil, 180, 230, color3);
let card4a = new MemoryButton(canvas, pencil, 330, 230, color4);
let card4b = new MemoryButton(canvas, pencil, 470, 230, color4);
let card5a = new MemoryButton(canvas, pencil, 30, 400, color5);
let card5b = new MemoryButton(canvas, pencil, 180, 400, color5);
let card6a = new MemoryButton(canvas, pencil, 330, 400, color6);
let card6b = new MemoryButton(canvas, pencil, 470, 400, color6);


let cards = [
  card1a,card1b, card2a, card2b,
  card3a, card3b, card4a, card4b,
  card5a, card5b, card6a, card6b
];


for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
}

let positions = [
  {x:30, y:50}, {x:180, y:50}, {x:330, y:50}, {x:470, y:50},
  {x:30, y:230}, {x:180, y:230}, {x:330, y:230}, {x:470, y:230},
  {x:30, y:400}, {x:180, y:400}, {x:330, y:400}, {x:470, y:400},
];

cards.forEach((card, index) => {
    card.x = positions[index].x;
    card.y = positions[index].y;
});

cards.forEach(card => card.onFlip = handleFlip)

let flippedCards = [];

function handleFlip(card) {

    if(card.matched) return;

    flippedCards.push(card);

    if (flippedCards.length === 2) {
        let [cardA, cardB] = flippedCards;

        if (cardA !== cardB && cardA.color === cardB.color) {
            cardA.matched = true;
            cardB.matched = true;
        } else {
            setTimeout( () => {
                cardA.isFaceUp = false;
                cardB.isFaceUp = false;
            }, 1000);

        }
    flippedCards = [];

        }

    }






function gameLoop() {

    pencil.clearRect(0,0, canvas.width, canvas.height);
    card1a.draw();
    card1b.draw();
    card2a.draw();
    card2b.draw();
    card3a.draw();
    card3b.draw();
    card4a.draw();
    card4b.draw();
    card5a.draw();
    card5b.draw();
    card6a.draw();
    card6b.draw();


    pencil.clearRect(0, 0, canvas.width, canvas.height);
    cards.forEach(card => card.draw());

    if (cards.every(card => card.matched)) {
    WinScreen();

    }

    function WinScreen() {
        pencil.fillStyle = "rgba(255, 47, 47, 0.6)"
        pencil.fillRect(0, 0, canvas.width, canvas.height);


        pencil.fillStyle = "orange";
        pencil.font = "60px Ariel";
        pencil.textAlign = "center";
        pencil.fillText("You're did it", canvas.width / 2, canvas.height / 2);






    }
    
}

setInterval(gameLoop, 50);