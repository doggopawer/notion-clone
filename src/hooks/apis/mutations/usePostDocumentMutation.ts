import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postDocument } from "apis";
import { useNavigate } from "react-router-dom";
import { PostDocumentRequest } from "types/document";

const usePostDocumentMutation = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (postDocumentRequest: PostDocumentRequest) =>
      postDocument(postDocumentRequest),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["document"],
        refetchType: "all",
      });
    },
    onSuccess: ({ id }) => {
      navigate(`/documents/${id}`);
    },
  });
};

export default usePostDocumentMutation;
