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
let color7 = toolbox.getRandomColor();
let color8 = toolbox.getRandomColor();
let color9 = toolbox.getRandomColor();
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
    
}

setInterval(gameLoop, 50);