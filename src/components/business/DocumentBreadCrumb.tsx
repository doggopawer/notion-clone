import List from "components/ui/List";
import styled from "styled-components";
import useGetDocumentListQuery from "hooks/apis/queries/useGetDocumentListQuery";
import { Document } from "types/document";
import { useParams } from "react-router-dom";
import DocumentBreadCrumbItem from "./DocumentBreadCrumbItem";

const Wrapper = styled.ul`
  width: 50%;
  display: flex;
`;

const DocumentBreadCrumb = () => {
  const { data } = useGetDocumentListQuery();
  const { id } = useParams();

  function dfs(
    node: Document,
    targetId: number,
    path: Document[] = []
  ): Document[] {
    const currentPath = [...path, node];

    if (node.id === targetId) {
      return currentPath;
    }

    for (const document of node.documents) {
      const result = dfs(document, targetId, currentPath);

      if (result.length > 0) {
        return result;
      }
    }

    return [];
  }

  function getDocumentRoutes(data: Document[], targetId: number): Document[] {
    let path: Document[] = [];
    for (const document of data) {
      path = dfs(document, targetId);
      if (path.length > 0) {
        break;
      }
    }
    return path;
  }

  const documentRoutes = getDocumentRoutes(data, parseInt(id as string));

  return (
    <Wrapper>
      <List<Document>
        data={documentRoutes}
        render={(documentRoute) => (
          <DocumentBreadCrumbItem documentRoute={documentRoute} />
        )}
      />
    </Wrapper>
  );
};

export default DocumentBreadCrumb;
