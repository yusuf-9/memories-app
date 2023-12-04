"use client";

import React, { useEffect } from "react";

// custom hooks
import useModal from "@/hooks/useModal";

// components
import { Dialog } from "@/components/ui/dialog";


const GlobalModal = () => {
  const { open, modal : modalContent, closeModal } = useModal();

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      {modalContent}
    </Dialog>
  );
};

export default GlobalModal;
