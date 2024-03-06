import DocumentEditor from "components/business/DocumentEditor";
import { useParams } from "react-router-dom";

import DocumentList from "components/business/DocumentList";

import useGetDocumentQuery from "hooks/apis/queries/useGetDocumentQuery";
import ContentHeader from "components/ui/ContentHeader";

const DocumentEditorPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetDocumentQuery(parseInt(id as string));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DocumentEditor document={data} />
      <ContentHeader title={"Sub Notes"}>
        <DocumentList documents={data.documents} />
      </ContentHeader>
    </>
  );
};
export default DocumentEditorPage;
