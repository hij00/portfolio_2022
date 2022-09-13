import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Section2 = () => {
  return (
    <Wrap>
      <TextWrap>
        <Title>끊임없이 발전하는 개발자</Title>
        <Desc></Desc>
      </TextWrap>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${mainStyle.backColor3};
  padding: 0 400px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div``;

const Desc = styled.div``;
