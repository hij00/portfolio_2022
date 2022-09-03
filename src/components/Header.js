import styled from "styled-components";
import { mainStyle } from "./style/GlobalStyle";

export const Header = () => {
  return (
    <Wrap>
      <MenuWrap>
        <Menu>홈</Menu>
        <Menu>소개</Menu>
        <Menu>토이프로젝트</Menu>
        <Menu>리뉴얼</Menu>
      </MenuWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  top: 0;
  height: 80px;
  width: 100%;
  background-color: salmon;
  padding: ${mainStyle.padding};
`;
const MenuWrap = styled.ul`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.li``;
