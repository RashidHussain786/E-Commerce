import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { FavoriteBorder } from '@mui/icons-material';

const ProductCard = ({ imageSrc, brand, title, rating, price, originalPrice, savings }) => {
  return (
    <Box sx={{ maxWidth: '300px', width: '268px', mr: '20px', border: '0.5px solid #c5c5c5', borderRadius: '4px', mt: 2 }}>
      <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative', bgcolor: '#e5e5e5' }}>
        <img src={imageSrc} alt="Product" style={{ width: '100%' }} />
        <Box
          sx={{
            position: 'absolute',
            bottom: '0.5rem',
            left: '0.5rem',
            zIndex: 1,
            bgcolor: '#d1d1d1c9',
            padding: '0.2rem 0.5rem',
            border: '1px solid black',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <StarIcon sx={{ color: 'yellow', mr: '0.2rem' }} />
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#0c96ed' }}>
            {rating}
          </Typography>
        </Box>
        <FavoriteBorder
          sx={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', zIndex: 1, color: '#0c96ed', bgcolor: 'white', borderRadius: '50%', p: 0.5 }}
        />
      </Box>

      <Box sx={{ py: '1rem', px: '0.5rem' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {brand}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: '0.25rem',
              fontSize: '0.875rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxHeight: '3rem',
            }}
          >
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: '0.25rem' }}>
            <Typography variant="subtitle1">{price}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pl: '0.75rem', alignItems: 'flex-start' }}>
              <Typography variant="body2" sx={{ textDecoration: 'line-through', fontSize: '0.875rem' }}>
                {originalPrice}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.875rem', color: 'red', ml: 2 }}>
                Save {savings}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
