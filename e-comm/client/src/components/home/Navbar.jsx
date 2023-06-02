import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import {navData} from "../../constant/data"

const Component = styled(Box)`
display: flex;
margin: 55px 130px 0 130px;
justify-content: space-between;
`

const Container = styled(Box)`
padding: 12px 8px;
text-aling: center;
`

const Text = styled(Typography)`
font-size: 14px;
font-weight: 600;
`

const Navbar = () => {
  return (
   <Component>
    {
        navData.map(data=> (
            <Container>
                <img src={data.url} alt="" style={{width: 64}} />
                <Text>{data.text}</Text>
            </Container>
        ))
    }
   </Component>
  )
}

export default Navbar