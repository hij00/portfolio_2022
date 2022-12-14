import {
  Title,
  ImgWrap,
  Img,
  Desc,
  IconWrap,
  Icon,
  Git,
} from "../../styles/ProjectStyle";
import { textToy } from "../../Text";
import { mainStyle } from "../../styles/GlobalStyle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const ToyProject = (view) => {
  return (
    <>
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

                <div>{text.desc}</div>
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
    </>
  );
};
