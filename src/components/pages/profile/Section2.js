import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyle";

export const Section2 = () => {
  return (
    <>
      <TextWrap>
        <Text>
          처음부터 천천히, 끈기있게 배우고자 하는 신입 개발자
          <span>"최희정"</span>입니다.
          <br />
          저는 <span>Frontend</span>를 깊이 있게 배우고자 하는 주니어
          개발자입니다. 나아가서 다른 여러가지 기술에 대한 관심을 가지는 등,
          분야를 가리지 않고 적극적으로 개발에 대한 관심을 넓히고 싶습니다.
          <br />
          <br />
          여러 협업과 팀 활동에 대한 경험을 쌓았으며, 매번 새로운 활동은 저의
          성취감에 큰 자극을 주었고 스스로가 발전해 나갈 기회를
          만들어주었습니다. 이러한 경험을 바탕으로 팀원들과의 소통을 중요하게
          생각하며 서로에게 도움이 되는 동료가 되고 싶습니다. 그런 동료가 될 수
          있도록 노력하며 행동하겠습니다.
        </Text>
      </TextWrap>
    </>
  );
};

const TextWrap = styled.div`
  width: 100%;
  height: 50vh;
  padding: 0 400px;
`;

const Text = styled.div`
  font-family: "IBM Plex Sans KR", sans-serif;
  color: ${mainStyle.blackColor};
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;
  span {
    font-size: 30px;
    color: ${mainStyle.backColor};
  }
`;
