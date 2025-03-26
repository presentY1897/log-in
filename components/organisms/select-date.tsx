import { useEffect, useState } from "react";
import ClockHandler from "../molecules/clock-handler";
import { format } from "date-fns";

interface SelectDateProps {
  startDate?: Date;
}

export default function SelectDate({
  startDate = new Date(0),
}: SelectDateProps) {
  const [degree, setDegree] = useState(0);
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(startDate);

  const onDegreeUpdate = (degree: number) => {
    setDegree(degree);
  };

  useEffect(() => {
    const totalMilliseconds = currentDate.getTime() - startDate.getTime();
    const selectedMilliseconds = totalMilliseconds * (degree / 360);
    const newDate = new Date(startDate.getTime() + selectedMilliseconds);
    setSelectedDate(newDate);
  }, [degree]);

  return (
    <div className="flex flex-col gap-5 items-center">
      <ClockHandler
        size={{
          width: 300,
          height: 300,
        }}
        initialDegree={0}
        onDegreeUpdate={onDegreeUpdate}
      />
      <div data-testid="clockDate">{format(selectedDate, "yyyy-MM-dd")}</div>
    </div>
  );
}
