import { useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Section1 = () => {
  // const [round, setRound] = useState("50px");
  const [view, setView] = useState("80vh");

  const onClick = () => {
    // setRound(`${round === "0" ? "50px" : "0"}`);
    setView(`${view === "80vh" ? "20vh" : "80vh"}`);
  };

  return (
    <>
      <Wrap>
        <MenuWrap onClick={onClick}>
          <Menu>웹사이트</Menu>
          <Menu>토이프로젝트</Menu>
        </MenuWrap>
        <ConWrap
          className="renew"
          style={
            {
              // borderRadius: `0 ${round === "50px" ? "0" : "50px"} 0 0 `,
            }
          }
        >
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
        {/* 
      <ConWrap
        className="toy"
        style={
          {
            // borderRadius: `0 ${round === "0" ? "50px" : "0"} 0 0 `,
          }
        }
      >
        <Title onClick={onClick}>
          토이프로젝트<span>Toy Project</span>
        </Title>
        <ImgWrap>
          <Con></Con>
          <Desc>
            <h3>장바구니</h3>
            <p>설명</p>
          </Desc>
        </ImgWrap>
      </ConWrap> */}
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  padding: ${mainStyle.padding};
  display: flex;
  /* flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

const MenuWrap = styled.ul`
  z-index: 99;
  display: flex;
`;

const Menu = styled.li``;

// const Tag = styled.div`
//   width: 5%;
//   height: 200px;
//   background-color: ${mainStyle.backColor};
//   position: absolute;
//   left: 0;

//   color: ${mainStyle.subColor};
//   font-size: 22px;

//   /* line-height: 80px; */
//   text-align: center;
//   /* writing-mode: vertical-rl;
//   text-orientation: upright; */
//   border-radius: 20px 0 0 20px;
// `;

const ConWrap = styled.div`
  /* padding: 0 200px; */
  width: 100%;
  /* height: 50vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  &.renew {
    background-color: ${mainStyle.backColor};
    height: 100vh;
    position: absolute;
    top: 0;
  }
  &.toy {
    background-color: ${mainStyle.backColor2};
    height: 100vh;
    position: absolute;
    top: 0;
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

const ImgWrap = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

const Con = styled.div`
  width: 500px;
  height: 500px;
  background-color: gray;
  margin: 80px 40px 0 0;
`;

const Desc = styled.div``;
