import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Landing = () => {
  return (
    <Wrap>
      <TextWrap>
        <Title>안녕</Title>
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

const Title = styled.div`
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
`;

const Desc = styled.div`
  a {
    color: ${mainStyle.pointColor};
  }
`;
