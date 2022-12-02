import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "./styles/GlobalStyle";

export const Header = () => {
  const location = useLocation();
  const [show, setShow] = useState("#EAE3D2");
  const [clickE, setClickE] = useState();
  const [menu, setMenu] = useState("flex");

  useEffect(() => {
    const handleClick = () => {
      const onClick = () => {
        if (location.pathname !== "/home") {
          setShow("#576F72");
        } else if (location.pathname === "/home") {
          setShow("#EAE3D2");
        }

        if (location.pathname === "/") {
          setMenu("none");
        } else {
          setMenu("flex");
        }
      };
      setClickE(onClick);
    };
    handleClick();
  }, [location]);

  return (
    <Wrap>
      <MenuWrap clickE={clickE} menu={menu}>
        <Menu show={show}>
          <Link to="/home">홈</Link>
        </Menu>
        <Menu show={show}>
          <Link to="/profile">프로필</Link>
        </Menu>
        <Menu show={show}>
          <Link to="/project">프로젝트</Link>
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
  z-index: 999;
`;
const MenuWrap = styled.ul`
  display: ${(props) => props.menu};
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
    background-color: ${mainStyle.pointColor};
    color: black;
  }
  a {
    color: ${(props) => props.show};
    padding: 3px;
  }
`;
