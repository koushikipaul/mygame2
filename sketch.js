var gameState = 0;



function preload() {

}

function setup() {
	createCanvas(600, 600);
	player = new Player(100, 580);


}


function draw() {
	background(0);
	if (gameState == 0) {

	}
	if (gameState == 1) {

	}
	//keyPressed();
	player.display();

	// if (player.canvaspoint.x = player.x){
	// 	quad(player.x-5,player.y,player.x+5,player.y,player.canvaspoint.x+25,player.canvaspoint.y,player.canvaspoint.x-25,player.canvaspoint.y);
	// }
	// if (player.canvaspoint.y = player.y){
	// 	quad(player.x,player.y-5,player.x,player.y+5,player.canvaspoint.x,player.canvaspoint.y+25,player.canvaspoint.x,player.canvaspoint.y-25);
	// }
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

		player.y -= 10;
		player.canvaspoint = {
			x: player.x,
			y: 0
		}



	}
	if (keyCode === DOWN_ARROW) {
		player.y += 10;
		player.canvaspoint = {
			x: player.x,
			y: 600
		}
		console.log(player.canvaspoint+player.x+','+ player.y);
	}
	if (keyCode === LEFT_ARROW) {
		player.x -= 10;
		player.canvaspoint = {
			x: 0,
			y: player.y
		}
		console.log(player.canvaspoint)
		console.log(player.x+','+ player.y);
		
	}

if (keyCode === RIGHT_ARROW) {
	player.x += 10;
	player.canvaspoint = {
		x: 600,
		y: player.y
	}
}
}
function mouseDragged(){
	player.canvaspoint.x =lerp(player.canvaspoint.x,mouseX,1.5);
	player.canvaspoint.y =lerp(player.canvaspoint.y,mouseY,1.5);
	


}