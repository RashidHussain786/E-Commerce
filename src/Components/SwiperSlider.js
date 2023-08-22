import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@mui/material';

const imagePaths = ['./Assets/pic1.avif', './Assets/pic2.avif', './Assets/pic3.avif', './Assets/pic4.avif'];

const SwiperSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Box sx={{ height: 'auto', width: '100%' }}>
      <Carousel showThumbs={false} selectedItem={currentSlide} onChange={(index) => setCurrentSlide(index)}>
        {imagePaths.map((imagePath, index) => (
          <Box key={index}>
            <img src={imagePath} alt={`pic ${index + 1}`} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default SwiperSlider;
