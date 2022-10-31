import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Container } from "../../../Container";
import { textSite } from "../../../Text";
import { mainStyle } from "../../style/GlobalStyle";

export const Section3 = () => {
  return (
    <Wrap>
      <Container>
        {textSite.map((a) => (
          <ConWrap>
            <Desc className="site">
              <h3>{a.title}</h3>

              <h6>{a.date}</h6>
              <h6>{a.toolImg}</h6>

              <p>{a.desc}</p>
              <p>{a.end}</p>

              <IconWrap>
                <Icon>
                  <a
                    href={a.siteUrl}
                    className="page"
                    // style={{
                    //   backgroundColor: `${
                    //     view === `${mainStyle.backColor2}`
                    //       ? `${mainStyle.pointColor2}`
                    //       : `${mainStyle.pointColor3}`
                    //   }`,
                    // }}
                  >
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                  <a
                    href={a.gitUrl}
                    className="git"
                    // style={{
                    //   backgroundColor: `${
                    //     view === `${mainStyle.backColor2}`
                    //       ? `${mainStyle.pointColor2}`
                    //       : `${mainStyle.pointColor3}`
                    //   }`,
                    // }}
                  >
                    <Git>Git Hub</Git>
                  </a>
                </Icon>
              </IconWrap>
            </Desc>
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
  /* background-color: white; */
  border: 1px solid ${mainStyle.mainColor};
  border-radius: 50px;
  margin-bottom: 50px;
  padding: 30px 30px;
  position: relative;
  &::before {
    content: "title";
    width: 200px;
    height: 40px;
    background-color: ${mainStyle.mainColor};
    position: absolute;
    top: -15px;
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

const Desc = styled.div``;

const IconWrap = styled.div``;

const Icon = styled.div``;

const Git = styled.div``;
