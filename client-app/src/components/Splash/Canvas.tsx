import "../../styles/App.css";
import { useEffect, useRef, useState } from "react";
import { CanvasContext } from "../../Hooks/Splash/useCanvas";
import useResponsiveSize from "../../Hooks/Splash/useResponsiveSize";
import Animation from "./Animation";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { width, height } = useResponsiveSize();

  const [context, setContext] = useState<CanvasRenderingContext2D | undefined>();

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext("2d");
    if (ctx) setContext(ctx);
  }, []);

  // Place content underneath the canvas element
  return (
    <CanvasContext.Provider value={{ context: context }}>
      <canvas className="splash-canvas" ref={canvasRef} width={width} height={height} />
      <Animation />
    </CanvasContext.Provider>
  );
};

export default Canvas;
