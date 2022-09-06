import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Home = () => {
  return (
    <Wrap>
      <SvgWrap>
        <SText className="choi">
          CH
          <Site>
            <Box></Box>
            <h1>01</h1>
          </Site>
          OI
          <span>&copy;</span>
        </SText>
        <SText className="hee">
          <Title>
            Click
            <svg
              fill="#ECE5C7"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="550px"
              height="8.724px"
              viewBox="0 0 594.564 8.724"
              enable-background="new 0 0 594.564 8.724"
            >
              <polygon points="585.782,3.604 577,1.897 577,5 0,5 0,6 577,6 577,8.724 585.782,7.018 594.564,5.311 " />
            </svg>
          </Title>
          <MenuWrap className="site">
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
          HEE
        </SText>
        <SText className="jeong">
          JEONG
          <Site>
            <h1>02</h1>
            <Box></Box>
          </Site>
          <MenuWrap className="profile">
            {/* <Title>바로가기</Title> */}
            <Menu>
              <Link to="#">Dyson</Link>
            </Menu>
            <Menu>
              <Link to="#">Seoul Botenical House</Link>
            </Menu>
          </MenuWrap>
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
  /* font-family: "Nanum Myeongjo", serif; */
  /* font-family: "Open Sans", sans-serif; */
  /* font-family: "Lora", serif; */
  font-family: "Cormorant Garamond", serif;
  font-weight: 100;
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
    margin-left: 50px;
    & span {
      font-family: "Nanum Myeongjo", serif;

      font-size: 100px;
      margin-top: 110px;
      color: ${mainStyle.beigeSub};
    }
  }
  &.hee {
    justify-content: end;
  }
  &.jeong {
    justify-content: center;
    margin-left: 200px;
  }
`;

const MenuWrap = styled.ul`
  font-family: "Nanum Myeongjo", serif;
  margin-right: 100px;
  text-align: right;
  &.profile {
    text-align: left;
    margin-left: 50px;
  }
`;

const Menu = styled.li`
  font-size: 18px;
  margin: 15px 0;
  a:hover {
    border-bottom: 1px solid ${mainStyle.blackColor};
    padding-bottom: 5px;
  }
`;

const Title = styled.div`
  color: ${mainStyle.beige};
  font-size: 22px;
  font-weight: 900;
  padding-bottom: 10px;
  margin-bottom: 100px;
  svg {
    margin-left: 10px;
  }
  /* border-bottom: 1px solid ${mainStyle.blackColor}; */
`;

const Site = styled.div`
  h1 {
    font-size: 18px;
    font-family: "Nanum Myeongjo", serif;
    margin-top: 10px;
  }
`;

const Box = styled.div`
  width: 300px;
  height: 200px;
  background-color: gray;
  margin: 10px 0;
`;
