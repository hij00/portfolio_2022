import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";
import imgFace from "../../../img/imgFace.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Section2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <>
      <Wrap>
        <InWrap data-aos="fade-up">
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
              <span>"최희정"</span>입니다.
              <br />
              저는 <span>Frontend</span>를 깊이 있게 다져나가고자 하는 주니어
              개발자입니다. Backend에도 관심을 가지는 등, 분야를 가리지 않고
              적극적으로 개발에 대한 관심사를 넓혀나가고 있습니다.
            </Text>
            <Desc></Desc>
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
  margin-bottom: 50px;
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
  /* font-family: "Nanum Myeongjo", serif; */
  /* font-family: "Do Hyeon", sans-serif; */
  /* font-family: "IBM Plex Sans KR", sans-serif; */
  /* font-family: "Noto Sans KR", sans-serif; */
  /* font-family: "Sunflower", sans-serif; */
  font-family: "Source Code Pro", monospace;
  color: ${mainStyle.blackColor};
  font-weight: 900;
  span {
    font-size: 30px;
    color: ${mainStyle.backColor};
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
