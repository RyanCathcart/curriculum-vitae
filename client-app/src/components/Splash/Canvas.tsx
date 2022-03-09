import { useCallback, useEffect, useRef } from "react";
import Particle, { options } from "./particle";

export default function Canvas() {
  // Do once:
  // 1. Create canvas ref
  // 2. Populate context state
  // 3. register resize listener
  // 4. Start render loop

  // Do on load and each resize:
  // 1. Clear particles
  // 2. Create particles

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  let particles = useRef<Particle[]>();
  // const [particles, setParticles] = useState<Particle[]>([]);

  // Sets the HTML canvas element's size to the browser's viewport size
  const setCanvasSize = useCallback(() => {
    const context = canvasRef.current?.getContext("2d");
    if (!context) return;

    context.canvas.width = document.body.clientWidth;
    context.canvas.height = window.innerHeight;
  }, []);

  const drawParticles = () => {
    if (!particles.current) return;
    for (let i = 0; i < particles.current.length; i++) {
      particles.current[i].update();
      particles.current[i].draw();
    }
  };

  const checkDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const linkPoints = useCallback((point: Particle, hubs: Particle[]) => {
    const context = canvasRef.current?.getContext("2d");
    
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
  }, []);

  const drawLines = useCallback(() => {
    if (!particles.current) return;
    for (let i = 0; i < particles.current.length; i++) {
      linkPoints(particles.current[i], particles.current);
    }
  }, [linkPoints]);

  // Render loop
  const render = useCallback(() => {
    const context = canvasRef.current?.getContext("2d");
    if (!context) return;

    context.fillStyle = "#252934";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    
    drawLines();
    drawParticles();

    requestAnimationFrame(render);
  }, [drawLines]);

  // Initialize canvas data
  const init = useCallback(() => {
    const context = canvasRef.current?.getContext("2d");

    particles.current = [];

    if (!context) return;
    for (let i = 0; i < 20; i++) {
      particles.current.push(new Particle(context));
    }
  }, [particles]);

  // Executes when the Canvas component mounts
  useEffect(() => {
    setCanvasSize();
    init();
    render();

    window.addEventListener("resize", () => {
      setCanvasSize();
      init();
    });
  }, [init, setCanvasSize, render]);

  return <canvas className="splash-canvas" ref={canvasRef}></canvas>;
}
