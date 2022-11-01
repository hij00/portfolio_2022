import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../../Container";
import { textSite, textToy } from "../../../Text";
import { mainStyle } from "../../style/GlobalStyle";

// const arr = { textSite };
export const Section3 = () => {
  // console.log(arr);
  // const [title, setTitle] = useState();

  // useEffect(() => {
  //   setTitle(arr);
  // }, [arr]);
  return (
    <Wrap>
      <Container>
        {textSite.map((a) => (
          <ConWrap key={a.id}>
            {console.log(typeof a)}
            <DescWrap className="site">
              <Desc>
                <h6>{a.toolImg}</h6>
                <h6>{a.date}</h6>
              </Desc>

              <p>{a.desc}</p>
              <p>{a.end}</p>

              <IconWrap>
                <Icon>
                  <a href={a.siteUrl} className="page">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                  <a href={a.gitUrl} className="git">
                    <Git>Git Hub</Git>
                  </a>
                </Icon>
              </IconWrap>
            </DescWrap>
          </ConWrap>
        ))}
        {textToy.map((a) => (
          <ConWrap key={a.id}>
            {console.log(typeof a)}
            <DescWrap className="site">
              <Desc>
                <h6>{a.toolImg}</h6>
                <h6>{a.date}</h6>
              </Desc>

              <p>{a.desc}</p>
              <p>{a.end}</p>

              <IconWrap>
                <Icon>
                  <a href={a.siteUrl} className="page">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                  <a href={a.gitUrl} className="git">
                    <Git>Git Hub</Git>
                  </a>
                </Icon>
              </IconWrap>
            </DescWrap>
          </ConWrap>
        ))}
      </Container>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  background-color: ${mainStyle.backColor};
  border-top: 1px solid white;
  padding: 100px 0;
`;

const ConWrap = styled.div`
  width: 60%;
  background-color: ${mainStyle.mainColor};
  /* border: 1px solid ${mainStyle.mainColor}; */
  border-radius: 50px;
  margin-bottom: 100px;
  padding: 30px 30px;
  position: relative;
  &::before {
    content: ${(props) => props.title};
    width: 200px;
    height: 40px;
    background-color: ${mainStyle.pointColor3};
    position: absolute;
    top: -35px;
    left: -10px;
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    line-height: 40px;
    transform: rotate(-10deg);
  }
`;

const Con = styled.div``;

const TextWrap = styled.div``;

const DescWrap = styled.div`
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

const Desc = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconWrap = styled.div``;

const Icon = styled.div``;

const Git = styled.div``;
