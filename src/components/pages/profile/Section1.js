import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Section1 = () => {
  return (
    <>
      <Wrap>
        <Box></Box>
        <TextWrap>
          <Title>
            개발의 시작부터 끝까지, <br />
            <br />
            <span>"최희정"입니다.</span>
          </Title>

          <Desc>
            <Text>Frontend Developer</Text>
            <Text>22.04 ~ing</Text>

            <STitle>수료과정</STitle>
            <Text>
              SBS아카데미컴퓨터아트학원 - UIUX 프론트엔드 개발자양성과정
              <br />
              (2022.04.12 ~ 2022.07.29)
            </Text>
          </Desc>

          <ImgWrap>
            <img
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"
              alt="Javascript"
            />
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=black"
              alt="Html5"
            />
            <img
              src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=black"
              alt="Css3"
            />
            <img
              src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=black"
              alt="Node.js"
            />
          </ImgWrap>
          <ImgWrap>
            <img
              src="https://img.shields.io/badge/XD-FF61F6?style=flat-square&logo=AdobeXD&logoColor=black"
              alt="AdobeXD"
            />
            <img
              src="https://img.shields.io/badge/Photoshop-31A8FF?style=flat-square&logo=AdobePhotoshop&logoColor=black"
              alt="AdobePhotoshop"
            />
            <img
              src="https://img.shields.io/badge/Illustrator-FF9A00?style=flat-square&logo=AdobeIllustrator&logoColor=black"
              alt="AdobeIllustrator"
            />
          </ImgWrap>

          <Add>
            <a href="#!">이력서</a>
            <a href="https://github.com/hij00">Git Hub</a>
          </Add>
        </TextWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0 400px;
  background-color: ${mainStyle.backColor};
`;

const Box = styled.div`
  width: 35%;
  height: 600px;
  background-color: gray;
`;

const TextWrap = styled.div`
  margin-left: 200px;
`;

const Title = styled.div`
  font-family: "Nanum Myeongjo", serif;
  color: ${mainStyle.pointColor};
  span {
    font-size: 50px;
    color: ${mainStyle.mainColor};
  }
`;

const Desc = styled.div`
  font-size: 18px;
  margin: 40px 0;
  color: ${mainStyle.pointColor};
`;

const STitle = styled.div`
  margin: 30px 0 10px;
  color: #c5c6d0;
`;

const Text = styled.div`
  margin-bottom: 10px;
  line-height: 20px;
`;

const ImgWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  img {
    margin-right: 10px;
    margin-bottom: 20px;
  }
`;

const Add = styled.div`
  margin-top: 50px;
  a {
    padding: 10px 30px;
    margin-right: 50px;
    border-radius: 50px;
    background-color: black;
  }
`;
