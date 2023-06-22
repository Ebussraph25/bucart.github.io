import styled  from "styled-components";
import { mobile } from "../responsive"
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
flex:1;
margin:3;
height:70vh;
position:relative;


`
const Image = styled.img`
 width:100%;
 height:100%;
 object-fit: Cover;
 ${mobile({ height: "30vh" })}
`
const Info = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
const Title = styled.h1`
color:white;
margin-bottom:20px;
`
const Button = styled.button`
    border:1px solid white;
    padding:10px;
    background-color:transparent;
    color:white;
    
    cursor:pointer;
    font-weight:600;
    transition: all 0.5s ease;

    &:hover{
    background-color:orange;
    transform:scale(1.1);
    }
`


const CategoryItem = ({item}) => {
  const navigate = useNavigate()
  const HandleNavigate = () => {
        navigate('./productList')
  }

  
    return (
        <Container>
          <Image src={item.img}/>
          <Info>
            <Title>{item.title}</Title>
            <Button onClick={HandleNavigate}>SHOP NOW</Button>
          </Info>
        </Container>
    )
}



export default CategoryItem;
