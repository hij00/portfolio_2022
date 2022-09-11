import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Profile = () => {
  return (
    <Wrap>
      <Box></Box>
      <TextWrap>
        <Title>
          개발의 시작부터 끝까지, <br />
          최희정 입니다.
        </Title>
        <Desc>
          <Date>22.04 ~</Date>
          <Text></Text>
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
      </TextWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0 200px;
  background-color: ${mainStyle.backColor};
`;

const Box = styled.div`
  width: 40%;
  height: 700px;
  background-color: gray;
`;

const TextWrap = styled.div`
  margin-left: 200px;
`;

const Title = styled.div`
  font-size: 50px;
  margin-bottom: 50px;
  line-height: 70px;
`;

const Desc = styled.div`
  font-size: 22px;
  margin-bottom: 40px;
`;

const Date = styled.div``;

const Text = styled.div``;

const ImgWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  img {
    margin-right: 10px;
    margin-bottom: 20px;
  }
`;
