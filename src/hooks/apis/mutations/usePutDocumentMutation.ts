import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putDocument } from "apis";
import { PutDocumentRequest } from "types/document";

const usePutDocumentMutation = (documentId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (putDocumentRequest: PutDocumentRequest) =>
      putDocument(documentId, putDocumentRequest),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["getDocument", documentId] });
      queryClient.invalidateQueries({ queryKey: ["getDocumentList"] });
    },
  });
};

export default usePutDocumentMutation;
