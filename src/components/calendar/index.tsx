"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useNavigation } from "react-day-picker";
import YearDropdown from "@/components/calendar/year-dropdown";

const CalendarContainer = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="m-auto flex flex-col gap-10 items-center mt-10">
        <h3 className="uppercase">Add a new memory</h3>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-xl border bg-background text-xl w-auto"
        captionLayout="dropdown-buttons"
        fromYear={1923}
        toYear={2023}
        components={{
          CaptionLabel: () => null,
          Dropdown: props => {
            return <YearDropdown {...props} />;
          },
        }}
      />
    </section>
  );
};

export default CalendarContainer;
