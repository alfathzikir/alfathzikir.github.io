/*
 * @name Simple Shapes
 * @description This examples includes a circle, square, triangle, and a flower.
 */
function setup() {
    // Create the canvas
    createCanvas(720, 400);
    background(200);
  
    myButton = new Clickable();
    myButton.locate(20,20);
    myButton.onPress = function(){  //When myButton is pressed
        this.color = "#AAAAFF";       //Change button color
        alert("Yay!");                //Show an alert message
    }

    // Set colors
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
  
    // A rectangle
    rect(40, 120, 120, 40);
    // An ellipse
    ellipse(240, 240, 80, 80);
    // A triangle
    triangle(300, 100, 320, 100, 310, 80);
  
    // A design for a simple flower
    translate(580, 200);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/5);
    }
  }
  
function draw(){
    myButton.draw();
}