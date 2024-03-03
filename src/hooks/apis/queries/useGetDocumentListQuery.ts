import { useQuery } from "@tanstack/react-query";
import { getDocumentList } from "apis";

const useGetDocumentListQuery = () => {
  return useQuery({
    queryKey: ["getDocumentList"],
    queryFn: async () => {
      const data = await getDocumentList();
      return data;
    },
  });
};

export default useGetDocumentListQuery;
