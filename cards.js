export class cards {
constructor() {
    this.canvas = document.getElementById("myCanvas");

    this.pencil = this.canvas.getContext("2d");

    this.pencil.fillStyle = "red";
    this.pencil.drawRect(50, 50, 150, 30)
  }

  
}