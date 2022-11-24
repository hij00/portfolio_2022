import styled from "styled-components";
import { mainStyle } from "../../../styles/GlobalStyle";
import imgFace from "../../../../img/imgFace.png";
import React from "react";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";

export const Section2 = () => {
  const tool = ["Javascript", "HTML5", "CSS3", "React"];
  // const isEven = (idx + 1) % 2 === 0;

  return (
    <>
      <Wrap>
        <InWrap>
          <Title>Hello, I'm Heejeong</Title>
          <Profile>
            <BoxWrap>
              <Box className="question">tech stack..?</Box>
              <Box className="answer">
                {tool.map((a) => (
                  <h1 key={a} className={`technic`}>
                    {a}
                  </h1>
                ))}
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
              <Box className="question">your site..?</Box>

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
              처음부터 천천히, 끈기있게 배우고자 하는 신입 개발자
              <span>"최희정"</span>입니다.
              <br />
              저는 <span>Frontend</span>를 깊이 있게 배우고자 하는 주니어
              개발자입니다. 나아가서 Backend에도 관심을 가지는 등, 분야를 가리지
              않고 적극적으로 개발에 대한 관심을 넓히고 싶습니다.
              <br />
              <br />
              여러 협업과 팀 활동으로 다향한 사람과 함께하는 일에 대한 경험을
              쌓았으며, 매번 새로운 활동은 저의 성취감에 큰 자극을 주었고
              스스로가 발전해 나갈 기회를 만들어주었습니다. 이러한 경험을
              바탕으로 팀원들과의 소통을 중요하게 생각하며 서로에게 도움이 되는
              동료가 되고 싶습니다. 그런 동료가 될 수 있도록 노력하며
              행동하겠습니다.
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

const Title = styled.div`
  width: 100%;
  padding-bottom: 20px;
  text-align: center;
  font-size: 25px;
  font-weight: 900;
  border-bottom: 2px solid ${mainStyle.blackColor};
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
    background: ${mainStyle.backColor};
    padding: 20px 100px;
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
    padding: 20px 100px;
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
    img {
      display: block;
    }
  }
  h1 {
    padding: 2px;
  }
  &.site {
    background: ${mainStyle.blackColor};
    padding: 20px 100px;
    transition: 0.5s;
    &:hover {
      background: ${mainStyle.pointColor};
      &::after {
        border-left-color: ${mainStyle.pointColor};
      }
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

const TextWrap = styled.div``;

const Text = styled.div`
  font-family: "IBM Plex Sans KR", sans-serif;
  /* font-family: "Noto Sans KR", sans-serif; */
  color: ${mainStyle.blackColor};
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;
  span {
    font-size: 30px;
    color: ${mainStyle.backColor};
  }
`;
