import { useQuery } from "@tanstack/react-query";
import { getDocument } from "apis";

const useGetDocumentListQuery = (documentId: number) => {
  return useQuery({
    queryKey: ["document", documentId],
    queryFn: async () => {
      const data = await getDocument(documentId);
      return data;
    },
  });
};

export default useGetDocumentListQuery;
