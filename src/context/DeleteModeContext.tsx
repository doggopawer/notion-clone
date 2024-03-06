import useDeleteDocumentListMutation from "hooks/apis/mutations/useDeleteDocumentListMutation";
import { createContext, useState, ReactNode } from "react";

export type DeleteModeContextType = {
  isDeleteMode: boolean;
  handleToggleIsDeleteMode: () => void;
  deleteIdList: number[];
  handlePushDeleteId: (id: number) => void;
  handleDeleteDocumentList: (deleteIdList: number[]) => void;
};

export const DeleteModeContext = createContext<DeleteModeContextType | {}>({});

type DeleteModeProviderProps = {
  children: ReactNode;
};

const DeleteModeProvider = ({ children }: DeleteModeProviderProps) => {
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [deleteIdList, setDeleteIdList] = useState<number[]>([]);
  const { mutate } = useDeleteDocumentListMutation();

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

  const handleDeleteDocumentList = (deleteIdList: number[]) => {
    mutate(deleteIdList);
    setDeleteIdList([]);
  };

  return (
    <DeleteModeContext.Provider
      value={{
        isDeleteMode,
        handleToggleIsDeleteMode,
        deleteIdList,
        handlePushDeleteId,
        handleDeleteDocumentList,
      }}
    >
      {children}
    </DeleteModeContext.Provider>
  );
};

export default DeleteModeProvider;
