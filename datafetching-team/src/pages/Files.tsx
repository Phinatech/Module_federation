// import React from "react";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Files: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Main>
        <Navs>
          <Button bg="yellow" to="/">
            useEffect
          </Button>
          <Button bg="purple" to="tanstack">
            Tanstack
          </Button>
          <Button bg="green" to="usestate">
            SWR
          </Button>
        </Navs>
      </Main>
      <Holder>{children}</Holder>
    </Container>
  );
};

export default Files;

const Holder = styled.div``;

const Navs = styled.div`
  display: flex;
`;
const Button = styled(Link)<{ bg: string }>`
  margin: 0 10px;
  color: white;
  padding: 10px 25px;
  background-color: ${(props) => props.bg};
  font-weight: bold;
  text-transform: uppercase;
  transition: all 350ms;
`;
const Main = styled.div`
  width: 90%;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
