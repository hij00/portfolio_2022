import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  blackColor: "#1d1d1d",
  backColor: "#C2DED1",
  Navy: "#354259",
  beigeSub: "#CDC2AE",
  beige: "#ECE5C7",
  padding: "0 120px",
};

export const GlobalStyle = createGlobalStyle`
${reset}
body{
    box-sizing: border-box;
}
a{
    text-decoration: none;
    color: ${mainStyle.blackColor};
}
`;
