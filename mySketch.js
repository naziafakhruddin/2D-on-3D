let r = 10;
let a = 0;
let c = 20;
let angle=0;
let art;
let slider;

function setup() {
  createCanvas(720, 500,WEBGL);
  art=createGraphics(400,400); 
}
function draw() {
  background(70, 130, 180);
	
  let b=map(mouseX,0,width,50,500);
  push()
  let x = r+c * cos(a);
  let y = r+c * sin(a);
  art.fill(255, a, r+c);
  art.ellipse(x+200, y+200, 10, 10);
  c += 0.3;
  a += 0.8;
  pop()
  
  push()
  texture(art);
	noStroke();
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  box(200);
  angle += 0.009;
  pop() 
}
