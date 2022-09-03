import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Home = () => {
  return (
    <Wrap>
      <SvgWrap>
        <SText>
          <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="560.077px"
            height="226.615px"
            viewBox="0 0 560.077 226.615"
            enable-background="new 0 0 560.077 226.615"
          >
            <text
              transform="matrix(1 0 0 1 0 199.6914)"
              fill="#354259"
              font-family="Nanum Myeongjo, serif"
              font-size="250"
            >
              Choi
            </text>
          </svg>
        </SText>
        <SText>
          <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="560.077px"
            height="226.615px"
            viewBox="0 0 560.077 226.615"
            enable-background="new 0 0 560.077 226.615"
          >
            <text
              transform="matrix(1 0 0 1 0 199.6914)"
              fill="#354259"
              font-family="Nanum Myeongjo, serif"
              font-size="250"
            >
              Hee
            </text>
          </svg>
        </SText>
        <SText>
          <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="746.23px"
            height="280.462px"
            viewBox="0 0 746.23 280.462"
            enable-background="new 0 0 746.23 280.462"
          >
            <text
              transform="matrix(1 0 0 1 15.4619 206.1543)"
              fill="#354259"
              font-family="Nanum Myeongjo, serif"
              font-size="250"
            >
              Jeong
            </text>
          </svg>
        </SText>
      </SvgWrap>
    </Wrap>
  );
};

const Wrap = styled.section`
  height: 100vh;
  background-color: ${mainStyle.backColor};
  padding: ${mainStyle.padding};
`;

const SvgWrap = styled.div`
  height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
`;

const SText = styled.div`
  height: 30%;
`;
