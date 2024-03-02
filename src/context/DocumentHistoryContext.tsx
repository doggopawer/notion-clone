import { createContext, ReactNode } from "react";

export type DocumentHistory = {
  id: number;
  title: string;
};

export type DocumentHistoryContextType = {
  documentHistories: DocumentHistory[];
  setDocumentHistories: React.Dispatch<React.SetStateAction<DocumentHistory[]>>;
};
type DocumentHistoryProviderProps = {
  children: ReactNode;
  value: DocumentHistoryContextType;
};

export const DocumentHistoryContext = createContext<
  DocumentHistoryContextType | {}
>({});
const DocumentHistoryProvider = ({
  children,
  value,
}: DocumentHistoryProviderProps) => {
  const { documentHistories, setDocumentHistories } = value;
  return (
    <DocumentHistoryContext.Provider
      value={{ documentHistories, setDocumentHistories }}
    >
      {children}
    </DocumentHistoryContext.Provider>
  );
};

export default DocumentHistoryProvider;
