import styled from "styled-components";
import { mainStyle } from "./styles/GlobalStyle";

export const Container = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.div`
  padding: ${mainStyle.padding};
`;
