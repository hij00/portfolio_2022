import { useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyle";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiteRenewal } from "./SiteRenewal";
import { ToyProject } from "./ToyProject";

export const Section1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  const [view, setView] = useState(`${mainStyle.backColor3}`);

  const onClick = () => {
    setView(
      `${
        view === `${mainStyle.backColor3}`
          ? `${mainStyle.backColor2}`
          : `${mainStyle.backColor3}`
      }`
    );
  };

  return (
    <>
      <Wrap>
        {/* =================menu */}
        <MenuWrap>
          <Menu
            className="site"
            onClick={onClick}
            style={{
              borderBottom: `${
                view === `${mainStyle.backColor3}` ? "1px" : "0px"
              } solid ${mainStyle.blackColor}`,
            }}
          >
            Site Renewal
          </Menu>
          <Menu
            className="toy"
            onClick={onClick}
            style={{
              borderBottom: `${
                view === `${mainStyle.backColor2}` ? "1px" : "0px"
              } solid ${mainStyle.blackColor}`,
            }}
          >
            Toy Project
          </Menu>
        </MenuWrap>

        {/* ======================site renewal */}

        <ConWrap>
          <SiteRenewal view={view} />
        </ConWrap>

        {/* ===================toy */}
        <ConWrap>
          <ToyProject view={view} />
        </ConWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
`;

const MenuWrap = styled.ul`
  font-family: "Nanum Myeongjo", serif;

  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;

  li:nth-child(2) {
    margin-right: 0;
  }
`;

const Menu = styled.li`
  font-size: 18px;
  font-weight: 900;
  margin-right: 80px;
  color: ${mainStyle.blackColor};
  padding: 5px 0;
  &.site:hover {
    color: ${mainStyle.pointColor3};
    cursor: pointer;
  }
  &.toy:hover {
    color: ${mainStyle.pointColor2};
    cursor: pointer;
  }
  /* border-bottom: 2px solid ${mainStyle.pointColor2}; */
`;

export const ConWrap = styled.div`
  width: 100%;
  padding: ${mainStyle.padding};
  padding-top: 150px;

  &.site {
    background-color: ${(props) => props.view};
    /* background-color: ${mainStyle.backColor3}; */
    height: 100vh;
  }
  &.toy {
    background-color: ${(props) => props.view};
    /* background-color: ${mainStyle.backColor2}; */

    height: 100vh;
  }
`;
