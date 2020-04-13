let nums = new Array();
let h;
let swaps = 0;

const dc = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  for (let i = 0; i < dc; i++) {
    nums.push(i + 1);
  }
  h = height / nums[dc - 1];
  shuffle(nums, true);
}
function draw() {
  background(0);
  displayNums();
  s();
}
function displayNums() {
  let i = 0;
  colorMode(HSB)
  for (let n of nums) {
    stroke(map(n, 1, dc, 0, 300), 100, 100);
    strokeWeight(width / dc);
    line((i * width) / dc, height, (i * width) / dc, height - n * h);
    i++;
  }
}

function s() {
  let c = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      swap(i, i + 1);
    } else {
      c++;
    }
  }
  if (c === nums.length - 1) {
    return true;
  } else {
    return false;
  }
}

function swap(i, j) {
  swaps++;
  let t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
}
