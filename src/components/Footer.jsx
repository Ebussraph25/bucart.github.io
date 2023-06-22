import styled from "styled-components"
import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from "@mui/icons-material"
import { mobile } from "../responsive"

const Container = styled.div`
     display:flex;
     ${mobile({ flexDirection: "column" })}

`
const Left = styled.div`
flex:1; 
display:flex;
flex-direction:column;
padding:20px;
`
const Logo = styled.h1``;
const Desc = styled.p`
   margin:20px 0px;
`;
const SocialContainer = styled.div`
   display:flex;

`;
const SocialIcon = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  color:white;
  background-color: ${props=>props.color};
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:20px;
    
    `;
const Center = styled.div`
   flex:1;
   padding:20px;
   ${mobile({ display: "none" })}


`
const Title= styled.h3`
margin-bottom:30px;

   

`
const List = styled.ul`
     margin:0;
     padding:0;
     list-style:none;
     display:flex;
     flex-wrap:wrap;

`

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`

const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({ backgroundColor: "#f7e1e1" })}

`
const ContactItem = styled.div`
  margin-bottom:20px;
  display:flex;
  align-items:center;

`

const Payment = styled.img`
     width:100%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
               <Logo>BUCART.</Logo>
               <Desc>
                Our aim is to facilitate a an enabling ground<br/>
                where you can buy and sell your products 
                at an affordable price.<br/>
                We equally render mobile services in which you can make your order<br/> 
                and it will be delivered at your doorstep.<br/>
                Join the Bucart team and become an agent<br/> with a pay for every transaction made through you.<br/>
                Contact Us through the social media platforms listed out here.           
                 </Desc>
               <SocialContainer>
                <SocialIcon color="#3B5999" >
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="#E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color=" #55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="#aa2737">
                    <Pinterest/>
                </SocialIcon>
               
               
               </SocialContainer>
            </Left>
            <Center>
                  <Title>Useful Links</Title>
                  <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Open Sales</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem> Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    
                  </List>
            </Center>
            <Right>

                <Title>Contact</Title>
                <ContactItem> <Room style={{marginRight:"10px"}}/>No 2 River Lane GRA, Enugu Nigeria </ContactItem>
                <ContactItem><Phone style ={{marginRight:"10px"}}/>+234 7025351063</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/> chukwustanislaus@gmail.com</ContactItem>
               <Payment img src="./pay.png" alt="pay"/>
                

            </Right>
            
        </Container>
    )
}

export default Footer
