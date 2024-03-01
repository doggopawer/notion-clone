export type Document = {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  content?: string;
  documents: Document[];
};

export type GetDocumentsResponse = Document[];
export type GetDoucmentByIdResponse = Document & { content: string };
export type PostDocumentRequest = {
  title: string;
  parent: number | null;
};
export type PostDocumentResponse = Omit<Document, "documents">;
export type PutDocumentRequest = {
  title: string;
  content: string;
};
export type PutDocumentResponse = {
  id: number;
  title: string;
  content: string;
  parent: number | null;
  username: string;
  created_at: Date;
  updated_at: Date;
};
export type DeleteDocumentResponse = PutDocumentResponse;
