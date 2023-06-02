import Header from "../../blocks/homeblock/Header";
import Footer from "../../blocks/homeblock/Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default HomeLayout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;
