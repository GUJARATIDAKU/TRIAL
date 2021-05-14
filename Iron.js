class Iron {
    constructor(x,y){
      var options = {
            'restitution': 0.8,
            'friction': 3,
            'density': 30
        };
        this.body = Bodies.rectangle(x,y,50,80,options);
        this.width = 500;
        this.height = 200;
        World.add(world,this.body);
    };
    display(){
        var ironpos = this.body.position;
        push()
        translate(ironpos.x, ironpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("yellow");
        fill("red");
        rect(0,0,this.width,this.height);
    }
}