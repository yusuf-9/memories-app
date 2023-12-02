
export type modalContextType = {
    open: boolean;
    modal: React.ReactNode;
    size?: string;
    openModal: (data: any) => void;
    closeModal: () => void;
  };
  
 export type modalStateType = {
    open: boolean;
    modal: React.ReactNode;
    size?: string;
  };
  