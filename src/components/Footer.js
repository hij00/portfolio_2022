import styled from "styled-components";
import { mainStyle } from "./styles/GlobalStyle";

export const Footer = () => {
  return (
    <Wrap>
      <Text>&copy;Choi Heejeong</Text>
    </Wrap>
  );
};

const Wrap = styled.div`
  border-top: 1px solid ${mainStyle.blackColor};
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div``;
