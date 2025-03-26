import { useEffect, useRef, useState } from "react";
import Clock from "../atoms/clock";

interface ClockHandlerProps {
  size: {
    width: number;
    height: number;
  };
  initialDegree: number;
  onDegreeUpdate?: (degree: number) => void;
}

export default function ClockHandler({
  size,
  initialDegree,
  onDegreeUpdate,
}: ClockHandlerProps) {
  const [degree, setDegree] = useState(initialDegree);

  useEffect(() => {
    setDegree(initialDegree);
  }, [initialDegree]);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const clockRef = useRef<HTMLDivElement>(null);

  const getCenter = () => {
    const rect = clockRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  };

  const getAngleFromMouse = (mouseX: number, mouseY: number) => {
    const center = getCenter();
    const dx = mouseX - center.x;
    const dy = mouseY - center.y;

    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    angle = (angle + 90 + 360) % 360;
    return angle;
  };

  const updateDegree = (value: number) => {
    setDegree(value);
    if (onDegreeUpdate) onDegreeUpdate(value);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    const angle = getAngleFromMouse(e.clientX, e.clientY);
    updateDegree(angle);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    const angle = getAngleFromMouse(e.clientX, e.clientY);
    updateDegree(angle);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(false);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(false);
  };

  return (
    <div
      data-testid="clockHandler"
      ref={clockRef}
      className="cursor-pointer"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <Clock size={size} degree={degree} />
    </div>
  );
}
