import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';

const ImageBox = ({ src, alt }) => (
    <Box sx={{ px: '0.5rem', width: {xs:'45%',md:'23%'}, mb: '0.785rem', backgroundSize: 'cover' }}>
      <img src={src} alt={alt} style={{ maxWidth: '100%',borderRadius:'10px' }} />
    </Box>
  );
const SportCollection = () => {
  return (
    <>
    <Box sx={{ py: '1rem', mb: '2rem' ,bgcolor:'#efe4e4'}}>
      <Container sx={{ px: '1rem', mx: 'auto', maxWidth: { md: 1536 } }}>
        <Typography variant='h6' sx={{ px: '1rem', mb: '1rem', fontWeight: 'bold' }}>
          Explore More In Sports
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <ImageBox src='./Assets/cricket.avif' alt='mypic' />
          <ImageBox src='./Assets/footbal.avif' alt='mypic' />
          <ImageBox src='./Assets/cricket.avif' alt='mypic' />
          <ImageBox src='./Assets/footbal.avif' alt='mypic' />
        </Box>
      </Container>
    </Box>
    </>
  )
}

export default SportCollection