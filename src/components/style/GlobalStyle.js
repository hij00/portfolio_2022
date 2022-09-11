import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  blackColor: "#1d1d1d",
  backColor: "#1C3879",
  mainColor: "#F9F5EB",
  subColor: "#EAE3D2",
  pointColor: "#607EAA",

  padding: "0 120px",
};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
  box-sizing: border-box;
}
body{
    
    font-family: 'Noto Sans KR', sans-serif;
}
a{
    text-decoration: none;
    color: ${mainStyle.subColor};
}
`;
