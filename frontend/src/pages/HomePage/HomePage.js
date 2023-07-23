import React from "react";
import styled from "styled-components";
import Home from "../../components/HomeComponents/Home/Home";
import Slider from "../../components/HomeComponents/Slider/Slider";
import Infosection from "../../components/HomeComponents/Infosection/Coffeeinfo";

const HomePage = () => {
  return (
    <Cover className="Homepage">
      <Home />
      <Slider />
      <Infosection/>

     </Cover>
  );
};

export default HomePage;

const Cover = styled.div`
  background-color: #d1cbb8;
  
`;
