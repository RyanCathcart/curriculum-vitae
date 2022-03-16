import { useEffect, useRef } from "react";
import Particle from "./particle";

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
  const particles = useRef<Particle[]>();

  const drawParticles = () => {
    if (!particles.current) return;
    for (let i = 0; i < particles.current.length; i++) {
      particles.current[i].update();
      particles.current[i].draw();
    }
  };

  // Executes when the Canvas component mounts
  // The return executes when the Canvas component unmounts
  useEffect(() => {
    const linkPoints = (point: Particle, hubs: Particle[]) => {
      const context = canvasRef.current?.getContext("2d");
  
      for (let i = 0; i < hubs.length; i++) {
        let distance = Math.sqrt(Math.pow(hubs[i].x - point.x, 2) + Math.pow(hubs[i].y - point.y, 2));
        let opacity = 1 - distance / 400;
        if (opacity > 0) {
          if (!context) return;
          context.lineWidth = 0.5;
          context.strokeStyle = `rgba(0, 180, 216, ${opacity})`;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(hubs[i].x, hubs[i].y);
          context.closePath();
          context.stroke();
        }
      }
    };

    const drawLines = () => {
      if (!particles.current) return;
      for (let i = 0; i < particles.current.length; i++) {
        linkPoints(particles.current[i], particles.current);
      }
    };

    // Render loop
    const render = () => {
      const context = canvasRef.current?.getContext("2d");
      if (!context) return;

      context.fillStyle = "rgba(37, 41, 52, 1)";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);

      drawLines();
      drawParticles();

      requestAnimationFrame(render);
    };

    // Initialize canvas data
    const init = () => {
      const context = canvasRef.current?.getContext("2d");
      particles.current = [];
      if (!context) return;

      for (let i = 0; i < 30; i++) {
        particles.current.push(new Particle(context));
      }
    };

    // Sets the HTML canvas element's size to the browser's viewport size
    const handleResize = () => {
      const context = canvasRef.current?.getContext("2d");

      if (!context) return;
      context.canvas.width = document.body.clientWidth;
      context.canvas.height = window.innerHeight;
      init();
    };

    handleResize();
    render();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas className="splash-canvas" ref={canvasRef}></canvas>;
}
