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
  margin-top: 100px;
  border-top: 1px solid ${mainStyle.blackColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div``;
