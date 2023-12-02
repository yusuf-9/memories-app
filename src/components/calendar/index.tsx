"use client";

import React, { useCallback, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import YearDropdown from "@/components/calendar/dropdown";
import useModal from "@/hooks/useModal";
import AddMemoryModal from "../modals/add-memory";

const CalendarContainer = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const {openModal} = useModal();

  const handleOpenModal = useCallback((date: Date | undefined) => {
    setDate(date)
    openModal({
      modal: <AddMemoryModal />
    })
  }, [openModal, setDate])

  return (
    <section className="m-auto flex flex-col gap-10 items-center mt-10">
        <h3 className="uppercase">Add a new memory</h3>
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleOpenModal}
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
