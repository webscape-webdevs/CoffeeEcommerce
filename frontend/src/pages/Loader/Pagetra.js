import React,{useRef,useEffect,useState} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'


const Pagetra = () => {
    const Containera = useRef()

    useEffect(() => {
        let ctx = gsap.context(() => {
             const t1 = gsap.timeline({
            })
            t1.to(Containera.current,{
                // clipPath:"polygon(43% 84%, 61% 85%, 74% 89%, 88% 94%, 100% 100%, 0% 100%, 0% 98%, 11% 93%, 24% 88%)"
                borderRadius: "50% 50% 0% 0%",
                duration:1,
                ease: "Expo".Out,

            })
            t1.to(Containera.current,{
                // clipPath:"polygon(43% 84%, 61% 85%, 74% 89%, 88% 94%, 100% 100%, 0% 100%, 0% 98%, 11% 93%, 24% 88%)"
                borderRadius: "0% 0% 0% 0%",
                duration:2,
                ease: "Expo".Out,

            },'-=.4')
            t1.to(Containera.current,{
                yPercent: -85.5,
                duration: 1,
                ease: "Expo".Out,
            },'-=1.5')
            
        },Containera.current)
        return () => ctx.revert();
    }, [])

  return (
    <Cover>
        <Container ref={Containera}>

        </Container>
    </Cover>
  )
}

export default Pagetra

const Cover = styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;
`
const Container = styled.div`
width: 100vw;
height: 100vh;
  background-color: brown;
  border-radius: 100% 100% 0 0;
  transform: translateY(50rem);
 /* clip-path: polygon(100% 100%, 0 100%, 10% 93%, 21% 87%, 32% 83%, 48% 81%, 61% 82%, 75% 86%, 88% 92%); */
 /* clip-path: polygon(43% 100%, 65% 100%, 79% 100%, 89% 100%, 100% 100%, 0 100%, 0 100%, 12% 100%, 24% 100%); */
  
 `
