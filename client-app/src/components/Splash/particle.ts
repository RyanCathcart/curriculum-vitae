const options = {
  particleColor: "rgba(255, 255, 255, 1)",
  defaultRadius: 2,
  variantRadius: 2,
  defaultSpeed: 0.2,
  variantSpeed: 1,
};

export default class Particle {
  context: CanvasRenderingContext2D | undefined;
  canvasW: number;
  canvasH: number;
  x: number;
  y: number;
  color: string;
  radius: number;
  speed: number;
  directionAngle: number;
  velocity: any;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.canvasW = context.canvas.width;
    this.canvasH = context.canvas.height;
    this.x = Math.random() * this.canvasW;
    this.y = Math.random() * this.canvasH;
    this.color = options.particleColor;
    this.radius = options.defaultRadius + Math.random() * options.variantRadius;
    this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
    this.directionAngle = Math.floor(Math.random() * 360);
    this.velocity = {
      x: Math.cos(this.directionAngle) * this.speed,
      y: Math.sin(this.directionAngle) * this.speed,
    };
  }

  update() {
    this.border();
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  border() {
    if (this.x <= 0 || this.x >= this.canvasW) this.velocity.x *= -1;
    if (this.y <= 0 || this.y >= this.canvasH) this.velocity.y *= -1;
    if (this.x < 0) this.x = 0;
    if (this.x > this.canvasW) this.x = this.canvasW;
    if (this.y < 0) this.y = 0;
    if (this.y > this.canvasH) this.y = this.canvasH;
  }

  draw() {
    if (!this.context) return;

    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.context.closePath();
    this.context.fillStyle = this.color;
    this.context.fill();
  }
}
