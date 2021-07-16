function setup(){
    createCanvas(500,500)
    box= createSprite(300,300,30,30)
    box.y=mouseY;
}
function draw(){
    drawSprites();
}