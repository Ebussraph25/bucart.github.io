import styled from "styled-components"

import Announcement from '../components/Announcement'

import { WhatsApp, Facebook, Instagram} from '@mui/icons-material'
import {mobile} from "../responsive"


const Container = styled.div`

`
const Wrapper = styled.div`
   padding:20px;
   justify-content:center;
   align-items:center;
   ${mobile({ padding: "10px" })}

 
`
const Title = styled.h1`
font-weight:300;
 text-align:center;
 margin-bottom:10px;
 ${mobile({ fontSize: "15px", fontWeight:200, marginBottom:"10px" })}
 `
 const ImgContainer = styled.div`
         flex:1;
         
 
 `

const Image = styled.img`
   width:200px;
   object-fit:cover;
   display:flex;
   justify-content:center;
   margin-left:40%;
   margin-bottom:10px;
   ${mobile({ marginLeft: "5%", marginBottom:"10px" })}
`
const Amount = styled.h2`
  flex:2;
  margin-left:40%;
  margin-top:10px;
  margin-bottom:10px;
  ${mobile({ marginLeft: "5%", marginBottom:"10px" })}

`
const Contact = styled.div` 
   margin-left:40%;
   ${mobile({ marginLeft: "5%" })}
`
const SocialContainer = styled.div`
    display:flex;
    align-items:center;
    margin-right:10px;
    margin-bottom:10px;
    margin-top:10px;

`
const Phone = styled.span`

justify-content:center;


`
const Category = styled.span`
    font-weight:300;
    margin-left:40%;
    margin-bottom:10px;
    ${mobile({ marginLeft: "5%", fontSize:"15px", marginBottom:"10px" })}
`
const Button = styled.button`
 margin-left:40%;
 padding:15px;
 color:white;
 background-color:black;
 cursor:pointer;
 margin-top:10px;
 ${mobile({ marginLeft: "5%", padding:"8px ",cursor:"pointer", marginTop:"10px"})}



&:hover{
 background-color:orange;
 color:white;
}
`

const Sell = () => {
    return (
            <Container>
            
            <Announcement/>
            <Wrapper>
            <Title>ADD MY PRODUCT</Title>
            <ImgContainer>
              <Image src="https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
             </ImgContainer>
              <Amount> PRICE: $15 </Amount>
              <Contact>
                <Phone> PHONE: +2347025351063</Phone>
                <SocialContainer>
                <WhatsApp/>
                <Facebook/>
                <Instagram/>
                </SocialContainer>
              </Contact>
              <Category>CATEGORY: Jacket</Category>
              <Button> ADD PRODUCT</Button>
              </Wrapper>
             
            
            </Container>
        
    )
}

export default Sell
