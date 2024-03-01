import { createContext, ReactNode } from "react";
import { Document } from "types/document";

export type DocumentListContextType = {
  documents: Document[];
  setDocuments: React.Dispatch<React.SetStateAction<Document[]>>;
};
type DocumentProviderProps = {
  children: ReactNode;
  value: DocumentListContextType;
};

export const DocumentListContext = createContext<DocumentListContextType | {}>(
  {}
);
const DocumentListProvider = ({ children, value }: DocumentProviderProps) => {
  const { documents, setDocuments } = value;
  return (
    <DocumentListContext.Provider value={{ documents, setDocuments }}>
      {children}
    </DocumentListContext.Provider>
  );
};

export default DocumentListProvider;
