import { Link } from "react-router-dom";
import styled from "styled-components";

export const Landing = () => {
  return (
    <Wrap>
      <TextWrap>
        <Title>안녕하세요. 신입 개발자 최희정 입니다.</Title>
        <Desc>
          <Link to="/home">포트폴리오 보러가기</Link>
        </Desc>
      </TextWrap>
    </Wrap>
  );
};

const Wrap = styled.div``;

const TextWrap = styled.div``;

const Title = styled.div``;

const Desc = styled.div``;
