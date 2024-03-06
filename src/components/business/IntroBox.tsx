import Modal from "components/ui/Modal/Modal";
import Portal from "components/ui/Portal";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  border: 1.5px solid ${(props) => props.theme.secondary};
  border-radius: 24px;
  height: 182px;
  padding: 24px;

  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 16px;
`;
const Description = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 24px;
`;
const buttonCSS = css`
  width: 120px;
  height: 36px;
  border: 1.5px solid ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  border-radius: 24px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

const IntroBox = () => {
  return (
    <Wrapper>
      <div>
        <Title>Notable에 오신것을 환영합니다!</Title>
        <Description>
          Notable에서 자유롭게 노트를 만들고, 수정하고, 삭제해보세요.
        </Description>
      </div>

      <Modal>
        <Modal.Trigger css={buttonCSS}>Notable 배우기</Modal.Trigger>
        <Portal>
          <Modal.Content>
            <Modal.Close>끄기</Modal.Close>
          </Modal.Content>
          <Modal.Backdrop />
        </Portal>
      </Modal>
    </Wrapper>
  );
};

export default IntroBox;
