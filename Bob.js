class Bob{

    constructor(x,y){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x,y,100,options);
        this.radius = 100;

        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(2);
        stroke("blue");
        fill(255);
        circle(0,0,this.radius);
        pop();

    }

}