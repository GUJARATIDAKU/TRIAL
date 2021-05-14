class Stone{
    constructor(x,y){
        var options=  {
            'restituiton':0.8,
            'friction': 0.9,
            'density':12
        };
        this.body = Bodies.rectangle(x,y,30,60,options);
        this.width = 100;
        this.height = 50;
        World.add(world,this.body);
    };
    display(){
        var stonepos = this.body.position;
        push()
        translate(stonepos.x, stonepos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("white");
        fill("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    }
}