import {
  Title,
  ImgWrap,
  Img,
  Desc,
  IconWrap,
  Icon,
  Git,
} from "../../styles/ProjectStyle";
import { textSite } from "../../Text";
import { mainStyle } from "../../styles/GlobalStyle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const SiteRenewal = (view) => {
  return (
    <>
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

                <div>{text.desc}</div>
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
    </>
  );
};
