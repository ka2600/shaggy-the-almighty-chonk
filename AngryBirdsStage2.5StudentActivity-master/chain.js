//have i ever told you the tale of darth kevin the tired? its not a story the jedi would tell you. he could save everyone from sleep but hinsself. as those around him grew younger and more active, he grew older and more tired. ironic.

class Chain{
     constructor(bodyA, bodyB){ 
         var options = { 
             bodyA: bodyA, 
             bodyB: bodyB, 
             stiffness: 0.04,
              length: 10 
            }
this.chain = Constraint.create(options); 
World.add(world, this.chain);
 } display(){ 
     var pointA = this.chain.bodyA.position;
      var pointB = this.chain.bodyB.position; 
      strokeWeight(4);
     line(pointA.x, pointA.y, pointB.x, pointB.y);
     } 
    }