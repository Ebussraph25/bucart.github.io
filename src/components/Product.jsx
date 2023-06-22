
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
const Info =styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    opacity:0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-item:center;
    justify-content:center;
    transition:all 0.5s ease;

`
const Container = styled.div`
     flex:1;
margin:5px;
height:350px;
min-width:280px;
display:flex;
align-items:center;
justify-content:center;
width:100%;
position:relative;
cursor:pointer;

&:hover ${Info}{
       opacity:1;
       transform:scale(1)

};


`
const Circle =styled.div`
     width:200px;
     height:200px;
     border-radius:50%;
     background-color:white;
     position:absolute;
`;
const Image =styled.img`
       height:100%;
       width:100%;
       z-index:2;

 
       
`;

const Icon =styled.div`
margin-top:150px;
margin-right:15px;
  width:40px;
  height:40px;
  border-radius:50%;
  background-color:white;
  display:flex;
  align-content:center;
  align-items:center;
  justify-content:center;
  transition: all 0.5s ease;
  
  
  &:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
  }
  
  
  `

const Product = ({ item }) => {
    const navigate = useNavigate()
    const HandleNavigate = () => {
          navigate('./sell')
    }
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon role = 'button' onClick={HandleNavigate}>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>

            </Info>
        </Container>
    )
}

export default Product
