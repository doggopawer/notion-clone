import { useState } from "react";
import useGetDocumentListQuery from "hooks/apis/queries/useGetDocumentListQuery";
import { Document } from "types/document";
import styled from "styled-components";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentHeader from "components/ui/ContentHeader";

const Wrapper = styled.div`
  border: 2px solid ${(props) => props.theme.secondary};
  background: ${(props) => props.theme.primary};
  padding: 20px;
  position: absolute;
  right: 0px;
  bottom: calc(56px + 10px);
`;

const TreeContainer = styled.div`
  width: 260px;
  height: 240px;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TreeNode = styled.li`
  list-style-type: none;
  padding: 10px 0;
`;

const TreeNodeTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

const TreeNodeList = styled.ul`
  margin-left: 20px;
`;

const ToggleIcon = styled.span`
  margin-right: 5px;
  cursor: pointer;
`;

const NoSubDocumentsText = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;

const DocumentTree = () => {
  const { data, isLoading } = useGetDocumentListQuery();

  const [expandedNodes, setExpandedNodes] = useState<number[]>([]);
  const [clickedIcon, setClickedIcon] = useState<number | null>(null);

  const toggleNode = (id: number) => {
    if (clickedIcon === id) {
      setClickedIcon(null);
    } else {
      setClickedIcon(id);
      setExpandedNodes((prevNodes) =>
        prevNodes.includes(id)
          ? prevNodes.filter((nodeId) => nodeId !== id)
          : [...prevNodes, id]
      );
    }
  };

  const renderTreeNode = (node: Document) => {
    const isExpanded = expandedNodes.includes(node.id);
    const isLeafNode = !node.documents || node.documents.length === 0;

    return (
      <TreeNode key={node.id}>
        <TreeNodeTitle
          onClick={() => (window.location.href = `/documents/${node.id}`)}
        >
          {node.title}
        </TreeNodeTitle>
        <ToggleIcon onClick={() => toggleNode(node.id)}>
          <FontAwesomeIcon icon={isExpanded ? faCaretDown : faCaretRight} />
        </ToggleIcon>
        {isExpanded && !isLeafNode && node.documents && (
          <TreeNodeList>
            {node.documents.map((childNode) => renderTreeNode(childNode))}
          </TreeNodeList>
        )}
        {isLeafNode && isExpanded && (
          <NoSubDocumentsText>하위 문서가 없습니다.</NoSubDocumentsText>
        )}
      </TreeNode>
    );
  };

  const convertDataToJSX = (data: Document[]) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Wrapper>
        <ContentHeader title="Note Tree">
          <TreeContainer>
            <ul>{data.map((node) => renderTreeNode(node))}</ul>
          </TreeContainer>
        </ContentHeader>
      </Wrapper>
    );
  };

  return <div>{convertDataToJSX(data)}</div>;
};

export default DocumentTree;
