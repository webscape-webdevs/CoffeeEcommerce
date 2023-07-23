import React from 'react'
import styled from 'styled-components'
import Deuzacof from '../../../assets/Images/Coffeecup.jpg'
import Cofeeimg from '../../../assets/Images/deuzacupweb.jpg'


const Coffeeinfo = () => {
  return (
    <Cover>
           
            <Firstdiv>
                <div  className='First1'>
                     <h1> Coffee Premium</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='First1-s'>
                        <h2>Discover the house</h2>
                        <div className='Line'></div>
                    </div>
                </div>
                <div className='First2'>
                    <h1>Our specials</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
            </Firstdiv>
            <Seconddiv>
                <img src={Cofeeimg} alt="" />
            </Seconddiv>
           
    </Cover>
  )
}

export default Coffeeinfo

const Cover = styled.div`
width: 100vw;
height: 100vh;
display: flex;
`
const Firstdiv = styled.div`
width: 70%;
height: 100%;
display: flex;
justify-content: center;
align-items:flex-end;
background: url(${Deuzacof});
background-size: cover;
      .First1{
        position: relative;
        z-index: 1;
        color:white;
         display: flex;
        margin-bottom: 2rem;

        flex-direction: column;
        width: 50%;
          height: 50%;
           h1{
            margin-left:3rem;
            font-size: 2.5rem;
            
         }
         p{
            margin-left:3rem;
            margin-top: 1rem;
            width: 80%;
            font-size:1.1rem;
         }
          
         .First1-s{
            margin-left:3rem;

            width: 50%;
            margin-top: 10rem;
            .Line{
                 background-color: #f8f8f8;
                width: 100%;
                margin-top: .5rem;
                height: .2rem;
            }
         }
     }
     .First2{
        color:white;

        display: flex;
        flex-direction: column;
        width: 50%;
         height: 50%;
         margin-bottom: 2rem;

         h1{
            margin-left:1rem;
            font-size: 2.5rem;

         }
         p{
            margin-left:1.1rem;

            margin-top: 1rem;
            width: 80%;
            font-size:1.1rem;
         }
     }
`

const Seconddiv = styled.div`
img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}

`