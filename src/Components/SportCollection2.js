import { Typography } from '@mui/material';
import { Box, Container, IconButton } from '@mui/material';
import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SportCollection2 = () => {
    const productContainerRef = useRef(null);

    const scrollLeft = () => {
      if (productContainerRef.current) {
        productContainerRef.current.scrollBy({
          left: -270, // Adjust the scroll amount as needed
          behavior: 'smooth',
        });
      }
    };
  
    const scrollRight = () => {
      if (productContainerRef.current) {
        productContainerRef.current.scrollBy({
          left: 270, // Adjust the scroll amount as needed
          behavior: 'smooth',
        });
      }
    };
  return (
    <>
    <Box sx={{ mb: '2.5rem' }}>
        <Container sx={{ px: '1rem', maxWidth: { md: 1536 } }}>
        {/* <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>High on Demand</Typography> */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '1rem' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            BAGPACKS & bAGS
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={scrollLeft}>
                <KeyboardArrowLeftIcon />
              </IconButton>
              <IconButton onClick={scrollRight}>
                <KeyboardArrowRightIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' ,'&::-webkit-scrollbar': {display: 'none',},}}
            ref={productContainerRef}
          >
          <ProductCard imageSrc="./Assets/bag.avif" brand="QUECHUA" title="Men's Road Cycling Rain Jacket RC100 - Neon Yellow" rating="4.5" price="₹2999" originalPrice="₹1,499" savings="₹500"/>
          <ProductCard imageSrc="./Assets/bag.avif" brand="CAPERLAN" title="Men's Road Cycling Rain Jacket RC100 - Neon Yellow" rating="4.0" price="₹999" originalPrice="₹1,499" savings="₹500"/>
          <ProductCard imageSrc="./Assets/bag.avif" brand="QUECHUA" title="Men's Road Cycling Rain Jacket RC100 - Neon Yellow" rating="4.0" price="₹999" originalPrice="₹1,499" savings="₹500"/>
          <ProductCard imageSrc="./Assets/bag.avif" brand="CAPERLAN" title="Men's Road Cycling Rain Jacket RC100 - Neon Yellow" rating="4.0" price="₹999" originalPrice="₹1,499" savings="₹500"/>
          <ProductCard imageSrc="./Assets/bag.avif" brand="QUECHUA" title="Men's Road Cycling Rain Jacket RC100 - Neon Yellow" rating="4.0" price="₹999" originalPrice="₹1,499" savings="₹500"/>
          <ProductCard imageSrc="./Assets/bag.avif" brand="CAPERLAN" title="Men's Road Cycling Rain Jacket RC100 - Neon Yellow" rating="4.0" price="₹999" originalPrice="₹1,499" savings="₹500"/>
          <ProductCard imageSrc="./Assets/bag.avif" brand="QUECHUA" title="Men's Road Cycling Rain Jacket RC100 - Neon Yellow" rating="4.0" price="₹999" originalPrice="₹1,499" savings="₹500"/>
          <ProductCard imageSrc="./Assets/bag.avif" brand="CAPERLAN" title="Men's Road Cycling Rain Jacket RC100 - Neon Yellow" rating="4.0" price="₹999" originalPrice="₹1,499" savings="₹500"/>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default SportCollection2