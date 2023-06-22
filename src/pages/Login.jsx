
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
    background-size:cover;
`;
const Wrapper = styled.div`
    padding:20px;
    width:25%;
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
        flex-direction:column;
`;
const Input = styled.input`
   flex:1;
   min-width:40%;
   margin: 10px 0px;
   padding:10px 0;
   border:2px solid #132736;
   border-radius:10px;

`;

const Button = styled.button`
   width:40%;
   border:none;
   border-radius:10px;
   padding:15px 20px;
   background-color:#132736;
   color:white;
   margin-right:5px;
   cursor:pointer;
   margin-bottom:10px;

   &:hover{
      background-color:orange;
    
   }
`;
const Link = styled.a`
   margin:5px 0px;
   font-size:12px;
   text-decoration:underline;
   cursor:pointer;
`



const Login = () => {
    return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder=" user "/>
                <Input placeholder=" password "/>
                     <Button>LOGIN</Button>
                     <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                     <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
