import styled from "styled-components";
import { mainStyle } from "./components/style/GlobalStyle";

export const Container = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.div`
  padding: ${mainStyle.padding};
`;
