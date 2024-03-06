import { createContext, useState, ReactNode } from "react";

export type DeleteModeContextType = {
  isDeleteMode: boolean;
  handleToggleIsDeleteMode: () => void;
  deleteIdList: number[];
  handlePushDeleteId: (id: number) => void;
};

export const DeleteModeContext = createContext<DeleteModeContextType | {}>({});

type DeleteModeProviderProps = {
  children: ReactNode;
};

const DeleteModeProvider = ({ children }: DeleteModeProviderProps) => {
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [deleteIdList, setDeleteIdList] = useState<number[]>([]);

  const handleToggleIsDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
  };
  const handlePushDeleteId = (deleteId: number) => {
    setDeleteIdList([...deleteIdList, deleteId]);
  };

  return (
    <DeleteModeContext.Provider
      value={{
        isDeleteMode,
        handleToggleIsDeleteMode,
        deleteIdList,
        handlePushDeleteId,
      }}
    >
      {children}
    </DeleteModeContext.Provider>
  );
};

export default DeleteModeProvider;
