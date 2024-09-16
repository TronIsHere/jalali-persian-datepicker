import React, { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import jalaali from "jalaali-js";

export interface JalaaliDate {
  jy: number;
  jm: number;
  jd: number;
}

export interface JalaliDatePickerProps {
  selected: JalaaliDate | undefined;
  onSelect: (date: JalaaliDate) => void;
}

const JalaliPersianDatePicker: React.FC<JalaliDatePickerProps> = ({
  selected,
  onSelect,
}) => {
  const [currentMonth, setCurrentMonth] = useState<JalaaliDate>(() => {
    return selected || jalaali.toJalaali(new Date());
  });

  useEffect(() => {
    if (selected) {
      setCurrentMonth(selected);
    }
  }, [selected]);

  const daysInMonth = jalaali.jalaaliMonthLength(
    currentMonth.jy,
    currentMonth.jm
  );
  const firstDayOfMonth = jalaali.jalCal(currentMonth.jy)[currentMonth.jm - 1];

  const handleDateClick = (day: number) => {
    const selectedJalaaliDate: JalaaliDate = { ...currentMonth, jd: day };
    onSelect(selectedJalaaliDate);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) =>
      prev.jm === 1
        ? { jy: prev.jy - 1, jm: 12, jd: 1 }
        : { ...prev, jm: prev.jm - 1, jd: 1 }
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) =>
      prev.jm === 12
        ? { jy: prev.jy + 1, jm: 1, jd: 1 }
        : { ...prev, jm: prev.jm + 1, jd: 1 }
    );
  };

  const renderCalendar = () => {
    const days = [];
    const startDay = (firstDayOfMonth + 1) % 7;
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8" />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        selected &&
        selected.jd === day &&
        selected.jm === currentMonth.jm &&
        selected.jy === currentMonth.jy;
      days.push(
        <Button
          key={day}
          variant={isSelected ? "default" : "ghost"}
          className={`w-8 h-8 p-0 font-normal ${
            isSelected ? "bg-primary text-primary-foreground" : ""
          }`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </Button>
      );
    }
    return days;
  };

  const jalaliMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const formatDate = (date: JalaaliDate | undefined) => {
    if (!date) return "انتخاب تاریخ";
    return `${date.jy}/${date.jm.toString().padStart(2, "0")}/${date.jd
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="mt-10">{formatDate(selected)}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4" dir="rtl">
          <div className="flex items-center justify-between mb-2">
            <Button variant="outline" size="icon" onClick={handleNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="font-semibold">
              {jalaliMonths[currentMonth.jm - 1]} {currentMonth.jy}
            </div>
            <Button variant="outline" size="icon" onClick={handlePrevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {["ش", "ی", "د", "س", "چ", "پ", "ج"].map((day) => (
              <div key={day} className="text-muted-foreground text-xs">
                {day}
              </div>
            ))}
            {renderCalendar()}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default JalaliPersianDatePicker;
