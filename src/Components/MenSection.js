import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CollectionCard from './CollectionCard'

const MenSection = () => {
  return (
    <Box sx={{p:{xs:'0.5rem',md:'1.25rem'},my:'0.75rem'}}>
    <Typography variant='h6'sx={{fontWeight:'bold'}}>Top Rated In Mens</Typography>    
    <Box sx={{display: 'flex',flexWrap: 'wrap',ml:{md:6,xs:0},gap: {xs:0,md:0}}} >
    <CollectionCard pic='./Assets/Guy.png' name='Man'/>
    <CollectionCard pic='./Assets/Guy.png' name='Man'/>
    <CollectionCard pic='./Assets/Guy.png' name='Man'/>
    <CollectionCard pic='./Assets/Guy.png' name='Man'/>
    <CollectionCard pic='./Assets/Guy.png' name='Man'/>
    <CollectionCard pic='./Assets/Guy.png' name='Man'/>
    <CollectionCard pic='./Assets/Guy.png' name='Man'/>
    <CollectionCard pic='./Assets/Guy.png' name='Man'/>
    </Box>
    </Box>
  )
}

export default MenSection