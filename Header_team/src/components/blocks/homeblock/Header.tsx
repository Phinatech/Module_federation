import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const togglemenu = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="bg-red-500  flex justify-center h-20">
        <div className="w-[90%]  flex justify-between items-center h-[100%]">
          <Logo>Module Federation</Logo>

          <div className=" text-white hidden md:flex ">
            <Nav to="/">Data fetching</Nav>
            <Nav to="/state-mangement">Todo</Nav>
            <Nav to="/todo">State Mangement</Nav>
          </div>

          <div className="text-white text-[30px]  hidden md:flex">
            <AiOutlineMenuUnfold />
          </div>
        </div>
      </div>

      <div className="w-[90%]">
        <div>Data Fetching</div>
        <div>State mangement</div>
        <div>Todo</div>
      </div>
    </div>
  );
};

export default Header;

const Nav = styled(Link)`
  margin: 0 5px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: translate(0px, 5px);
  }
`;
const NavHolder = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const Main = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid silver;
  background-color: lightblue;
`;
