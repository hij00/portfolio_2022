import styled from "styled-components";
import { Container } from "../../../Container";
import { project } from "../../../Text";
import { Project } from "./Project";

export const Section3 = () => {
  return (
    <Wrap>
      <Container>
        <ConWrap className="toy">
          {project.map((a, idx) => (
            <Con key={a.id} className="toy">
              <Project a={a} idx={idx} />
            </Con>
          ))}
        </ConWrap>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  padding: 200px 0 100px;
`;

const ConWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Con = styled.div`
  width: 100%;
`;
