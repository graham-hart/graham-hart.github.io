let points = [];
let recentPoint;
let t;
function setup() {
  createCanvas(800, 800);
  frameRate(60);
  points = [
    {
      x: 50,
      y: 50
    },
    {
      x: width - 50,
      y: height / 2
    },
    {
      x: 50,
      y: height - 50
    }
  ];
  t = [points[0], points[1], points[2]];
  recentPoint = {
    x: random(width),
    y: random(height)
  };
}
function draw() {
  background(51);
  let p = round(random(t.length - 1));
  p = t[p];
  points.push(recentPoint);
  let midX = recentPoint.x + (p.x - recentPoint.x) * 0.5;
  let midY = recentPoint.y + (p.y - recentPoint.y) * 0.5;
  recentPoint = {
    x: midX,
    y: midY
  };
  for (let p of points) {
    stroke(255);
    strokeWeight(10);
    point(p.x, p.y);
  }
}
