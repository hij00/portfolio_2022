import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";
import dyson from "../../../img/banner/dyson.png";
import movie from "../../../img/banner/movie.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Section1 = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Wrap>
        <SvgWrap>
          <SText className="choi" data-aos="zoom-in">
            CH
            <ImgBox>
              <a
                target="_top"
                href="https://wjdgus1122.github.io/dyson_project"
              >
                <Box
                  className="choi"
                  style={{
                    background: `url(${dyson}) no-repeat left/cover`,
                  }}
                >
                  <Cover />
                </Box>

                <h1>01</h1>
              </a>
            </ImgBox>
            OI
            <span>&copy;</span>
            <SSText className="text"></SSText>
          </SText>

          <SText className="hee" data-aos="zoom-in">
            <Text className="hee">
              <h3>클릭!</h3>
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
                enableBackground="new 0 0 594.564 8.724"
              >
                <polygon points="585.782,3.604 577,1.897 577,5 0,5 0,6 577,6 577,8.724 585.782,7.018 594.564,5.311 " />
              </svg>
            </Text>
            <MenuWrap className="site">
              {/* <Title>바로가기</Title> */}
              <Menu>
                <a
                  target="_top"
                  href="https://wjdgus1122.github.io/dyson_project"
                >
                  Dyson
                </a>
              </Menu>
              <Menu>
                <a
                  target="_top"
                  href="https://hij00.github.io/seoul_garden_renewal/"
                >
                  Seoul Botenical House
                </a>
              </Menu>
              <Menu>
                <a target="_top" href="https://hij00.github.io/Heving_app/">
                  Movie Site
                </a>
              </Menu>
              <Menu>
                <a target="_top" href="https://hij00.github.io/toy_cart/">
                  Shopping Cart
                </a>
              </Menu>
            </MenuWrap>
            HEE
          </SText>

          <SText className="jeong" data-aos="zoom-in">
            JEONG
            <ImgBox>
              <h1>02</h1>
              <Box
                className="jeong"
                style={{
                  background: `url(${movie}) no-repeat center/cover`,
                }}
              >
                <Cover />
              </Box>
            </ImgBox>
            <MenuWrap className="profile">
              {/* <Title>바로가기</Title> */}
              <Menu>
                <Link to="/profile">"저는"</Link>
                <div>→ Profile</div>
              </Menu>
              <ClickWrap>
                <LineWrap>
                  <Line />
                  <Line />
                  <Line />
                </LineWrap>

                <Text>스크롤</Text>
              </ClickWrap>
              {/* <Menu>
          <Link to="#">"개발자입니다"</Link>
          <div>→ Technic</div>
        </Menu> */}
            </MenuWrap>
          </SText>
        </SvgWrap>
      </Wrap>
    </>
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
    /* margin-left: 200px; */
    justify-content: flex-start;
    & span {
      font-family: "Nanum Myeongjo", serif;

      font-size: 100px;
      margin-top: 110px;
      color: ${mainStyle.pointColor};
    }
    &.box {
      margin-top: 40px;
    }

    /* white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    animation: typing 2s steps(6), blink 0.5s step-end infinite alternate;
    @keyframes typing {
      from {
        width: 0;
      }
    }
    @keyframes blink {
      50% {
        border-color: transparent;
      }
    } */
    // steps typing

    /* display: none; */
  }
  &.hee {
    justify-content: end;
  }
  &.jeong {
    justify-content: flex-start;
    /* margin-left: 200px; */
    &.box {
      margin-bottom: 20px;
    }
  }
`;

const SSText = styled.h1``;

const MenuWrap = styled.ul`
  font-family: "Nanum Myeongjo", serif;
  margin-right: 100px;

  margin-left: 30px;

  &.site {
    text-align: right;
  }
  &.profile {
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
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

const Text = styled.div`
  color: ${mainStyle.pointColor};
  font-size: 18px;
  font-weight: 500;
  font-family: "Noto Sans KR", sans-serif;
  &.hee {
    display: flex;
    align-items: center;
    padding-bottom: 120px;
    svg {
      margin-left: 10px;
    }
  }
`;

const ClickWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  h3 {
    margin: 20px 0;
    font-size: 22px;
  }
`;

const LineWrap = styled.div`
  margin-bottom: 20px;
`;

const Line = styled.div`
  width: 20px;
  height: 20px;
  border-bottom: 1px solid ${mainStyle.pointColor};
  border-left: 1px solid ${mainStyle.pointColor};
  transform: rotate(-45deg);

  animation: scroll 2s infinite;
  @keyframes scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.15s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
`;

const ImgBox = styled.div`
  h1 {
    font-size: 18px;
    font-family: "Nanum Myeongjo", serif;
    margin-top: 10px;
    color: ${mainStyle.pointColor};
  }
`;

const Box = styled.div`
  width: 300px;
  height: 190px;
  background-color: gray;
  margin: 10px 0;
  position: relative;
  opacity: 0.8;
  &.choi {
    margin-top: 30px;
  }
  &.jeong {
    margin-bottom: 30px;
  }
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  width: inherit;
  height: inherit;

  backdrop-filter: grayscale(1);
  transition: 1s;
  /* background-color: ${mainStyle.mainColor}; */
  &:hover {
    backdrop-filter: grayscale(0);
  }
`;
