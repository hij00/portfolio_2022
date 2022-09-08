import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Profile = () => {
  return (
    <Wrap>
      <Img></Img>
      <TextWrap>
        <Title>
          개발의 시작부터 끝까지, <br />
          최희정 입니다.
        </Title>
        <Desc>
          <Date>22.04 ~</Date>
          <Text></Text>
        </Desc>
      </TextWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 200px;
  background-color: ${mainStyle.backColor};
`;

const Img = styled.div`
  width: 40%;
  height: 700px;
  background-color: gray;
`;

const TextWrap = styled.div`
  margin-left: 200px;
`;

const Title = styled.div`
  font-size: 50px;
  margin-bottom: 50px;
  line-height: 70px;
`;

const Desc = styled.div`
  font-size: 22px;
`;

const Date = styled.div``;

const Text = styled.div``;
