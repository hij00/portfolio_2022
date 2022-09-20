import { Site } from "./Site";
import { Toy } from "./Toy";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";
import { Link } from "react-router-dom";

export const Sectionn1 = () => {
  return (
    <>
      <MenuWrap>
        <Menu>Site Renewal</Menu>
        <Menu>Toy Project</Menu>
      </MenuWrap>
      <Site
        style={{
          display: "none",
        }}
      />
      <Toy />
    </>
  );
};

const MenuWrap = styled.ul`
  font-family: "Nanum Myeongjo", serif;

  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${mainStyle.backColor};

  /* position: fixed;
  top: 0; */
  li:nth-child(2) {
    margin-right: 0;
  }
`;

const Menu = styled.li`
  font-size: 18px;
  font-weight: 900;
  margin-right: 80px;
  color: ${mainStyle.subColor};
  padding: 5px 0;
  &:hover {
    color: ${mainStyle.pointColor};
    border-bottom: 1px solid ${mainStyle.pointColor};
  }
`;
