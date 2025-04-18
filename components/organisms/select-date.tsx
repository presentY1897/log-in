import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
import ClockHandler from "@/components/molecules/clock-handler";
import Button from "@/components/atoms/button";

interface SelectDateProps {
  startDate?: Date;
  endDate?: Date;
  confirmDate?: (currentDate: Date) => void;
}

export default function SelectDate({
  startDate = new Date(0),
  endDate = new Date(2025, 2, 26),
  confirmDate = () => {},
}: SelectDateProps) {
  const translate = useTranslations("SelectDate");

  const [degree, setDegree] = useState(0);
  const [selectedDate, setSelectedDate] = useState(startDate);

  const onDegreeUpdate = (degree: number) => {
    setDegree(degree);
  };

  useEffect(() => {
    const totalMilliseconds = endDate.getTime() - startDate.getTime();
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
      <div className="place-self-end">
        <Button
          onClick={() => {
            confirmDate(selectedDate);
          }}
        >
          {translate("Next")}
        </Button>
      </div>
    </div>
  );
}
