import { useEffect, useState } from "react";

/**
 * Properties for the Clock component.
 *
 * @interface ClockProps
 * @property {Object} size - The size of the clock.
 * @property {number} size.width - The width of the clock.
 * @property {number} size.height - The height of the clock.
 * @property {number} degree - The degree of rotation for the clock hands. 0 to 360.
 */
interface ClockProps {
  size: {
    width: number;
    height: number;
  };
  degree: number;
}

export default function Clock({ size, degree }: ClockProps) {
  const calcPercentage = (degree: number) => (degree / 360) * 100;
  const [percentage, setPercentage] = useState(calcPercentage(degree));

  useEffect(() => {
    setPercentage(calcPercentage(degree));
  }, [degree]);

  return (
    <div
      className="relative flex flex-col items-center border-2 border-foreground rounded-full"
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        background: `conic-gradient(var(--clock-surface-color) 0% ${percentage}%, transparent ${percentage}% 100%)`,
      }}
    >
      <div
        className="absolute w-1 h-1/2 origin-bottom"
        style={{
          transform: `rotate(${degree}deg)`,
        }}
      >
        <div className="w-full h-3/4 translate-y-1/3 bg-foreground rounded-full"></div>
      </div>
    </div>
  );
}
