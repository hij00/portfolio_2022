import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  blackColor: "#1d1d1d",

  // ==========blueBackground
  backColor: "#1C3879",
  mainColor: "#F9F5EB",
  subColor: "#EAE3D2",
  pointColor: "#607EAA",

  // ==========greenFont
  backColor2: "#F0EBE3",
  mainColor2: "#E4DCCF",
  subColor2: "#7D9D9C",
  pointColor2: "#576F72",

  // ============blueFont
  backColor3: "#F5EFE6",
  mainColor3: "#E8DFCA",
  subColor3: "#AEBDCA",
  pointColor3: "#7895B2",

  padding: "0 120px",
};

// font-family: 'Do Hyeon', sans-serif;
// font-family: 'IBM Plex Sans KR', sans-serif;
// font-family: 'Noto Sans KR', sans-serif;
// font-family: 'Sunflower', sans-serif;
// font-family: 'Source Code Pro', monospace;

export const GlobalStyle = createGlobalStyle`
${reset}
*{
  box-sizing: border-box;
}
body{
  box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
}
a{
    text-decoration: none;
    color: ${mainStyle.subColor};
}
`;
