
let img; //remember we need to create a variable for our image
//then we need to load the image in preload before setup

function preload(){
    img = loadImage("Vending.Unity .png");
   }
   

function setup(){
    let c = createCanvas(400,400);
    c.parent('canvas-wrapper');



  }
  
  function draw(){
    ellipse(200,200,50,50);

    image(img, mouseX, mouseY, 300, 600);


  }
  