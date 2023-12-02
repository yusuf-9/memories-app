import React, { useMemo } from "react";

// utils
import { cn } from "@/lib/utils";

// components
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const YearDropdown = (props: any) => {
  const { name, caption, onChange, children, className } = props;

  const reversedChildren = useMemo(() => [...children]?.reverse(), [children]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <h6 className={cn("text-lg font-medium inline cursor-pointer hover:underline", className)}>{caption}</h6>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="scrollbar-thin scrollbar-thumb-foreground scrollbar-track-background max-h-[300px] overflow-y-scroll">
        {reversedChildren?.map((item: any) => (
          <DropdownMenuCheckboxItem
            key={item?.key}
            checked={item?.key === caption || item?.props?.children === caption}
            onClick={() => onChange({ target: { value: item?.props?.value } })}>
            {name === "months" ? item?.props?.children : item?.props?.value}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default YearDropdown;
