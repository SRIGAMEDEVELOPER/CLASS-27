class cont {

constructor (bodyA,bodyB) {
var options={


   bodyA:bodyA,

   bodyB:bodyB,

   stiffness:0.04,

   length:10,


}

this.chain= Constraint.create(options);

World.add(world,this.chain);


}
display(){
var  PA=this.chain.bodyA.position;

var CB=this.chain.bodyB.position;

strokeWeight(4);

line(PA.x,PA.y,CB.x,CB.y);


}
}