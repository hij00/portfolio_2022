import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import { Container } from "../../../Container";
import { textSite, textToy } from "../../../Text";
import { mainStyle } from "../../style/GlobalStyle";
import { Project } from "./Project";

// const arr = { textSite };
export const Section3 = () => {
  return (
    <Wrap>
      <Container>
        <ConWrap className="site">
          {textSite.map((a) => (
            <Con key={a.id} className="site">
              <TextWrap>
                <Text>
                  <h6>{a.toolImg}</h6>
                  <h6>{a.date}</h6>
                </Text>

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
              </TextWrap>
            </Con>
          ))}
        </ConWrap>
        <ConWrap className="toy">
          {textToy.map((a, idx) => (
            <Con key={a.id} className="toy">
              <Project a={a} idx={idx} />
              {/* <TextWrap>
                <Text>
                  <h6>{a.toolImg}</h6>
                  <h6>{a.date}</h6>
                </Text>

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
              </TextWrap> */}
            </Con>
          ))}
        </ConWrap>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;

  border-top: 1px solid white;
  padding: 200px 0;
`;

const ConWrap = styled.div`
  &.site {
    display: flex;
    flex-direction: column;
  }
  &.toy {
    display: flex;
    flex-direction: column;
  }
`;

const Con = styled.div`
  width: 60%;
  background-color: ${mainStyle.mainColor};
  border-radius: 50px;
  margin-bottom: 100px;
  padding: 30px 30px;
  position: relative;
  &.site {
    border: 2px solid ${mainStyle.pointColor3};
    &::before {
      top: -35px;
      left: -20px;
      transform: rotate(-10deg);
      content: "title";
      width: 200px;
      height: 40px;
      background-color: ${mainStyle.pointColor3};
      position: absolute;
      font-size: 30px;
      font-weight: 900;
      text-align: center;
      line-height: 40px;
    }
  }
  &.toy {
    border: 2px solid ${mainStyle.pointColor2};

    &::before {
      top: -35px;
      right: -20px;
      transform: rotate(10deg);
      content: "title";
      width: 200px;
      height: 40px;
      background-color: ${mainStyle.pointColor2};
      position: absolute;
      font-size: 30px;
      font-weight: 900;
      text-align: center;
      line-height: 40px;
    }
  }
`;

const TextWrap = styled.div`
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

const Text = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconWrap = styled.div``;

const Icon = styled.div``;

const Git = styled.div``;
