import peasy.*;


int cols, rows;
int scl = 300;
int w;
int h;
//int range = 20;
float startyoff = 0;
float startxoff = 0;
boolean colorful = true;
boolean d3 = true;
int max_variation = 4000;

//Movement Variables
float speed = 0.02;
float yspeed = 10;
float camHeight = 3000;
int max_height = 10000;
boolean forwards = false;
boolean backwards = false;
boolean left = false;
boolean right = false;
boolean down = false;
boolean up = false;


void setup() {
  // fullScreen(P3D);
  size(800, 800, P3D);
  w = 10000;
  h = 10000;
  cols = floor(w / scl);
  rows = floor(h / scl);
}

void draw() {
  colorMode(HSB, 255, 100, 100);
  background(0, 0, 25);
  translate(width / 2, height / 2);
  if (d3) {
    rotateX(PI / 3);
    translate(0, -20);
  }
  translate(-w / 2, -h / 2, -camHeight);
  drawTopo();
  movement();
}
boolean setMove(int k, boolean b) {
  switch (k) {
  case 87:
    return forwards = b;
  case 83:
    return backwards = b;
  case 65:
    return left = b;
  case 68:
    return right = b;
  case 16:
    return down = b;
  case 32:
    return up = b;
  default:
    return b;
  }
}
void movement() {
  float speed = map(mouseY, 0, height, 0.1, 0.02);
  if (forwards || backwards || right || left) {
    if (forwards) {
      startyoff-= speed;
    } else if (backwards) {
      startyoff+= speed;
    } else if (left) {
      startxoff-= speed;
    } else {
      startxoff+= speed;
    }
  }
  if (up) {
    camHeight += yspeed;
  } else if (down) {
    camHeight -= yspeed;
  }
  if (camHeight > max_height) {
    camHeight = max_height;
  }
}
void drawTopo() {
  float range = map(mouseX, 0, width, 25, max_variation);
  if (colorful) {
    noStroke();
  } else {
     stroke(0, 0, 25);
  }
  fill(220);
  float yoff = startyoff;
  for (int y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    float xoff = startxoff;
    for (int x = 0; x < cols - 1; x++) {
      float hv = map(noise(xoff, yoff), 0, 1, -range, range);
      float hv2 = map(noise(xoff, yoff + 0.1), 0, 1, -range, range);
      if (colorful) {
        fill(map(hv, -max_variation, max_variation, -50, 255), 75, 100);
      }
      if (d3) {
        vertex(x*scl, y*scl, hv);
        vertex(x*scl, (y + 1)*scl, hv2);
      } else {
        vertex(x*scl, y*scl);
        vertex(x*scl, (y + 1)*scl);
      }

      xoff+=0.1;
    }
    yoff+=0.1;
    endShape();
  }
}
void keyPressed() {
  if (keyCode == 87 || keyCode == 83 || keyCode == 65 || keyCode == 68 || keyCode == 16 || keyCode == 32) {
    setMove(keyCode, true);
  } else if (key == 'c') {
    colorful = !colorful;
  } else if (key == 'v') {
    d3 = !d3;
    if (d3 == false) {
      colorful = true;
    }
  }
}

void keyReleased() {
  if (keyCode == 87 || keyCode == 83 || keyCode == 65 || keyCode == 68 || keyCode == 16 || keyCode == 32) {
    setMove(keyCode, false);
  }
}
