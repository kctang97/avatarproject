class Syringe {
  constructor(_x, _y, _rotation, _size = 1) {
    this.x = _x;
    this.y = _y;
    this.rotation = _rotation;
    this.size = _size;
    this.fill = random([color(200, 0, 200), color(255, 255, 0)]);
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    fill(255);
    rect(0, -30, 30, 10);
    rect(10, -30, 10, 50);
    noFill();
    stroke(255);
    rect(0, 0, 30, 60, 0, 0, 30, 30);
    fill(this.fill);
    rect(0, 30, 30, 30, 0, 0, 30, 30);
    fill(0);
    rect(0, 20, 30, 10, 20);
    rect(10, 60, 5, 12);
    pop();
  }

  move() {
    this.rotation += 1;
    if (this.y <= height * 0.8) {
      this.y += 2;
    } else {
      this.y = -height * 0.6;
    }
  }
}