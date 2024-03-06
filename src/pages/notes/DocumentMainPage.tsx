import DocumentList from "components/business/DocumentList";
import ContentHeader from "components/ui/ContentHeader";

import useGetDocumentListQuery from "hooks/apis/queries/useGetDocumentListQuery";

const DocumentMainPage = () => {
  const { data, isLoading } = useGetDocumentListQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ContentHeader title={"Notes"}>
        <DocumentList documents={data} />
      </ContentHeader>
    </div>
  );
};
export default DocumentMainPage;
