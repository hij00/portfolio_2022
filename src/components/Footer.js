import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "./styles/GlobalStyle";

export const Footer = () => {
  const location = useLocation();
  const [show, setShow] = useState("flex");

  useEffect(() => {
    const handleClick = () => {
      if (location.pathname === "/project") {
        setShow("none");
      } else {
        setShow("flex");
      }
    };
    handleClick();
  }, [location]);

  return (
    <Wrap show={show}>
      <Text>&copy;Choi Heejeong</Text>
    </Wrap>
  );
};

const Wrap = styled.div`
  border-top: 1px solid ${mainStyle.blackColor};
  padding: 50px 0;
  display: ${(props) => props.show};
  justify-content: center;
  align-items: center;
`;

const Text = styled.div``;
