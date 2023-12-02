"use client";

import React, { useEffect } from "react";

// components
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import useModal from "@/hooks/useModal";

const GlobalModal = () => {
  const { open, modal, closeModal } = useModal();

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
           {modal}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalModal;
