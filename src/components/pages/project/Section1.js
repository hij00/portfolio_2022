import { useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Section1 = () => {
  const [view, setView] = useState(`${mainStyle.backColor3}`);

  const onClick = () => {
    setView(
      `${
        view === `${mainStyle.backColor3}`
          ? `${mainStyle.backColor2}`
          : `${mainStyle.backColor3}`
      }`
    );
  };

  return (
    <>
      <Wrap>
        <MenuWrap>
          <Menu
            onClick={onClick}
            style={{
              borderBottom: `${
                view === `${mainStyle.backColor3}` ? "1px" : "0px"
              } solid ${mainStyle.blackColor}`,
            }}
          >
            Site Renewal
          </Menu>
          <Menu
            onClick={onClick}
            style={{
              borderBottom: `${
                view === `${mainStyle.backColor2}` ? "1px" : "0px"
              } solid ${mainStyle.blackColor}`,
            }}
          >
            Toy Project
          </Menu>
        </MenuWrap>

        <ConWrap
          className="site"
          view={view}
          style={{
            display: `${view === `${mainStyle.backColor3}` ? "flex" : "none"}`,
          }}
        >
          <Title className="site">
            웹리뉴얼
            <span>WebSite Renewal</span>
          </Title>
          <ImgWrap>
            <Img></Img>
            <Desc className="site">
              <h3>다이슨</h3>
              <p>설명</p>
            </Desc>
          </ImgWrap>
        </ConWrap>

        <ConWrap
          className="toy"
          view={view}
          style={{
            display: `${view === `${mainStyle.backColor3}` ? "none" : "flex"}`,
          }}
        >
          <Title className="toy">
            토이프로젝트<span>Toy Project</span>
          </Title>
          <ImgWrap>
            <Img></Img>
            <Desc className="toy">
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

  position: fixed;
  top: 0;

  li:nth-child(2) {
    margin-right: 0;
  }
`;

const Menu = styled.li`
  font-size: 18px;
  font-weight: 900;
  margin-right: 80px;
  color: ${mainStyle.blackColor};
  padding: 5px 0;
  &:hover {
    color: ${mainStyle.pointColor};
    border-bottom: 2px solid ${mainStyle.pointColor2};
  }
`;

const ConWrap = styled.div`
  /* padding: 0 200px; */
  width: 100%;
  /* height: 50vh; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${mainStyle.padding};
  padding-top: 120px;
  &.site {
    background-color: ${(props) => props.view};
    height: 100vh;
  }
  &.toy {
    background-color: ${(props) => props.view};
    height: 100vh;
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
  &.site {
    color: ${mainStyle.pointColor3};
  }
  &.toy {
    color: ${mainStyle.pointColor2};
  }
`;

const ImgWrap = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

const Img = styled.div`
  width: 500px;
  height: 500px;
  background-color: gray;
  margin: 80px 40px 0 0;
`;

const Desc = styled.div`
  h3 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 150px;
  }
  p {
    font-size: 18px;
    font-weight: 300;
  }
`;
