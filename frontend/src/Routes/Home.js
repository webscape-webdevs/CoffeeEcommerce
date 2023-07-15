import React from 'react'
import styled from 'styled-components'
import Homea from '../pages/Home/Home'
import Slider from '../pages/Slider/Slider'
 
const Home = () => {
  return (
    <Cover>
    <Homea/>
    <Slider/>

    </Cover>
  )
}

export default Home

const Cover = styled.div`
    background-color:#d1cbb8;

    `