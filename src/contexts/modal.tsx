"use client";

import { modalContextType, modalStateType } from "@/types/modals";
import React, { createContext, useCallback, useMemo, useState } from "react";

const defaultContextValues = {
  open: false,
  modal: null,
  size: "",
  openModal: (data: any) => {},
  closeModal: () => {},
};

export const ModalContext = createContext<modalContextType>(defaultContextValues);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<modalStateType>({
    open: false,
    modal: null,
    size: "",
  });

  const openModal = useCallback(
    ({ modal, size }: { modal: React.ReactNode; size?: string }) => {
      if (!modal) return;

      setModalState(prev => ({
        ...prev,
        open: true,
        modal,
        size: size,
      }));
    },
    [modalState]
  );

  const closeModal = useCallback(() => {
    setModalState(prev => ({
      ...prev,
      open: false,
    }));
  }, [modalState]);

  const values = useMemo(
    () => ({
      ...modalState,
      openModal,
      closeModal,
    }),
    [modalState, openModal, closeModal]
  );

  return <ModalContext.Provider value={values}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
