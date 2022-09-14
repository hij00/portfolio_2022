import { useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Section1 = () => {
  const [round, setRound] = useState("0");
  const onClick = () => {
    setRound("50px");
  };

  return (
    <Wrap>
      <ConWrap className="renew" onClick={onClick} round={round}>
        <Title>
          웹리뉴얼
          <span>WebSite Renewal</span>
        </Title>
        <ImgWrap>
          <Con></Con>
          <Desc>
            <h3>다이슨</h3>
            <p>설명</p>
          </Desc>
        </ImgWrap>
      </ConWrap>

      <ConWrap className="toy" onClick={onClick} round={round}>
        <Title>
          토이프로젝트<span>Toy Project</span>
        </Title>
        <ImgWrap>
          <Con></Con>
          <Desc>
            <h3>장바구니</h3>
            <p>설명</p>
          </Desc>
        </ImgWrap>
      </ConWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  /* padding: ${mainStyle.padding}; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConWrap = styled.div`
  /* padding: 0 200px; */
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.renew {
    background-color: ${mainStyle.backColor};
    /* border-radius: 10px 20px 30px 40px; */
    border-radius: 0 ${(props) => props.round} 0 0;
  }
  &.toy {
    background-color: ${mainStyle.backColor2};
    border-radius: 0 ${(props) => props.round} 0 0;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  span {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 100;
  }
`;

const ImgWrap = styled.div``;

const Con = styled.div`
  width: 500px;
  height: 500px;
  background-color: gray;
  margin: 80px 0 40px;
`;

const Desc = styled.div``;
