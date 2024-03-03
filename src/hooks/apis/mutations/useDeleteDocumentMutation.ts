import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDocument } from "apis";

const useDeleteDocumentMutation = (documentId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteDocument(documentId),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["document"],
        refetchType: "all",
      });
    },
  });
};

export default useDeleteDocumentMutation;
