import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Project = ({ a, idx }) => {
  const isEven = (idx + 1) % 2 === 0;
  // console.log(isEven);

  return (
    <Con data-aos={isEven ? "flip-right" : "flip-left"}>
      <TextWrap className={isEven ? "blue" : "green"}>
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
  );
};

const Con = styled.div`
  .blue {
    border: 2px solid ${mainStyle.pointColor3};
    border-radius: 50px;
    width: 60%;
    background-color: ${mainStyle.mainColor};
    margin-bottom: 100px;
    padding: 30px 30px;
    position: relative;

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
  .green {
    border: 2px solid ${mainStyle.pointColor2};
    border-radius: 50px;
    width: 60%;
    background-color: ${mainStyle.mainColor};
    margin-bottom: 100px;
    padding: 30px 30px;
    position: relative;

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
