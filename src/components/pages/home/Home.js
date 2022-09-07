import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";
import dyson from "../../../img/dyson.png";
import movie from "../../../img/movie.png";

export const Home = () => {
  return (
    <Wrap>
      <SvgWrap>
        <SText className="choi">
          CH
          <Site>
            <Box
              className="cover"
              style={{
                background: `url(${movie}) no-repeat left/cover`,
              }}
            >
              <Cover></Cover>
            </Box>

            <h1>01</h1>
          </Site>
          OI
          <span>&copy;</span>
        </SText>
        <SText className="hee">
          <Title>
            Click
            <svg
              fill="#607EAA"
              // mainStyle.pointColor
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="550px"
              height="8.724px"
              viewBox="0 0 594.564 8.724"
              enable-background="new 0 0 594.564 8.724"
            >
              <polygon points="585.782,3.604 577,1.897 577,5 0,5 0,6 577,6 577,8.724 585.782,7.018 594.564,5.311 " />
            </svg>
          </Title>
          <MenuWrap className="site">
            {/* <Title>바로가기</Title> */}
            <Menu>
              <Link to="#">Dyson</Link>
            </Menu>
            <Menu>
              <Link to="#">Seoul Botenical House</Link>
            </Menu>
            <Menu>
              <Link to="#">Movie API Site</Link>
            </Menu>
            <Menu>
              <Link to="#">Shopping Cart</Link>
            </Menu>
          </MenuWrap>
          HEE
        </SText>
        <SText className="jeong">
          JEONG
          <Site>
            <h1>02</h1>
            <Box
              className="cover"
              style={{
                background: `url(${dyson}) no-repeat left/cover`,
              }}
            >
              <Cover></Cover>
            </Box>
          </Site>
          <MenuWrap className="profile">
            {/* <Title>바로가기</Title> */}
            <Menu>
              <Link to="#">"저는"</Link>
              <div>→ Profile</div>
            </Menu>
            <Menu>
              <Link to="#">"개발자입니다"</Link>
              <div>→ Technic</div>
            </Menu>
          </MenuWrap>
        </SText>
      </SvgWrap>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${mainStyle.backColor};
`;

const SvgWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SText = styled.div`
  /* font-family: "Nanum Myeongjo", serif; */
  /* font-family: "Open Sans", sans-serif; */
  /* font-family: "Lora", serif; */
  font-family: "Cormorant Garamond", serif;
  font-weight: 100;
  box-sizing: border-box;
  height: 33.33333%;
  display: flex;
  align-items: center;
  padding: ${mainStyle.padding};
  font-size: 300px;
  margin-top: -20px;
  margin-bottom: -20px;
  color: ${mainStyle.subColor};
  &.choi {
    margin-top: 0;
    margin-left: 200px;
    & span {
      font-family: "Nanum Myeongjo", serif;

      font-size: 100px;
      margin-top: 110px;
      color: ${mainStyle.pointColor};
    }
    & div {
      margin-top: 30px;
    }
  }
  &.hee {
    justify-content: end;
  }
  &.jeong {
    justify-content: flex-start;
    margin-left: 00px;
    & div {
      margin-bottom: 20px;
    }
  }
`;

const MenuWrap = styled.ul`
  font-family: "Nanum Myeongjo", serif;
  margin-right: 100px;

  margin-left: 30px;

  &.site {
    text-align: right;
  }
  &.profile {
    text-align: left;

    margin-right: 0;
  }
`;

const Menu = styled.li`
  font-size: 18px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  a {
    color: ${mainStyle.mainColor};
  }

  a:hover {
    color: ${mainStyle.pointColor};
  }
  div {
    display: none;
    font-size: 18px;
    color: ${mainStyle.subColor};
  }
  &:hover {
    div {
      display: block;
    }
  }
`;

const Title = styled.div`
  color: ${mainStyle.pointColor};
  font-size: 22px;
  font-weight: 900;
  padding-bottom: 10px;
  margin-bottom: 100px;
  svg {
    margin: 0 0 5px 10px;
  }
`;

const Site = styled.div`
  h1 {
    font-size: 18px;
    font-family: "Nanum Myeongjo", serif;
    margin-top: 10px;
    color: ${mainStyle.pointColor};
  }
`;

const Box = styled.div`
  width: 300px;
  height: 200px;
  background-color: gray;
  margin: 10px 0;
  position: relative;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  width: inherit;
  height: inherit;
  background-color: ${mainStyle.mainColor};
`;
