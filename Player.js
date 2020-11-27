class Player{
    constructor(x,y){
       
        //this.image
        this.x = x;
        this.y = y;
        this.canvaspoint = {x:100,y:0}

    }
    display(){
        push();
        rectMode(CENTER);
        fill("blue")
        rect(this.x,this.y,20,20);
        fill(255)
        //quad(this.x-5,this.y,this.x+5,this.y,this.canvaspoint.x+25,this.canvaspoint.y,this.canvaspoint.x-25,this.canvaspoint.y);
        if (this.canvaspoint.x === this.x){
            quad(this.x-5,this.y,this.x+5,this.y,this.canvaspoint.x+25,this.canvaspoint.y,this.canvaspoint.x-25,this.canvaspoint.y);
        }
        if (this.canvaspoint.y === this.y){
            quad(this.x,this.y-5,this.x,this.y+5,this.canvaspoint.x,this.canvaspoint.y+25,this.canvaspoint.x,this.canvaspoint.y-25);
        }
        if (this.canvaspoint.x !== this.x && this.canvaspoint.y !== this.y){
            quad(this.x,this.y-5,this.x,this.y+5,this.canvaspoint.x,this.canvaspoint.y+25,this.canvaspoint.x,this.canvaspoint.y-25);
        }
        pop();
    }
   
    
}