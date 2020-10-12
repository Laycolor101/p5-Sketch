let img;

let posX=0
let posY=0

function setup() {
  createCanvas(400, 400);
img = loadImage('grasslands.jpg')
car = loadImage('car.png')
  babybees = loadImage('baby bees.png')
clouds = loadImage('clouds.png')
 noCursor();
background(220);

}

function draw() {
  
image(img,0,0,0,400)

  image(car,posX, 300,100,100,150)
  image(babybees,mouseX, mouseY, 80,120,200,100)
image(clouds,posY,50,300,100,0)
  
  
 
    
 posX+=1
  posY+=1


}


function mousepressed() {
image(img,0,0,0,400)
}
                        