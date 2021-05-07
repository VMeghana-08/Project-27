class Rope{
    constructor(body1,body2,offsetX,offsetY){
      
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
           
            bodyA:body1,
            bodyB:body2,
            stiffness:1,
            //length:20,
            pointB:{x: this.offsetX,y:this.offsetY},
           // pointB:{x: -100,y:-150}            
          }
        
          this.rope = Constraint.create(options)
          World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
        strokeWeight(4)
        //console.log(pointA.x + ' ' + pointA.y + ' ' + pointB.x + ' ' + pointB.y)

        //console.log(this.offsetX + ' ' + this.offsetY)
        line(pointA.x,pointA.y,(pointB.x + this.offsetX ),(pointB.y+this.offsetY))
      //line(pointA.x,pointA.y,(pointB.x ),(pointB.y))

    }
}
