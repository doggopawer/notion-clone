import List from "components/ui/List";
import { Document } from "types/document";

import DocumentItem from "components/business/DocumentItem";
import styled from "styled-components";

type DocumentListProps = {
  documents: Document[];
};

const Wrapper = styled.ul``;

const DocumentList = ({ documents }: DocumentListProps) => {
  return (
    <Wrapper>
      <List<Document>
        data={documents}
        render={(document) => (
          <DocumentItem key={document.id} document={document} />
        )}
      />
    </Wrapper>
  );
};

export default DocumentList;
