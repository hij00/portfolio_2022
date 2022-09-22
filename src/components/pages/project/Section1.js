import { useState } from "react";
import styled from "styled-components";
import { TextSite, TextToy } from "../../../Text";
import { mainStyle } from "../../style/GlobalStyle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const Section1 = () => {
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
        <MenuWrap>
          <Menu
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

        <ConWrap
          className="site"
          view={view}
          style={{
            display: `${view === `${mainStyle.backColor3}` ? "block" : "none"}`,
          }}
        >
          <Title className="site">
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
            {TextSite.map((text) => (
              <SwiperSlide key={text.id}>
                <ImgWrap>
                  <Img

                  // style={{
                  //   background: `url(${text.textImg}) no-repeat center/cover`,
                  // }}
                  ></Img>
                  <Desc className="site">
                    <h3>{text.title}</h3>

                    <h6>기간 : {text.date}</h6>
                    <h6>사용 프로그램 : {text.tool}</h6>

                    <p>{text.desc}</p>
                    <p>{text.end}</p>
                  </Desc>
                </ImgWrap>
              </SwiperSlide>
            ))}
          </Swiper>
        </ConWrap>

        <ConWrap
          className="toy"
          view={view}
          style={{
            display: `${view === `${mainStyle.backColor3}` ? "none" : "block"}`,
          }}
        >
          <Title className="toy">
            토이프로젝트<span>Toy Project</span>
          </Title>

          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            observer={true}
            observeParents={true}
            navigation
          >
            {TextToy.map((text) => (
              <SwiperSlide key={text.id}>
                <ImgWrap>
                  <Img

                  // style={{
                  //   background: `url(${text.textImg}) no-repeat center/cover`,
                  // }}
                  ></Img>
                  <Desc className="site">
                    <h3>{text.title}</h3>

                    <h6>{text.date}</h6>
                    <h6>{text.tool}</h6>

                    <p>{text.desc}</p>
                    <p>{text.end}</p>
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
  &:hover {
    color: ${mainStyle.pointColor};
    border-bottom: 2px solid ${mainStyle.pointColor2};
  }
`;

const ConWrap = styled.div`
  width: 100%;
  padding: 0 400px;
  padding-top: 180px;

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
  margin-bottom: 80px;
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

const Img = styled.div`
  width: 60%;
  height: 500px;
  background-color: gray;
  margin: 0 50px 0 50px;
`;

const Desc = styled.div`
  width: 50%;
  margin-right: 50px;
  h3 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 100px;
  }
  h6 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  p {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 300;
  }
`;
