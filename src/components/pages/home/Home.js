import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { useState } from "react";

export const Home = () => {
  const [change, setChange] = useState(`${mainStyle.backColor}`);

  const handleScroll = () => {
    const scr = window.pageYOffset;
    if (scr > 1000) {
      setChange(`${mainStyle.mainColor}`);
    } else {
      setChange(`${mainStyle.backColor}`);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Wrap change={change}>
      <Section1 />
      <Section2 />
      <Section3 />
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: ${(props) => props.change};
  transition: 0.7s;
  position: fixed;
`;
