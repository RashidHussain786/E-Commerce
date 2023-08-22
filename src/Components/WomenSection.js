import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CollectionCard from './CollectionCard'

const WomenSection = () => {
  return (
    <>
    <Box sx={{p:{xs:'0.5rem',md:'1.25rem'},my:'0.75rem'}}>
    <Typography variant='h6'sx={{fontWeight:'bold'}}>Women Athleisure Range</Typography>    
    <Box sx={{display: 'flex',flexWrap: 'wrap',ml:{md:6,xs:0},gap: {xs:0,md:0}}} >
    <CollectionCard pic='./Assets/pic10.avif' name='Tops and Tees'/>
    <CollectionCard pic='./Assets/pic11.avif' name='Leggings'/>
    <CollectionCard pic='./Assets/pic10.avif' name='Tops and Tees'/>
    <CollectionCard pic='./Assets/pic11.avif' name='Leggings'/>
    <CollectionCard pic='./Assets/pic10.avif' name='Tops and Tees'/>
    <CollectionCard pic='./Assets/pic10.avif' name='Tops and Tees'/>
    <CollectionCard pic='./Assets/pic11.avif' name='Leggings'/>
    <CollectionCard pic='./Assets/pic10.avif' name='Tops and Tees'/>
    </Box>
    </Box>
    </>
  )
}

export default WomenSection