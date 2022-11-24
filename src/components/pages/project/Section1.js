import { useState } from "react";
import styled from "styled-components";
import { textSite, textToy } from "../../Text";
import { mainStyle } from "../../styles/GlobalStyle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
        <ConWrap
          className="site"
          view={view}
          style={{
            display: `${view === `${mainStyle.backColor3}` ? "block" : "none"}`,
          }}
        >
          <Title className="site" data-aos="zoom-in">
            웹리뉴얼
            <span>WebSite Renewal</span>
          </Title>

          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            observer={true}
            observeParents={true}
            navigation
          >
            {textSite.map((text) => (
              <SwiperSlide key={text.id}>
                <ImgWrap>
                  <Img src={text.textImg}></Img>
                  <Desc className="site">
                    <h3>{text.title}</h3>

                    <h6>{text.date}</h6>
                    <h6>{text.toolImg}</h6>

                    <p>{text.desc}</p>
                    <p>{text.end}</p>

                    <IconWrap>
                      <Icon>
                        <a
                          href={text.siteUrl}
                          className="page"
                          style={{
                            backgroundColor: `${
                              view === `${mainStyle.backColor2}`
                                ? `${mainStyle.pointColor2}`
                                : `${mainStyle.pointColor3}`
                            }`,
                          }}
                        >
                          <FontAwesomeIcon icon={faLink} />
                        </a>
                        <a
                          href={text.gitUrl}
                          className="git"
                          style={{
                            backgroundColor: `${
                              view === `${mainStyle.backColor2}`
                                ? `${mainStyle.pointColor2}`
                                : `${mainStyle.pointColor3}`
                            }`,
                          }}
                        >
                          <Git>Git Hub</Git>
                        </a>
                      </Icon>
                    </IconWrap>
                  </Desc>
                </ImgWrap>
              </SwiperSlide>
            ))}
          </Swiper>
        </ConWrap>

        {/* ===================toy */}
        <ConWrap
          className="toy"
          view={view}
          style={{
            display: `${view === `${mainStyle.backColor3}` ? "none" : "block"}`,
          }}
        >
          <Title className="toy" data-aos="zoom-in">
            토이프로젝트<span>Toy Project</span>
          </Title>

          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            observer={true}
            observeParents={true}
            navigation
          >
            {textToy.map((text) => (
              <SwiperSlide key={text.id}>
                <ImgWrap>
                  <Img src={text.textImg}></Img>
                  <Desc className="site">
                    <h3>{text.title}</h3>

                    <h6>{text.date}</h6>
                    {text.toolImg}

                    <p>{text.desc}</p>
                    <p>{text.end}</p>

                    <IconWrap>
                      <Icon>
                        <a
                          href={text.siteUrl}
                          className="page"
                          style={{
                            backgroundColor: `${
                              view === `${mainStyle.backColor3}`
                                ? `${mainStyle.pointColor3}`
                                : `${mainStyle.pointColor2}`
                            }`,
                          }}
                        >
                          <FontAwesomeIcon icon={faLink} />
                        </a>
                        <a
                          href={text.gitUrl}
                          className="git"
                          style={{
                            backgroundColor: `${
                              view === `${mainStyle.backColor3}`
                                ? `${mainStyle.pointColor3}`
                                : `${mainStyle.pointColor2}`
                            }`,
                          }}
                        >
                          <Git>Git Hub</Git>
                        </a>
                      </Icon>
                    </IconWrap>
                  </Desc>
                </ImgWrap>
              </SwiperSlide>
            ))}
          </Swiper>
        </ConWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
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
  }
  &.toy:hover {
    color: ${mainStyle.pointColor2};
  }
  border-bottom: 2px solid ${mainStyle.pointColor2};
`;

const ConWrap = styled.div`
  width: 100%;
  padding: ${mainStyle.padding};
  padding-top: 150px;

  &.site {
    background-color: ${(props) => props.view};
    height: 100vh;
  }
  &.toy {
    background-color: ${(props) => props.view};
    height: 100vh;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  /* margin-bottom: 80px; */
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

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Img = styled.img`
  width: 50%;
`;

const Desc = styled.div`
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
const IconWrap = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Icon = styled.div`
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

const Git = styled.div`
  line-height: 50px;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
`;
