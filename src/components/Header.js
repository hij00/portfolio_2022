import styled from "styled-components";

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

const Wrap = styled.div``;
const MenuWrap = styled.ul``;
const Menu = styled.li``;
