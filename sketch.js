const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine
var wolrd
var ground
var caja1
var caja2
var caja3
var caja4
var caja5
var caja6
var caja7
var caja8
var caja9
var caja10
var caja11
var caja12
var caja13
var caja14
var caja15
var caja16
var caja17
var caja18
var caja19
var caja19
var caja20
var Ball
var cuerda


function setup(){
    createCanvas(3000,800); 
    engine=Engine.create();
    world=engine.world;
    ground=new Ground(600,600,1200,20);
    caja1= new Box(900,100,70,70)
    caja2= new Box(900,100,70,70)
    caja3= new Box(900,100,70,70)
    caja4= new Box(900,100,70,70)
    caja5= new Box(900,100,70,70)
    caja6= new Box(900,100,70,70)
    caja7= new Box(800,100,70,70)
    caja8= new Box(800,100,70,70)
    caja9= new Box(800,100,70,70)
    caja10= new Box(800,100,70,70)
    caja11= new Box(800,100,70,70)
    caja12= new Box(800,100,70,70)
    caja13= new Box(700,100,70,70)
    caja14= new Box(700,100,70,70)
    caja15= new Box(700,100,70,70)
    caja16= new Box(700,100,70,70)
    caja17= new Box(700,100,70,70)
    caja18= new Box(700,100,70,70)
    caja19= new Box(700,100,70,70)
    caja20= new Box(700,100,70,70)
    Ball= new ball(200,200,80,80)
    cuerda= new Cuerda(ball.body,{x:500,y:50})

}

function draw(){
    ground.display()
    caja1.display()
    caja2.display()
    caja3.display()
    caja4.display()
    caja5.display()
    caja6.display()
    caja7.display()
    caja8.display()
    caja9.display()
    caja10.display()
    caja11.display()
    caja12.display()
    caja13.display()
    caja14.display()
    caja15.display()
    caja16.display()
    caja17.display()
    caja18.display()
    caja19.display()
    caja20.display()
    Ball.display()
    cuerda.display()
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}


function mouseReleased(){

}