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
        <Title className={isEven ? "blue_title" : "green_title"}>
          {a.title}
        </Title>
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
    background-color: ${mainStyle.mainColor};
    margin-bottom: 100px;
    padding: 30px 30px;
    position: relative;
    margin-right: 30rem;
    &::before {
    }
  }
  .green {
    border: 2px solid ${mainStyle.pointColor2};
    border-radius: 50px;
    background-color: ${mainStyle.mainColor};
    margin-bottom: 100px;
    padding: 30px 30px;
    position: relative;
    margin-left: 30rem;
  }
`;

const Title = styled.div`
  &.blue_title {
    left: -20px;
    transform: rotate(-10deg);
    background-color: ${mainStyle.pointColor3};
    top: -35px;
    width: 200px;
    height: 40px;
    position: absolute;

    font-size: 30px;
    font-weight: 900;
    text-align: center;
    line-height: 40px;
  }
  &.green_title {
    right: -20px;
    transform: rotate(10deg);
    background-color: ${mainStyle.pointColor2};
    top: -35px;
    width: 200px;
    height: 40px;
    position: absolute;

    font-size: 30px;
    font-weight: 900;
    text-align: center;
    line-height: 40px;
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
