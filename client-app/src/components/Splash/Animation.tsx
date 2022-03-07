import { useCanvasContext } from "../../Hooks/Splash/useCanvas";
import useResponsiveSize from "../../Hooks/Splash/useResponsiveSize";

const Animation = () => {
  const { context } = useCanvasContext();
  const { width, height } = useResponsiveSize();

  let particles: Particle[];

  const options = {
    particleColor: "rgba(255, 255, 255, 1)",
    lineColor: "rgba(56, 176, 0)",
    particleAmount: 20,
    defaultRadius: 2,
    variantRadius: 2,
    defaultSpeed: 1,
    variantSpeed: 1,
    linkRadius: 400,
  };

  const init = () => {
    initializeElements();
    render();
  };

  const initializeElements = () => {
    particles = [];
    for (let i = 0; i < options.particleAmount; i++) {
      particles.push(new Particle());
    }
  };

  class Particle {
    x: number;
    y: number;
    color: string;
    radius: number;
    speed: number;
    directionAngle: number;
    vector: any;

    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
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
      this.border();
      this.x += this.vector.x;
      this.y += this.vector.y;
    }

    border() {
      if (this.x <= 0 || this.x >= width) this.vector.x *= -1;
      if (this.y <= 0 || this.y >= height) this.vector.y *= -1;
      if (this.x < 0) this.x = 0;
      if (this.x > width) this.x = width;
      if (this.y < 0) this.y = 0;
      if (this.y > height) this.y = height;
    }

    draw() {
      if (!context) return;

      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    }
  }

  const drawParticles = () => {
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
  };

  const drawLines = () => {
    for (let i = 0; i < particles.length; i++) {
      linkPoints(particles[i], particles);
    }
  };

  const linkPoints = (point: Particle, hubs: Particle[]) => {
    for (let i = 0; i < hubs.length; i++) {
      let distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
      let opacity = 1 - distance / options.linkRadius;
      if (opacity > 0) {
        if (!context) return;
        context.lineWidth = 0.5;
        context.strokeStyle = `rgba(56, 176, 0, ${opacity})`
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(hubs[i].x, hubs[i].y);
        context.closePath();
        context.stroke();
      }
    }
  };

  const checkDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const render = () => {
    if (!context) return;

    // Fill background
    context.fillStyle = "#252934";
    context.fillRect(0, 0, width, height);

    drawLines();
    drawParticles();
    requestAnimationFrame(render);
  };
  init();
  return null;
};

export default Animation;
