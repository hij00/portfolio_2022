import styledComponents from "styled-components";

export const Section2 = () => {
  return (
    <Wrap>
      <TextWrap>
        <Title></Title>
        <Desc></Desc>
      </TextWrap>
    </Wrap>
  );
};

const Wrap = styledComponents.div``;
const TextWrap = styledComponents.div``;
const Title = styledComponents.div``;
const Desc = styledComponents.div``;
