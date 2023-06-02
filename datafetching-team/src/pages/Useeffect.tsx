// import React from "react";
import styled from "styled-components";

const Useeffect = () => {
  return (
    <div>
      <div>UseEffct</div>
      <Container>
        <Card>
          <Image />
        </Card>
      </Container>
    </div>
  );
};

export default Useeffect;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Card = styled.div`
  border-radius: 5px;
  width: 150px;
  height: 180px;
  margin: 5px;
  border: 1px solid silver;
  overflow: hidden;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
