import React from "react";
import styled from "styled-components";
import Home from "../../components/HomeComponents/Home/Home";
import Slider from "../../components/HomeComponents/Slider/Slider";

const HomePage = () => {
  return (
    <Cover>
      <Home />
      <Slider />
    </Cover>
  );
};

export default HomePage;

const Cover = styled.div`
  background-color: #d1cbb8;
`;
