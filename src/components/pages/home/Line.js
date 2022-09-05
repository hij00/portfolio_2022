import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

export const Line = () => {
  return (
    <Wrap>
      <Text>
        <Link to="#">Seoul Botanical Garden</Link>
      </Text>
      <Text>
        <Link to="#">Dyson</Link>
      </Text>
      <Text>
        <Link to="#">Movie API Site</Link>
      </Text>
      <Text>
        <Link to="#">Toy Project_Cart</Link>
      </Text>
      <Text>
        <Link to="#">Seoul Botanical Garden</Link>
      </Text>
      <Text>
        <Link to="#">Dyson</Link>
      </Text>
      <Text>
        <Link to="#">Movie API Site</Link>
      </Text>
      <Text>
        <Link to="#">Toy Project_Cart</Link>
      </Text>
      <Text>
        <Link to="#">Seoul Botanical Garden</Link>
      </Text>
      <Text>
        <Link to="#">Dyson</Link>
      </Text>
      <Text>
        <Link to="#">Movie API Site</Link>
      </Text>
      <Text>
        <Link to="#">Toy Project_Cart</Link>
      </Text>
    </Wrap>
  );
};

const Wrap = styled.div`
  border-top: 2px solid ${mainStyle.beigeSub};
  border-bottom: 2px solid ${mainStyle.beigeSub};
  display: flex;
  flex: 0 0 auto;
  white-space: nowrap;
  overflow: hidden;
`;

const Text = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 22px;
  font-weight: 300;
  padding: 10px;
  a {
    margin-right: 20px;
    &:hover {
      font-weight: 700;
    }
  }
`;
