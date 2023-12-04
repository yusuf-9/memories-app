import React from "react";

// components
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AddMemoryFormContainer from "./form-container";


const AddMemoryModal = () => {
  return (
    <DialogContent className="max-w-[80vw] md:max-w-[70vw] xl:max-w-[60vw] w-[80vw] md:w-[70vw] xl:w-[60vw]">
      <DialogHeader>
        <DialogTitle>Add a new memory</DialogTitle>
        <DialogDescription className="mt-5">
          The most beautiful things are not associated with money; they are memories and moments.
        </DialogDescription>
        <AddMemoryFormContainer />
      </DialogHeader>
    </DialogContent>
  );
};

export default AddMemoryModal;
