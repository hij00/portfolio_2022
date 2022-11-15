import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";
import imgFace from "../../../img/imgFace.png";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

export const Section2 = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // });

  return (
    <>
      <Wrap>
        <InWrap data-aos="fade-up">
          {/* <MyProfile>
            <Img
              style={{
                background: `url(${imgFace}) no-repeat center/cover`,
              }}
            />

            <TextWrap>
              <Title>
                처음부터 천천히, 한 우물만 파는 신입 개발자
                <br />
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
          </MyProfile> */}
          <Title>JavaScript Loding</Title>
          <Profile>
            <Img
              style={{
                background: `url(${imgFace}) no-repeat center/cover`,
              }}
            />
            <SiteUrl>
              <a href="#!">Git Hub</a>
              <a href="#!">e-mail</a>
            </SiteUrl>
          </Profile>
          <TextWrap>
            <Text>
              처음부터 천천히, 한 우물만 파는 신입 개발자
              <br />
              <br />
              <span>"최희정"입니다.</span>
            </Text>
            <Desc>
              저는 Frontend를 깊이 있게 다져나가고자 하는주니어 개발자입니다.
              Backend에도 관심을 가지는 등, 분야를 가리지 않고 적극적으로 개발에
              대한 관심사를 넓혀나가고 있습니다.
            </Desc>
          </TextWrap>
        </InWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InWrap = styled.div`
  width: 100%;
  /* height: 80vh; */
  padding: 50px 100px;
  background-color: ${mainStyle.mainColor};
  border-radius: 50px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${mainStyle.pointColor3};
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 200px;
`;

const Img = styled.div`
  width: 30%;
  height: 200px;
`;

const SiteUrl = styled.div`
  a {
    display: block;
    background-color: ${mainStyle.blackColor};
    padding: 10px 50px;
    margin-bottom: 10px;
    border-radius: 50px;
  }
`;

const TextWrap = styled.div``;

const Text = styled.div`
  font-family: "Nanum Myeongjo", serif;
  color: ${mainStyle.subColor2};
  span {
    font-size: 50px;
    color: ${mainStyle.pointColor2};
  }
`;

const Desc = styled.div``;

// const MyProfile = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   width: 100%;
// `;

// const Img = styled.div`
//   width: 30%;
//   height: 300px;
//   background-color: gray;
// `;

// const TextWrap = styled.div`
//   margin-left: 100px;
//   width: 60%;
// `;

// const Title = styled.div`
//   font-family: "Nanum Myeongjo", serif;
//   color: ${mainStyle.subColor2};
//   span {
//     font-size: 50px;
//     color: ${mainStyle.pointColor2};
//   }
// `;

// const Desc = styled.div`
//   font-size: 18px;
//   margin: 40px 0;
//   color: ${mainStyle.subColor2};
// `;

// const STitle = styled.div`
//   margin: 30px 0 10px;
//   color: ${mainStyle.pointColor2};
// `;

// const Text = styled.div`
//   margin-bottom: 10px;
//   line-height: 20px;
// `;

// const ImgWrap = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: flex-start;
//   img {
//     margin-right: 10px;
//     margin-bottom: 20px;
//   }
// `;

// const Add = styled.div`
//   margin-top: 50px;
//   width: 100%;
//   display: flex;

//   a {
//     width: 50%;
//     height: 40px;
//     text-align: center;
//     line-height: 40px;
//     display: inline-block;
//     margin-right: 10px;
//     border-radius: 50px;
//     background-color: black;
//     transition: 0.5s;
//     &:hover {
//       background-color: ${mainStyle.backColor};
//     }
//   }
// `;
