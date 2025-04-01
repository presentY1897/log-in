import React, { ReactNode, useEffect, useRef, useState } from "react";

interface SelectOptionProps {
  options: ReactNode[];
  initialSelectedOption: ReactNode;
}

export default function SelectOption({
  options,
  initialSelectedOption,
}: SelectOptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ReactNode | null>(
    initialSelectedOption
  );

  const onClick = () => {
    setIsExpanded((prev) => !prev);
  };

  const onBlur = () => {
    setIsExpanded(false);
  };

  const listOnClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    option: ReactNode
  ) => {
    e.preventDefault();
    setSelectedOption(option);
    setIsExpanded(false);
    spin();
  };

  const [isSpinning, setIsSpinning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const spin = () => {
    if (isSpinning || options.length === 0) return;

    setIsSpinning(true);
    let currentIndex = 0;

    intervalRef.current = setInterval(() => {
      setSelectedOption(options[currentIndex]);
      currentIndex = (currentIndex + 1) % options.length;
    }, 100);

    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      const finalIndex = Math.floor(Math.random() * options.length);
      setSelectedOption(options[finalIndex]);
      setIsSpinning(false);
    }, 2000);
  };

  // cleanup
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative text-foreground">
      <button
        className="peer select-none rounded-md border border-foreground px-4 py-2 w-full text-left"
        aria-haspopup="listbox"
        aria-expanded={isExpanded}
        type="button"
        onClick={onClick}
        disabled={isSpinning}
        onBlur={onBlur}
      >
        {selectedOption ?? "Unselected"}
      </button>
      <ul
        className="absolute z-1 mt-1 max-h-32 w-full overflow-auto rounded-md py-1 ring-1 ring-foreground shadow-lg truncate hidden peer-aria-expanded:block"
        role="listbox"
        tabIndex={-1}
      >
        {options.map((option, i) => (
          <li
            className="relative cursor-default py-1 pr-9 pl-3 select-none"
            role="option"
            key={i}
            onMouseDown={(e) => listOnClick(e, option)}
            aria-selected={selectedOption === option}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
