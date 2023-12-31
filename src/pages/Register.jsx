import  styled from "styled-components"

import {mobile} from "../responsive"

const Container = styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(rgba(34, 28, 28, 0.5),rgba(248, 243, 243, 0.5)),
    url(https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)center;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Wrapper = styled.div`
    padding:20px;
    width:40%;
    background-color:transparent;
    border:2px solid #132736;
    ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
    font-size:24px;
    font-weight:700;
    color:#132736

`;
const Form = styled.form`
        display:flex;
        flex-wrap:wrap;
`;
const Input = styled.input`
   flex:1;
   min-width:40%;
   margin:20px 10px 0px;
   padding:10px;
   border:2px solid #132736;
   border-radius:10px;

`;
const Agreement = styled.span`
   font-size:12px;
   margin:20px;
`;
const Button = styled.button`
   width:40%;
   border:none;
   border-radius:10px;
   padding:15px 20px;
   background-color:#132736;
   color:white;

   &:hover{
      background-color:orange;
    
   }
`;


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement> By creating an account, I consent to the processing of my personal
                         data in accordance with the <b>PRIVACY POLICY</b> </Agreement>
                         <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
