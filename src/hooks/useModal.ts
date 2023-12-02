import { ModalContext } from "@/contexts/modal";
import { useContext } from "react";

const useModal = () => {
  const {...modalState} = useContext(ModalContext)

  return {...modalState};
};

export default useModal;
