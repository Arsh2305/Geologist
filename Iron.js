class Iron{
    constructor(x,y)
{
var options ={
"restitution":0.8,
"friction":3,
"density":30,

}

this.body=Bodies.rectangle(x,y,70,70,options)
this.height=70
this.width=70
World.add(world,this.body)

}
display(){
var pos=this.body.position
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
fill("black")
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop()
}
}