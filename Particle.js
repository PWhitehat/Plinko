class Particle{

    constructor(x,y) {

        this.r = 10;
        var options = {isStatic: false};
        this.body = Bodies.circle(x,y, this.r, options);
        this.color = color(random(0, 255),random(0, 255),random(0, 255));
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0,0, this.r, this.r);
        pop();
    }

}