import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const mainStyle = {
  color: "#1d1d1d",
};

export const GlobalStyle = createGlobalStyle`
${reset}
body{
    box-sizing: border-box;
}
a{
    text-decoration: none;
    color: ${mainStyle.color};
}
`;
