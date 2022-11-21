import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";
import imgFace from "../../../img/imgFace.png";
import React from "react";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";

export const Section2 = () => {
  const tool = ["javascript", "html", "css", "react"];
  // const isEven = (idx + 1) % 2 === 0;

  return (
    <>
      <Wrap>
        <InWrap>
          <Profile>
            <BoxWrap>
              <Box className="technic">
                저는...
                {tool.map((a) => (
                  <h1 key={a} className={`technic`}>
                    {a}
                  </h1>
                ))}
                를 다룰 줄 아는 프론트엔드 개발자 입니다.
              </Box>
              {/* <Box className="technic">HTML5</Box>
              <Box className="technic">CSS3</Box>
              <Box className="technic">React</Box> */}
            </BoxWrap>
            <Img
              style={{
                background: `url(${imgFace}) no-repeat center/cover`,
              }}
            />
            <BoxWrap>
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
          <TextWrap>
            <Text>
              처음부터 천천히, 한 우물만 파는 신입 개발자
              <span>"최희정"</span>입니다.
              <br />
              저는 <span>Frontend</span>를 깊이 있게 다져나가고자 하는 주니어
              개발자입니다. Backend에도 관심을 가지는 등, 분야를 가리지 않고
              적극적으로 개발에 대한 관심사를 넓혀나가고 있습니다.
              <br />
              <br />
              팀으로 움직이는 것에 큰 매력을 느끼며 저의 몫을 해내는 성취감이
              스스로의 발전에 더욱 동기부여를 해줍니다.
            </Text>
          </TextWrap>
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
  justify-content: center;
  align-items: center;
  margin-top: 100vh;
`;

const InWrap = styled.div`
  width: 100%;
  height: 80vh;
  padding: 50px 100px;
  background-color: ${mainStyle.mainColor};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.div`
  width: 30%;
  height: 300px;
`;

const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  text-align: center;
  position: relative;
  border-radius: 0.4em;
  margin-bottom: 50px;
  color: ${mainStyle.subColor};
  &.technic {
    background: ${mainStyle.blackColor};
    padding: 20px 50px;
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
    }
  }
  &.site {
    background: ${mainStyle.blackColor};
    padding: 10px 50px;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-right-color: ${mainStyle.blackColor};
      border-left: 0;
      margin-top: -7px;
      margin-left: -7px;
    }
  }
  svg {
    margin-left: 10px;
  }
`;

const TextWrap = styled.div``;

const Text = styled.div`
  font-family: "Source Code Pro", monospace;
  color: ${mainStyle.blackColor};
  font-weight: 900;
  span {
    font-size: 30px;
    color: ${mainStyle.backColor};
  }
`;
