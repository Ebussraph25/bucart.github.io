import { Search, ShoppingCartOutlined } from  '@mui/icons-material'
import Badge from '@mui/material/Badge';
import React from 'react'
import styled from 'styled-components'

import {Link, useNavigate} from 'react-router-dom'
import {mobile} from "../responsive"

const Container = styled.div`
    height:60px;
    ${mobile({ height: "50px"})}
    
`;
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({ padding: "10px 0px" })}
`;
const Language = styled.span`
    font-size:14px;
    cursor: pointer;
    ${mobile({ display: "none" })}


`;

const Input = styled.input`
      border: none;
      ${mobile({ width: "50px" })}

    

`;

const SearchContainer = styled.div`
    border:1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`;
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Center= styled.div`

flex:1;`


const Logo =styled.h1`
     font-weight:bold;
     text-align:center;
     
     ${mobile({ fontSize:"24px", marginLeft:"20px" })}
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({ flex:2, justifyContent: "center" })}
`
const MenuItem = styled.div`
      font-size:14px;
      cursor:pointer;
      margin-left: 25px;
      &.Navlink:visited,&.Navlink:link{
        text-decoration:none;
        color:black;
      }
      ${mobile({fontSize: "12px", marginLeft:"10px" })}
`


const Navbar = () => {
    const navigate = useNavigate()
  const HandleNavigate = () => {
        navigate('./cart')
  }
    return (
        <Container>
            <Wrapper>
             <Left>
               <Language>EN</Language>
             <SearchContainer>
                <Input placeholder='Search'/> 
                <Search style={{color:"gray", fontSize:16}}/> 
                </SearchContainer> 
                  
                  
               


             </Left>
             <Center><Link to='../'><Logo>BUCART.</Logo></Link></Center>
             <Right>
                <MenuItem><Link className='Navlink' to='./register'>REGISTER </Link></MenuItem>
                <MenuItem><Link to='./login'>SIGN IN</Link></MenuItem>
                <MenuItem role='button' onClick={HandleNavigate}>
                
                <Badge color="secondary" badgeContent={9}>
        <ShoppingCartOutlined/>
      </Badge>
                </MenuItem>
             </Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar
