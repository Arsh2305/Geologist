const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,ironRod,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
      rubber=new Rubber(300,500,100)
  ironRod=new Iron(300,400)
stone=new Stone(400,500)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

rubber.display()
    plane.display();
    hammer.display();

   ironRod.display();
   stone.display()
 
}