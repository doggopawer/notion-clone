import { createContext, ReactNode } from "react";
import { Document } from "types/document";

export type DocumentContextType = {
  documents: Document[];
  setDocuments: React.Dispatch<React.SetStateAction<Document[]>>;
};
type DocumentProviderProps = {
  children: ReactNode;
  value: DocumentContextType;
};

export const DocumentContext = createContext<DocumentContextType | {}>({});
const DocumentProvider = ({ children, value }: DocumentProviderProps) => {
  const { documents, setDocuments } = value;
  return (
    <DocumentContext.Provider value={{ documents, setDocuments }}>
      {children}
    </DocumentContext.Provider>
  );
};

export default DocumentProvider;
