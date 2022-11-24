import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyle";
import { useEffect, useState } from "react";

const typing = "신입 개발자 최희정입니다 :)";
export const Landing = () => {
  const [curText, setCurText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurText(typing.slice(0, curText.length + 1));
    }, 200);

    return () => clearTimeout(timeout);
  }, [curText]);

  return (
    <Wrap>
      <TextWrap>
        <Title className="text">{curText}</Title>
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
  font-weight: 500;
  font-family: "IBM Plex Sans KR", sans-serif;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -5px;
    width: 2px;
    height: 100%;
    background-color: ${mainStyle.blackColor};
    animation: blink 0.7s step-end infinite;
  }
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

const Desc = styled.div`
  a {
    color: ${mainStyle.pointColor};
  }
`;
