import axios from "api/axios";
import {
  DeleteDocumentResponse,
  GetDoucmentByIdResponse,
  PostDocumentRequest,
  PostDocumentResponse,
  PutDocumentRequest,
  PutDocumentResponse,
} from "types/document";

export const getDocuments = async () => {
  const { data } = await axios.get("/documents");
  return data;
};
export const getDocumentById = async (documentId: number) => {
  const { data }: { data: GetDoucmentByIdResponse } = await axios.get(
    `/documents/${documentId}`
  );
  return data;
};
export const postDocument = async (
  postDocumentRequest: PostDocumentRequest
) => {
  const { data }: { data: PostDocumentResponse } = await axios.post(
    "/documents",
    postDocumentRequest
  );
  return data;
};
export const putDocument = async (putDocumentRequest: PutDocumentRequest) => {
  const { data }: { data: PutDocumentResponse } = await axios.put(
    "/documents",
    putDocumentRequest
  );
  return data;
};
export const deleteDocument = async (documentId: number) => {
  const { data }: { data: DeleteDocumentResponse } = await axios.delete(
    `/documents/${documentId}`
  );
  return data;
};
