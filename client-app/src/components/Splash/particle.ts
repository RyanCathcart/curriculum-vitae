export const options = {
  particleColor: "rgba(255, 255, 255, 1)",
  lineColor: "rgba(56, 176, 0)",
  particleAmount: 20,
  defaultRadius: 2,
  variantRadius: 2,
  defaultSpeed: 1,
  variantSpeed: 1,
  linkRadius: 400,
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
  vector: any;

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
    this.vector = {
      x: Math.cos(this.directionAngle) * this.speed,
      y: Math.sin(this.directionAngle) * this.speed,
    };
  }

  update() {
    // console.log("x: ", this.x, "y: ", this.y, "vX: ", this.vector.x, "vY: ", this.vector.y)
    this.border();
    this.x += this.vector.x;
    this.y += this.vector.y;
  }

  border() {
    if (this.x <= 0 || this.x >= this.canvasW) this.vector.x *= -1;
    if (this.y <= 0 || this.y >= this.canvasH) this.vector.y *= -1;
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