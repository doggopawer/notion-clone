import DocumentList from "components/business/DocumentList";
import useGetDocumentListQuery from "hooks/apis/queries/useGetDocumentListQuery";

const DocumentMainPage = () => {
  const { data, isLoading } = useGetDocumentListQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <DocumentList documents={data} />
    </div>
  );
};
export default DocumentMainPage;
