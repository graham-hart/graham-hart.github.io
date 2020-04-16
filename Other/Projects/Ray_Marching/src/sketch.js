let shapes = [];
let caster;
let points = [];
let rotation = 0;



function setup() {
     angleMode(DEGREES)
     createCanvas(600, 600);
     frameRate(60)
     caster = new Caster();
     for (let i = 0; i < 10; i++) {
          shapes.push(new Circle(random(width), random(height), random(50, 100)));
     }
     noCursor()
     rotation = -0.005;
}
function draw() {
     background(51)
     for (let shape of shapes) {
          shape.show();
     }
     caster.update(rotation, mouseX || width / 2, mouseY || height / 2);
     caster.show();
     //d
     if (keyIsDown(68)) {
          rotation -= 0.0005
     }
     //a
     if (keyIsDown(65)) {
          rotation += 0.0005
     }
}    