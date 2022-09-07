import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  blackColor: "#1d1d1d",
  // backColor: "#C2DED1",
  // backColor: "#1C3879",

  // Navy: "#354259",
  // beigeSub: "#CDC2AE",
  // beige: "#ECE5C7",
  // padding: "0 120px",

  // blue
  backColor: "#1C3879",
  mainColor: "#F9F5EB",
  subColor: "#EAE3D2",
  pointColor: "#607EAA",

  // orange name
  // backColor: "#42032C",
  // mainColor: "#D36B00",
  // subColor: "#E6D2AA",
  // pointColor: "#F1EFDC",

  // white name
  // backColor: "#42032C",
  // mainColor: "#F1EFDC",
  // subColor: "#D36B00",
  // pointColor: "#E6D2AA",

  // beige name
  // backColor: "#42032C",
  // mainColor: "#E6D2AA",
  // subColor: "#F1EFDC",
  // pointColor: "#D36B00",

  padding: "0 120px",
};

export const GlobalStyle = createGlobalStyle`
${reset}
body{
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
}
a{
    text-decoration: none;
    color: ${mainStyle.blackColor};
}
`;
