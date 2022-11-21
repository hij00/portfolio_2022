import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "../../../Container";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Section1 = () => {
  useEffect(() => {
    AOS.init();
  });

  // scrolltrigger===================
  const wrapRef = useRef(null);
  const textChoi = useRef(null);
  const textHee = useRef(null);
  const textJeong = useRef(null);

  useEffect(() => {
    const startScroll = {
      scrollTrigger: {
        trigger: wrapRef.current,
        start: "top top",
        toggleAction: "restart pause resume pause",
        scrub: 1,
        duration: 0.7,
      },
    };
    gsap.to(textChoi.current, {
      ...startScroll,
      x: -1500,
    });
    gsap.to(textHee.current, {
      ...startScroll,
      x: "1500px",
    });
    gsap.to(textJeong.current, {
      ...startScroll,
      x: "-1500px",
    });
  }, []);

  // scroll opacity===============
  const [change, setChange] = useState(1);

  const handleScroll = () => {
    const scr = window.pageYOffset;
    if (scr > 100) {
      setChange(0);
    } else {
      setChange(1);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <Wrap ref={wrapRef}>
        <Container>
          <SvgWrap>
            <SText className="choi" data-aos="zoom-in" ref={textChoi}>
              CHOI
              <span>&copy;</span>
              <SSText className="text"></SSText>
            </SText>

            <SText className="hee" data-aos="zoom-in" ref={textHee}>
              <Text className="hee" change={change}>
                <h3>클릭!</h3>
                <svg
                  fill="#607EAA"
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
              <MenuWrap className="site" change={change}>
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

            <SText className="jeong" data-aos="zoom-in" ref={textJeong}>
              JEONG
              <MenuWrap className="profile" change={change}>
                <ScrollWrap>
                  <LineWrap>
                    <Line />
                    <Line />
                    <Line />
                  </LineWrap>

                  <Text>스크롤</Text>
                </ScrollWrap>
              </MenuWrap>
            </SText>
          </SvgWrap>
        </Container>
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const SvgWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SText = styled.div`
  font-family: "Cormorant Garamond", serif;
  font-weight: 100;
  box-sizing: border-box;
  height: 33.33333%;
  display: flex;
  align-items: center;

  font-size: 300px;
  margin-top: -20px;
  margin-bottom: -20px;
  color: ${mainStyle.subColor};
  transform: scale(1);
  &.choi {
    margin-top: 0;
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
  }
  &.hee {
    justify-content: end;
  }
  &.jeong {
    justify-content: flex-start;
    &.box {
      margin-bottom: 20px;
    }
  }
`;

const SSText = styled.h1``;

const MenuWrap = styled.ul`
  font-family: "Source Code Pro", monospace;
  margin-right: 100px;
  margin-left: 30px;
  opacity: ${(props) => props.change};
  transition: 1s;
  &.site {
    text-align: right;
  }
  &.profile {
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
    opacity: ${(props) => props.change};
    transition: 1s;
    display: flex;
    align-items: center;
    padding-bottom: 120px;
    svg {
      margin-left: 10px;
    }
  }
`;

const ScrollWrap = styled.div`
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

// const ImgBox = styled.div`
//   h1 {
//     font-size: 18px;
//     font-family: "Nanum Myeongjo", serif;
//     margin-top: 10px;
//     color: ${mainStyle.pointColor};
//   }
// `;

// const Box = styled.div`
//   width: 300px;
//   height: 190px;
//   background-color: gray;
//   margin: 10px 0;
//   position: relative;
//   opacity: 0.8;
//   &.choi {
//     margin-top: 30px;
//   }
//   &.jeong {
//     margin-bottom: 30px;
//   }
// `;

// const Cover = styled.div`
//   position: absolute;
//   top: 0;
//   width: inherit;
//   height: inherit;

//   backdrop-filter: grayscale(1);
//   transition: 1s;
//   /* background-color: ${mainStyle.mainColor}; */
//   &:hover {
//     backdrop-filter: grayscale(0);
//   }
// `;
