import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "./style/GlobalStyle";

export const Header = () => {
  return (
    <Wrap>
      <MenuWrap>
        <Menu>
          <Link to="/">홈</Link>
        </Menu>
        <Menu>
          <Link to="/introduce">프로필</Link>
        </Menu>
        <Menu>
          <Link to="/toy_project">토이프로젝트</Link>
        </Menu>
        <Menu>
          <Link to="/web_renewal">리뉴얼</Link>
        </Menu>
      </MenuWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  box-sizing: border-box;
  padding: ${mainStyle.padding};
`;
const MenuWrap = styled.ul`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
const Menu = styled.li`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 5px;
  border-bottom: 1px solid ${mainStyle.Navy};
  a {
    color: ${mainStyle.Navy};
  }
`;
