import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";
// import github from "../../../img/github.png";
import github from "../../../img/github.svg";

export const Project = ({ a, idx }) => {
  const isEven = (idx + 1) % 2 === 0;
  // console.log(isEven);

  return (
    <Con data-aos={isEven ? "flip-right" : "flip-left"} data-aos-duration="500">
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

        <Icon>
          <a href={a.siteUrl} className={isEven ? "blue_icon" : "green_icon"}>
            <FontAwesomeIcon icon={faLink} />
          </a>
          <a href={a.gitUrl} className={isEven ? "blue_icon" : "green_icon"}>
            <Git>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </Git>
          </a>
        </Icon>
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
    margin-left: 30rem;
  }
  .green {
    border: 2px solid ${mainStyle.pointColor2};
    border-radius: 50px;
    background-color: ${mainStyle.mainColor};
    margin-bottom: 100px;
    padding: 30px 30px;
    position: relative;
    margin-right: 30rem;
  }
`;

const Title = styled.div`
  &.blue_title {
    /* position: absolute;
    right: -20px; */
    /* transform: rotate(10deg); */
    background-color: ${mainStyle.pointColor3};
    top: -35px;
    width: 200px;
    height: 40px;

    font-size: 30px;
    font-weight: 900;
    text-align: center;
    line-height: 40px;
  }
  &.green_title {
    /* position: absolute;
    left: -20px; */
    /* transform: rotate(-10deg); */
    background-color: ${mainStyle.pointColor2};
    top: -35px;
    width: 200px;
    height: 40px;

    font-size: 30px;
    font-weight: 900;
    text-align: center;
    line-height: 40px;
  }
`;

const TextWrap = styled.div`
  /* margin-right: 50px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  margin-top: 20px;
  a.blue_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: ${mainStyle.pointColor3};
    margin-right: 20px;
    border-radius: 50px;
  }
  a.green_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;

    background-color: ${mainStyle.pointColor2};
    margin-right: 20px;
    border-radius: 50px;
  }
`;

const Git = styled.div`
  width: 25px;
  height: 25px;
  svg {
    fill: ${mainStyle.mainColor};
  }
`;
