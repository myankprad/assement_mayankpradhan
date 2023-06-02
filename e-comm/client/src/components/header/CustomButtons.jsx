import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Wrapper = styled(Box)`
display: flex;
margin: 0 3% 0 auto;
aling-item: center;
 & > button, & > p, & > div {
    margin-right: 40px;
    font-size: 12px;
    aling-item: center;
}
`

const Container = styled(Box)`
display: flex;
`

const Login = styled(Button)`
color: '#2874f0';
    background: '#FFFFFF';
    textTransform: 'none';
    fontWeight: 600;
    borderRadius: 2;
    padding: '5px 40px';
    height: 10;
    boxShadow: 'none';

`

const CustomButtons = () => {
  return (
    <Wrapper>
        <Login style={{marginLeft: "10px"}} variant='contained'>Login</Login>
        <Typography style={{marginTop: 7, width: 100}}>Become a seller</Typography>
        <Typography style={{marginTop: 7}}>More</Typography>
        <Container>
        <ShoppingCartTwoToneIcon />
            <Typography>Cart</Typography>
        </Container>

    </Wrapper>
  )
}

export default CustomButtons