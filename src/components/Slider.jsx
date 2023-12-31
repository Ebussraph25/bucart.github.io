import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components"
import {useNavigate} from 'react-router-dom'
import {sliderItems} from "../data"
import { mobile } from "../responsive"


const Container = styled.div`
width:100%;
height:100vh;
display:flex;
background-image:linear-gradient( #30e9ff,  #0d0551);
position:relative;
overflow:hidden;
${mobile({ display: "none" })}

`
const  Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:${props=> props.direction ==="left" && "10px"};
    right:${props=> props.direction ==="right" && "10px"};
    opacity:0.5;
    z-index:2;

`
const Wrapper = styled.div`  
   height:100%;
   display:flex;
   transform:translateX(${props=>props.slideIndex * -100}vw);
   transition:all 1.5s ease;

    
`;
const Slide = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color:${props => props.bg};
`;
const ImgContainer = styled.div`
height:100%;
flex:1;

`;
const InfoContainer = styled.div`
flex:1;
padding:50px;
`
const Image = styled.img`
height:80%;

`
const Title = styled.h1`
font-size:70px;

`
const Desc= styled.p`
 margin:50px 0px; 
 font-size:20px;
 font-weight:500;
 letter-spacing:20px;
`
const Button= styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;

`

const Slider = ()=> {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
          if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 );
          } else{
            setSlideIndex(slideIndex < 1 ? slideIndex + 3 : 0 );
          }
    };
    const navigate = useNavigate()
    const HandleNavigate = () => {
        navigate('./product')

    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
             <ImgContainer>
             <Image src={item.img}/>
             
             </ImgContainer>
             <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button onClick={HandleNavigate}>SHOW NOW</Button>
             </InfoContainer>
        </Slide>

            
           
           ))}
            
            </Wrapper>
       
            
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                
            <ArrowRightOutlined/>
            </Arrow>
            
        </Container>
    )
}

export default Slider
