Star[] stars = new Star[500];
float dz;
void setup() {
  size(800, 800);
  for (int i = 0; i < stars.length; i++) {
    stars[i] = new Star();
  }
}
void draw() {
  translate(width / 2, height / 2);
  background(0);
  for (Star s : stars) {
    s.update();
    s.show();
  }
  dz = map(mouseX, 0, width, 0, 50);
}
class Star {
  float x;
  float y;
  float z;
  float pz;
  Star() {
    x = random(-width / 2, width / 2);
    y = random(-height / 2, height / 2);
    z = random(width);
    pz = z+(dz*5);
    
  }
  void show() {
    stroke(255);
    float sw = map(z, 0, width, 4, 0);
    strokeWeight(sw);
    float sx = map(x/z, 0, 1, 0, width);
    float sy = map(y/z, 0, 1, 0, height);
    float px = map(x/pz, 0, 1, 0, width);
    float py = map(y/pz, 0, 1, 0, height);
    if(sw - 0.5 > 0) {
    strokeWeight(sw - 0.5);
    }
    point(sx, sy);
    line(sx, sy, px, py);
  }
  void update() {
    if (z < dz) {
      z = width;
      pz = z;
    x = random(-width / 2, width / 2);
    y = random(-height / 2, height / 2);
    } else {
      z-= dz;
    }
    pz = z+(dz*5);
    pz = constrain(pz, 0, width);
  }
}
