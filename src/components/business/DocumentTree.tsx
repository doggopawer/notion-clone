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
  /* border-radius: 20px; */
  padding: 20px;
  position: absolute;
  right: 0px;
  bottom: calc(56px + 10px);
`;

const TreeContainer = styled.div`
  width: 260px;
  height: 240px;
  overflow: scroll;
  scrollbar-width: none; /* Firefox에 대한 스크롤바 숨김 */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera에 대한 스크롤바 숨김 */
  }
`;

const TreeNode = styled.li`
  list-style-type: none; /* 목록 기호 제거 */
  padding: 10px 0;
`;

const TreeNodeTitle = styled.span`
  font-size: 16px;
  font-weight: 400; /* 노드 제목 강조 */
  cursor: pointer; /* 마우스 오버 시 포인터 커서로 변경 */
`;

const TreeNodeList = styled.ul`
  margin-left: 20px; /* 하위 노드를 위한 들여쓰기 */
`;

const ToggleIcon = styled.span`
  margin-right: 5px; /* 아이콘과 제목 사이 간격 조정 */
`;

const DocumentTree = () => {
  const { data, isLoading } = useGetDocumentListQuery();

  const [expandedNodes, setExpandedNodes] = useState<number[]>([]);

  const toggleNode = (id: number) => {
    if (expandedNodes.includes(id)) {
      setExpandedNodes(expandedNodes.filter((nodeId) => nodeId !== id));
    } else {
      setExpandedNodes([...expandedNodes, id]);
    }
  };

  const renderTreeNode = (node: Document) => {
    const isExpanded = expandedNodes.includes(node.id);

    return (
      <TreeNode key={node.id}>
        <TreeNodeTitle onClick={() => toggleNode(node.id)}>
          <ToggleIcon>
            <FontAwesomeIcon icon={isExpanded ? faCaretDown : faCaretRight} />
          </ToggleIcon>
          {node.title}
        </TreeNodeTitle>
        {isExpanded && node.documents && (
          <TreeNodeList>
            {node.documents.map((childNode) => renderTreeNode(childNode))}
          </TreeNodeList>
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
