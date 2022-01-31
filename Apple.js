class Apple {

    constructor(x,y,r){

      var options={

        isStatic: false,
        friction: 0,
        restitution: 0,
      }

        this.x = x;
        this.y = y;
        this.r = r;
        this.bodies = Bodies.circle(this.x, this.y, this.r, options);
        this.image = loadImage("apple.png");
        World.add(world, this.body);

    }

    display(){

        var applePos=this.body.position;	
		push();
		translate(applePos.x, applePos.y);
		imageMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop();
    }
}