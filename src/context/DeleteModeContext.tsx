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
    if (!isDeleteMode) {
      setIsDeleteMode(true);
      return;
    }
    setIsDeleteMode(false);
    setDeleteIdList([]);
  };
  const handlePushDeleteId = (deleteId: number) => {
    if (deleteIdList.includes(deleteId)) {
      setDeleteIdList([...deleteIdList.filter((id) => id !== deleteId)]);
      return;
    }
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
