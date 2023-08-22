import { Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CollectionCard = ({pic ,name}) => {
    const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
    {(!isXsScreen?(
    <Box sx={{display:'flex',flexDirection:'column',gap:'1px',justifyContent:'start',alignItems:'center'}}>
    <Box sx={{position:'relative',px:4.5}}>
    <img src={pic} alt="myPic" width="150px" height="150px" style={{paddingTop:'10%'}}/>
    </Box>
    <Typography>{name}</Typography>
    </Box>
    ):
    <Box sx={{display:'flex',flexDirection:'column',gap:'1px',justifyContent:'start',alignItems:'center'}}>
    <Box sx={{position:'relative',px:1}}>
    <img src={pic} alt="myPic" width="68px" height="72px" style={{paddingTop:'10%'}}/>
    </Box>
    <Typography>{name}</Typography>
    </Box>
     )}
    </>
  )
}

export default CollectionCard