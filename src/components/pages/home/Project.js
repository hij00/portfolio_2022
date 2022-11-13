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
    <Con
      className={isEven ? "blue" : "green"}
      data-aos={isEven ? "flip-right" : "flip-left"}
      data-aos-duration="500"
    >
      <Text>
        <h1 className={isEven ? "blue_text" : "green_text"}>{a.title}</h1>
        <Img>
          <>{a.toolImg}</>
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
        </Img>
        <h6 className={isEven ? "blue_text" : "green_text"}>{a.date}</h6>
        <Desc>
          <h3 className={isEven ? "blue_text" : "green_text"}>{a.keyword}</h3>
          <p className={isEven ? "blue_text" : "green_text"}>{a.desc}</p>
          <p className={isEven ? "blue_text" : "green_text"}>{a.end}</p>
        </Desc>
      </Text>
    </Con>
  );
};

const Con = styled.div`
  &.blue {
    border: 2px solid ${mainStyle.pointColor3};
    border-radius: 50px;
    background-color: ${mainStyle.mainColor};
    margin-bottom: 100px;
    padding: 30px 50px;
    position: relative;
    margin-left: 30rem;
  }
  &.green {
    border: 2px solid ${mainStyle.pointColor2};
    border-radius: 50px;
    background-color: ${mainStyle.mainColor};
    margin-bottom: 100px;
    padding: 30px 50px;
    position: relative;
    margin-right: 30rem;
  }
`;

const Text = styled.div`
  line-height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1.green_text {
    position: absolute;
    left: -20px;
    top: -35px;
    transform: rotate(-10deg);
    background-color: ${mainStyle.pointColor2};
    padding: 15px 30px;
    font-size: 30px;
    font-weight: 900;
    color: ${mainStyle.mainColor};
  }
  h1.blue_text {
    position: absolute;
    right: -20px;
    top: -35px;
    transform: rotate(10deg);
    background-color: ${mainStyle.pointColor3};
    padding: 15px 30px;
    font-size: 30px;
    font-weight: 900;
    color: ${mainStyle.mainColor};
  }
  h3 {
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 25px;
    &.green_text {
      color: ${mainStyle.pointColor2};
    }
    &.blue_text {
      color: ${mainStyle.pointColor3};
    }
  }
  h6 {
    font-size: 18px;
    margin-bottom: 10px;
    color: gray;
    position: absolute;
    top: -15px;

    padding: 5px;
    background-color: ${mainStyle.mainColor};
    &.green_text {
      right: 50px;
    }
    &.blue_text {
      left: 50px;
    }
  }
  p {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 300;
  }
`;

const Img = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Desc = styled.div``;

const Icon = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: end;
  a.blue_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: ${mainStyle.pointColor3};
    margin-right: 20px;
    border-radius: 50px;
    transition: 0.5s;
  }
  a.green_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;

    background-color: ${mainStyle.pointColor2};
    margin-right: 20px;
    border-radius: 50px;
    transition: 0.5s;
  }
  a:last-child {
    margin-right: 0;
  }
  a:hover {
    background-color: black;
  }
`;

const Git = styled.div`
  width: 25px;
  height: 25px;
  svg {
    fill: ${mainStyle.mainColor};
  }
`;
