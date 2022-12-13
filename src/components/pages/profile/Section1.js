import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyle";
import imgFace from "../../../img/imgFace.png";
import React from "react";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";

export const Section1 = () => {
  return (
    <>
      <Wrap>
        <InWrap>
          <Title>Hello, I'm Heejeong</Title>
          <Profile>
            <BoxWrap>
              <Box className="question">Technology Stacks..?</Box>

              <Box className="answer">
                <h1>HTML5 / CSS</h1>
                <div className="answerDiv">
                  <h3>웹표준을 지키려 노력합니다. </h3>
                  <h3>styled-component를 활용할 수 있습니다.</h3>
                  <h3>
                    keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.
                  </h3>
                  <h3>반응형을 적용할 수 있습니다.</h3>
                  <h3>오픈 API를 이용해 웹을 구축할 수 있습니다.</h3>
                </div>
              </Box>
              <Box className="answer">
                <h1>Javascript</h1>
                <h3>ES6+ 문법에 익숙합니다.</h3>
              </Box>
              <Box className="answer">
                <h1>React</h1>
                <h3>상태관리 라이브러리(redux) 사용 경험이 있습니다.</h3>
              </Box>
            </BoxWrap>
            <Img
              style={{
                background: `url(${imgFace}) no-repeat center/cover`,
              }}
            />
            <BoxWrap>
              <Box className="question">Your site..?</Box>

              <Box className="site">
                <a href="#!">
                  Git Hub
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </Box>
              <Box className="site">
                <a href="#!">
                  E-MAIL
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </Box>
            </BoxWrap>
          </Profile>
        </InWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 400px;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`;

const InWrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  width: 100%;
  padding-bottom: 20px;
  text-align: center;
  font-size: 25px;
  font-weight: 900;
  border-bottom: 2px solid ${mainStyle.blackColor};
`;

const Profile = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.div`
  width: 30%;
  height: 400px;
`;

const BoxWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Box = styled.div`
  text-align: center;
  position: relative;
  border-radius: 0.6em;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  color: ${mainStyle.subColor};
  &.question {
    font-size: 18px;
    font-weight: 500;
    background: ${mainStyle.backColor};
    padding: 20px 50px;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-right-color: ${mainStyle.backColor};
      border-left: 0;
      margin-top: -7px;
      margin-left: -7px;
    }
  }
  &.answer {
    background: ${mainStyle.pointColor};
    padding: 20px 20px;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-left-color: ${mainStyle.pointColor};
      border-right: 0;
      margin-top: -7px;
      margin-right: -7px;
    }
    h1 {
      padding-bottom: 10px;
      border-bottom: 1px solid ${mainStyle.subColor};
      font-size: 18px;
      font-weight: 500;
    }
    h3 {
      color: ${mainStyle.subColor};
      font-size: 18px;
      font-weight: 500;
      align-items: flex-start;
      padding: 5px;
      opacity: 0.8;
    }
    div.answerDiv {
      display: flex;
      flex-direction: column;

      align-items: flex-start;
    }
  }
  h1 {
    padding: 2px;
  }
  &.site {
    background: ${mainStyle.blackColor};
    padding: 20px 100px;
    transition: 0.5s;
    animation: blink 1s step-end infinite;
    @keyframes blink {
      50% {
        opacity: 0.8;
      }
    }
    &:hover {
      background: ${mainStyle.pointColor};
      &::after {
        border-left-color: ${mainStyle.pointColor};
      }
      animation: none;
    }
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-left-color: ${mainStyle.blackColor};
      border-right: 0;
      margin-top: -7px;
      margin-right: -7px;
      transition: 0.5s;
    }
  }
  svg {
    margin-left: 10px;
  }
`;
