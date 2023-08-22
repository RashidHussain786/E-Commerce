import React from 'react';
import NavBar from '../Components/NavBar';
import Collection from '../Components/Collection';
import SwiperSlider from '../Components/SwiperSlider';
import { Box } from '@mui/system';
import { IconButton, Typography } from '@mui/material';
import { ArrowForward, LocalShipping, PeopleAlt, VerifiedUser } from '@mui/icons-material';
import MenSection from '../Components/MenSection';
import SwiperSlider2 from '../Components/SwiperSlider2';
import ContainerCard from '../Components/ContainerCard';
import MenRainSection from '../Components/MenRainSection';
import MenTrending from '../Components/MenTrending';
import WomenSection from '../Components/WomenSection';
import HighOnDemand from '../Components/HighOnDemand';
import SportSection from '../Components/SportSection';
import SportCollection from '../Components/SportCollection';
import SportCollection2 from '../Components/SportCollection2';

const sections = [
  { icon: <PeopleAlt />, text: '1M+ Happy Customers' },
  { icon: <VerifiedUser />, text: '100+ Stores Across India' },
  { icon: <LocalShipping />, text: 'Easy Return' },
];

const Home = () => {
  return (
    <>
      <NavBar />
      <Collection />
      <SwiperSlider />
      {/* add card for happy customer easy return and store */}
      <Box sx={{ py: '1rem', display: 'flex', justifyContent: 'space-around' ,backgroundImage: `url('./Assets/download.webp')`}}>
        {sections.map((section, index) => (
          <Box key={index} sx={{ px: { xs: '0.5rem', md: '1rem' }, textAlign: 'center' }}>
            {section.icon}
            <Typography variant="body2" sx={{ px: 0.5 }}>
              {section.text}
            </Typography>
            <IconButton color="inherit">
              <ArrowForward />
            </IconButton>
          </Box>
        ))}
     </Box>
     <MenSection/>
     <SwiperSlider2/>
     <ContainerCard/>
     <MenRainSection/>
     <MenTrending/>
     <WomenSection/>
     <HighOnDemand/>
     <SportSection/>
     <SportCollection/>
     <SportCollection2/>
     </>
  );
};

export default Home;
