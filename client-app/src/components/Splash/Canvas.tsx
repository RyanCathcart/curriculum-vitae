import { useEffect, useRef } from "react";
import { customTheme } from "../../styles/customTheme";
import Particle from "./particle";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // HTML Canvas reference
  const particles = useRef<Particle[]>([]);                 // Array of Particle objects
  const linkRadius = useRef<number>(400);                   // Distance threshold to link Particle objects
  const numParticles = 30;                                  // The number of Particle objects to create

  const drawParticles = () => {
    for (let i = 0; i < particles.current.length; i++) {
      particles.current[i].update();
      particles.current[i].draw();
    }
  };

  // Executes when the Canvas component mounts
  // The return executes when the Canvas component unmounts
  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    if (!context) return;
    const backgroundColor: string = customTheme.customPalette.bgDark;
    context.lineWidth = 0.5;
    
    const linkPoints = (point: Particle, hubs: Particle[]) => {
      for (let i = 0; i < hubs.length; i++) {
        let distance = Math.sqrt(Math.pow(hubs[i].x - point.x, 2) + Math.pow(hubs[i].y - point.y, 2));
        let opacity = 1 - distance / linkRadius.current;
        if (opacity > 0) {         
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(hubs[i].x, hubs[i].y);
          context.closePath();
          context.strokeStyle = `rgba(0, 180, 216, ${opacity})`;
          context.stroke();
        }
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.current.length; i++) {
        linkPoints(particles.current[i], particles.current);
      }
    };

    // Render loop
    const render = () => {
      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);

      drawLines();
      drawParticles();

      requestAnimationFrame(render);
    };

    // Initialize canvas data
    // Sets the link radius (the threshold at which the lines between particles becomes visible)
    const init = () => {
      linkRadius.current = Math.floor((context.canvas.width + context.canvas.height) * 0.14);
      particles.current = [];
      
      for (let i = 0; i < numParticles; i++) {
        particles.current.push(new Particle(context));
      }
    };

    // Sets the HTML canvas element's size to the browser's viewport size
    const handleResize = () => {
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
