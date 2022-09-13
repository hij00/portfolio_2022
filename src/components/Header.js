import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "./style/GlobalStyle";

export const Header = () => {
  const location = useLocation();
  const [show, setShow] = useState("#EAE3D2");
  const [clickE, setClickE] = useState();

  useEffect(() => {
    const handleClick = () => {
      const onClick = () => {
        console.log(location.pathname);
        if (location.pathname !== "/") {
          setShow("#576F72");
        } else {
          setShow("#EAE3D2");
        }
      };
      setClickE(onClick);
    };
    handleClick();
  }, [location]);

  return (
    <Wrap>
      <MenuWrap clickE={clickE}>
        <Menu show={show}>
          <Link to="/">홈</Link>
        </Menu>
        <Menu show={show}>
          <Link to="/profile">프로필</Link>
        </Menu>
        <Menu show={show}>
          <Link to="/toy_project">토이프로젝트</Link>
        </Menu>
        <Menu show={show}>
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
    color: ${(props) => props.show};
    padding: 3px;
  }
`;
