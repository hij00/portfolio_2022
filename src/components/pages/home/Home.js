import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyle";
import { useState } from "react";
import { Section1 } from "./section1/Section1";
import { Section3 } from "./section3/Section3";
import { Section2 } from "./section2/Section2";

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
    <>
      <Wrap change={change} />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
    // </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.change};
  transition: 0.7s;
  position: fixed;
  top: 0;
  z-index: -1;
`;
