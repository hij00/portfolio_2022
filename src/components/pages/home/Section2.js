import styled from "styled-components";
import { Container } from "../../../Container";
import { mainStyle } from "../../style/GlobalStyle";

export const Section2 = () => {
  return (
    <Wrap>
      <Container>
        <Title>hello, world!</Title>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${mainStyle.backColor};
`;

const Title = styled.div`
  font-size: 50px;
`;
