import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Landing = () => {
  // let target = document.querySelector(".text");

  // function randomS() {
  //   let stringArr = [
  //     "안녕하세요. 신인 개발자 최희정입니다.",
  //     "저의 포트폴리오를 보시겠어요?",
  //   ];
  //   let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  //   let selectStringArr = selectString.split("");

  //   return selectStringArr;
  // }

  // function typing(stringArr) {
  //   target.textContent += stringArr.shift();
  //   setTimeout(() => {
  //     typing(stringArr);
  //   }, 80);
  // }
  // typing(randomS());

  // console.log(typing());
  // ===============

  // function textStyle() {
  //   let stringArr = [
  //     "안녕하세요. 신인 개발자 최희정입니다.",
  //     "저의 포트폴리오를 보시겠어요?",
  //   ];
  //   let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  //   let selectStringArr = selectString.split("");

  //   return selectStringArr;
  // }

  // function typingReset() {
  //   target.textContent = "";

  //   typing(textStyle());
  // }

  // function typing(randomArr) {
  //   if (randomArr.length > 0) {
  //     target.textContent += randomArr.shift();
  //     setTimeout(() => {
  //       typing(randomArr);
  //     }, 80);
  //   } else {
  //     setTimeout(typingReset, 3000);
  //   }
  // }

  // let target = document.querySelector("#dynamic");
  // console.log(target);
  // function blink() {
  //   target.classList.toggle("active");
  // }
  // setInterval(blink, 500);

  return (
    <Wrap>
      <TextWrap>
        <Title className="text" id="dynamic">
          신입 개발자 최희정입니다.
        </Title>
        <Desc>
          <Link to="/home">포트폴리오 보러가기</Link>
        </Desc>
      </TextWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TextWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`;

const Title = styled.p`
  margin-bottom: 50px;
  position: relative;
  display: inline-block;
  color: black;
  font-size: 1.5rem;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -5px;
    width: 2px;
    height: 100%;
    background-color: ${mainStyle.blackColor};
  }
  &.active::after {
    display: none;
  }
`;

const Desc = styled.div`
  a {
    color: ${mainStyle.pointColor};
  }
`;
