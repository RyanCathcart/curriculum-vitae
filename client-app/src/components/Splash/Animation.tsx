import { useCanvasContext } from "../../Hooks/Splash/useCanvas";
import useResponsiveSize from "../../Hooks/Splash/useResponsiveSize";

const Animation = () => {
  const { context } = useCanvasContext();
  const { width, height } = useResponsiveSize();

  let y = height / 2;
  let length = 0.01;
  let amplitude = 100;
  let frequency = 0.01;

  let increment = frequency;
  
  const render = () => {
    if (!context) return;

    context.fillStyle = "#252934";
    context.fillRect(0, 0, width, height)

    context.beginPath();
    context.moveTo(0, height / 2);

    for (let i = 0; i < width; i++) {
      context.lineTo(i, y + Math.sin(i * length + increment) * amplitude * Math.sin(increment));
    }
    context.strokeStyle = "hsl(100, 50%, 50%)";
    context.stroke();

    increment += frequency;

    requestAnimationFrame(render);
  };
  render();
  return null;
};

export default Animation;
