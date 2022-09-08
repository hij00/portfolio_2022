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
          <Link to="/profile">프로필</Link>
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
  top: 50px;
  right: 0;
  box-sizing: border-box;
  padding: ${mainStyle.padding};
`;
const MenuWrap = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
const Menu = styled.li`
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 5px;
  margin-bottom: 5px;
  a:hover {
    /* border-bottom: 1px solid ${mainStyle.pointColor}; */
    background-color: ${mainStyle.pointColor};
    color: black;
  }
  a {
    color: ${mainStyle.subColor};
    padding: 3px;
  }
`;
