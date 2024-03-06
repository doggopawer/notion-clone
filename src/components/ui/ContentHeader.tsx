import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 24px;
`;

type ContentHeaderProps = {
  title: string;
  children: React.ReactNode;
};
const ContentHeader = ({ title, children }: ContentHeaderProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default ContentHeader;
