import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDocument } from "apis";

const useDeleteDocumentMutation = (documentId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteDocument(documentId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["getDocument", documentId] });
      queryClient.invalidateQueries({ queryKey: ["getDocumentList"] });
    },
  });
};

export default useDeleteDocumentMutation;
