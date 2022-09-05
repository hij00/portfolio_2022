import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";
import { Line } from "./Line";

export const Home = () => {
  return (
    <Wrap>
      <SvgWrap>
        <SText className="choi">
          Ch<Box></Box>oi
        </SText>
        <SText className="hee">
          <MenuWrap>
            {/* <Title>바로가기</Title> */}
            <Menu>
              <Link to="#">Dyson</Link>
            </Menu>
            <Menu>
              <Link to="#">Seoul Botenical House</Link>
            </Menu>
            <Menu>
              <Link to="#">Movie API Site</Link>
            </Menu>
            <Menu>
              <Link to="#">Shopping Cart</Link>
            </Menu>
          </MenuWrap>
          Hee
        </SText>
        <SText className="jeong">
          Jeo<Box></Box>ng
        </SText>
      </SvgWrap>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${mainStyle.backColor};
`;

const SvgWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SText = styled.div`
  font-family: "Nanum Myeongjo", serif;
  box-sizing: border-box;
  height: 33.33333%;
  display: flex;
  align-items: center;
  padding: ${mainStyle.padding};
  font-size: 300px;
  margin-top: -20px;
  margin-bottom: -20px;
  color: ${mainStyle.Navy};
  &.choi {
    margin-top: 0;
    margin-left: 100px;
  }
  &.hee {
    justify-content: end;
  }
  &.jeong {
    justify-content: center;
  }
`;

const MenuWrap = styled.ul`
  margin-right: 100px;
  text-align: right;
`;

const Menu = styled.li`
  font-size: 18px;
  margin: 15px 0;
  a:hover {
    border-bottom: 1px solid ${mainStyle.blackColor};
  }
`;

// const Title = styled.div`
//   font-size: 22px;
//   font-weight: 900;
//   padding-bottom: 10px;
//   border-bottom: 1px solid ${mainStyle.blackColor};
// `;

const Box = styled.div`
  width: 300px;
  height: 200px;
  background-color: gray;
`;
