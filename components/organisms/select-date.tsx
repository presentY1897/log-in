import { useEffect, useState } from "react";
import ClockHandler from "../molecules/clock-handler";
import { format } from "date-fns";
import Button from "../atoms/button";
import { useTranslations } from "next-intl";

interface SelectDateProps {
  startDate?: Date;
  confirmDate?: (currentDate: Date) => void;
}

export default function SelectDate({
  startDate = new Date(0),
  confirmDate = () => {},
}: SelectDateProps) {
  const translate = useTranslations("SelectDate");

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
      <div data-testid="nextButton" className="place-self-end">
        <Button
          onClick={() => {
            confirmDate(selectedDate);
          }}
          text={translate("Next")}
        />
      </div>
    </div>
  );
}
