import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyle";
import { Section1 } from "./Section1";

export const Profile = () => {
  return (
    <>
      <Wrap />
      <Section1 />
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${mainStyle.backColor2};
  position: fixed;
  top: 0;
  z-index: -1;
`;
