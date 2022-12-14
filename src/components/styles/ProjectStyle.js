import styled from "styled-components";
import { mainStyle } from "../styles/GlobalStyle";

export const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
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

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Img = styled.img`
  width: 50%;
`;

export const Desc = styled.div`
  width: 50%;
  margin-right: 50px;
  line-height: 24px;
  h3 {
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 50px;
  }
  h6 {
    font-size: 18px;
    margin-bottom: 10px;
    color: gray;
  }
  p {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 300;
  }
`;
export const IconWrap = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  .page {
    width: 45%;
    height: 50px;
    /* background-color: ${mainStyle.pointColor3}; */
    line-height: 50px;
    text-align: center;
    color: white;
    font-size: 22px;
    font-weight: 500;
    border-radius: 50px;
  }
  .git {
    width: 45%;
    height: 50px;
    color: white;
    /* background-color: ${mainStyle.pointColor3}; */
    line-height: 30px;
    text-align: center;
    border-radius: 50px;
  }
`;

export const Git = styled.div`
  line-height: 50px;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
`;
