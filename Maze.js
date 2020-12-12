class Maze {
    constructor (width,height){
       
        for (var i =0 ;i<20 ; i++){
            this.wall = createSprite(width/2,height/2,width/3,height/20);
            this.wall.x = Math.round(random(width-10,0))
            this.wall.y = Math.round(random(0,height-10))

        }
    }

    display(){
      
        drawSprites();

    }
}