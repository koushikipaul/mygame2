class Enemy{
    constructor(x,y){
        this.body = createSprite(x,y,10,20);
        
    }
   createBullet(){
    this.bulletup = createSprite(this.body.x,this.body.y,5,5);
    this.bulletup.velocityX = 0;
    this.bulletup.velocityY = -5;
    this.bulletdown = createSprite(this.body.x,this.body.y,5,5);
    this.bulletdown.velocityX = 0;
    this.bulletdown.velocityY = 5;
    this.bulletleft = createSprite(this.body.x,this.body.y,5,5);
    this.bulletleft.velocityX = -5;
    this.bulletleft.velocityY = 0;
    this.bulletright = createSprite(this.body.x,this.body.y,5,5);
    this.bulletright.velocityX = 5;
    this.bulletright.velocityY = 0;
    this.bullet = [];
    this.bullet.push(this.bulletup);
    this.bullet.push(this.bulletdown);
    this.bullet.push(this.bulletleft);
    this.bullet.push(this.bulletright);
   }
}