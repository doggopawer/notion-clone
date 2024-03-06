import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDocument } from "apis";

const useDeleteDocumentListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (documentIds: number[]) => {
      const deleteRequests = documentIds.map((id) => deleteDocument(id));
      await Promise.all(deleteRequests);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["document"],
        refetchType: "all",
      });
    },
  });
};

export default useDeleteDocumentListMutation;
