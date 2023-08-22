import { Box } from '@mui/system'
import React from 'react'
import CollectionCard from './CollectionCard'

const Collection = () => {
  return (
    <Box sx={{height:'auto',p:{xs:"10px",md:'1.25rem'},my:{xs:'4px',md:'0.75rem'}}}>
    <Box sx={{display:'flex',px:{xs:'4px',md:'1.75rem'},py:'0.75rem',cursor:'pointer'}}>
    <Box sx={{display: 'flex',flexWrap: 'wrap',gap: {xs:0,md:0}}} >
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
    </Box>
  )
}

export default Collection