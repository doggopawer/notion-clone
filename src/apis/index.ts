import axios from "apis/axios";
import {
  DeleteDocumentResponse,
  PostDocumentRequest,
  PostDocumentResponse,
  PutDocumentRequest,
  PutDocumentResponse,
} from "types/document";

export const getDocumentList = async () => {
  const { data } = await axios.get("/documents");
  return data;
};
export const getDocument = async (documentId: number) => {
  const { data } = await axios.get(`/documents/${documentId}`);
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
export const putDocument = async (
  documentId: number,
  putDocumentRequest: PutDocumentRequest
) => {
  try {
    console.log("디바운스호출");
    const { data }: { data: PutDocumentResponse } = await axios.put(
      `/documents/${documentId}`,
      putDocumentRequest
    );
    return data;
  } catch (e) {
    console.error(e);
  }
};
export const deleteDocument = async (documentId: number) => {
  const { data }: { data: DeleteDocumentResponse } = await axios.delete(
    `/documents/${documentId}`
  );
  return data;
};
