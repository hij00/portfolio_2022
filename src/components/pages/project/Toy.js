import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Toy = () => {
  return (
    <Wrap>
      <ConWrap
        className="toy"
        style={
          {
            //   display: `${view === `${mainStyle.backColor}` ? "none" : "flex"}`,
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
    background-color: ${mainStyle.backColor};
    height: 100vh;
    /* position: absolute;
    top: 0; */
  }
  &.toy {
    background-color: ${mainStyle.backColor2};
    height: 100vh;
    /* position: absolute;
    top: 0; */
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
