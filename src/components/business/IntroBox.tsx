import styled from "styled-components";

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
const Button = styled.button`
  width: 120px;
  height: 36px;
  border: 1.5px solid ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  border-radius: 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const IntroBox = () => {
  const handleMoveToEmail = () => {
    const emailAddress = "doggopawer@gmail.com";
    const subject = "요구사항 건의";
    const body = "Notable의 개선사항이나 바뀌었으면 하는 점을 적어주세요!";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <Wrapper>
      <div>
        <Title>Welcome To Notable!</Title>
        <Description>
          Notable에서 자유롭게 노트를 만들고, 수정하고, 삭제해보세요.
        </Description>
      </div>

      <Button onClick={handleMoveToEmail}>문의하기</Button>
    </Wrapper>
  );
};

export default IntroBox;
