import { useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Section1 = () => {
  // const [round, setRound] = useState("50px");
  // const [view, setView] = useState(`${mainStyle.backColor}`);
  // const [vview, setVview] = useState(`${mainStyle.backColor2}`);

  // const onClick = () => {
  //   setView(`${mainStyle.backColor2}`);
  // };

  // const clickOn = () => {
  //   setVview(`${mainStyle.backColor}`);
  // };

  return (
    <>
      <Wrap>
        <MenuWrap>
          <Menu>Site Renewal</Menu>
          <Menu>Toy Project</Menu>
        </MenuWrap>

        <ConWrap
          className="site"
          // view={view}
          style={
            {
              // display: `${view === `${mainStyle.backColor}` ? "flex" : "none"}`,
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

        <ConWrap
          className="toy"
          // vview={vview}
          style={
            {
              // display: `${view === `${mainStyle.backColor}` ? "none" : "flex"}`,
            }
          }
        >
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
    </>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuWrap = styled.ul`
  font-family: "Nanum Myeongjo", serif;

  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${mainStyle.backColor};

  /* position: fixed;
  top: 0; */
  li:nth-child(2) {
    margin-right: 0;
  }
`;

const Menu = styled.li`
  font-size: 18px;
  font-weight: 900;
  margin-right: 80px;
  color: ${mainStyle.subColor};
  padding: 5px 0;
  &:hover {
    color: ${mainStyle.pointColor};
    border-bottom: 1px solid ${mainStyle.pointColor};
  }
`;

const ConWrap = styled.div`
  /* padding: 0 200px; */
  width: 100%;
  /* height: 50vh; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
  padding: ${mainStyle.padding};
  &.site {
    /* background-color: ${(props) => props.view}; */
    height: 100vh;
    /* position: absolute;
    top: 0; */

    /* display: none; */
  }
  &.toy {
    /* background-color: ${(props) => props.vview}; */
    height: 100vh;
    /* position: absolute;
    top: 0; */

    display: none;
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
