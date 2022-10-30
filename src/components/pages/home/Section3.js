import styled from "styled-components";
import { Container } from "../../../Container";
import { textSite } from "../../../Text";
import { mainStyle } from "../../style/GlobalStyle";

export const Section3 = () => {
  return (
    <Wrap>
      <Container>
        {textSite.map((a) => (
          <ConWrap>
            <Con></Con>
            <TextWrap>{a.title}</TextWrap>
          </ConWrap>
        ))}
      </Container>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  background-color: ${mainStyle.backColor};
`;

const ConWrap = styled.div``;

const Con = styled.div``;

const TextWrap = styled.div``;
