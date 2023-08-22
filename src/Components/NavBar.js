import { Box, Button, IconButton, InputBase, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Favorite, Person, ShoppingCart, Store, SupportAgent } from '@mui/icons-material';

const NavBar = () => {
    const [hoverIndex, setHoverIndex] = React.useState(null);
    const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const navItems = [
    { icon: <Person/> ,label:'Sign In'},
    { icon: <Store />, label: 'My Store' },
    { icon: <SupportAgent/>, label: 'Support' },
    { icon: <Favorite />, label: 'Wishlist' },
    { icon: <ShoppingCart />, label: 'Cart' },
  ];
  return (
    <>
    {(!isXsScreen?(
     <Box sx={{ px: 4, py: 1.5 ,bgcolor:'#0093ff',color:'white'}}>
     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
       <Box sx={{ display: 'flex', alignItems: 'center' }}>
         <IconButton color="inherit" >
           <MenuIcon sx={{fontSize:'2.4rem'}}/>
         </IconButton>
         <Box sx={{ml:3}}>
           <Typography variant='h5'>E-Commerce</Typography>
         </Box>
       </Box>
       <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, pr:8, pl:14 }}>
         <InputBase
           placeholder="Search..."
           endAdornment={<IconButton><SearchIcon /></IconButton>}
           sx={{ bgcolor:'white', border: '1px solid #ffffff78',borderRadius:'10px', py: '3px', pl: '12px',  pr: '12px',mr:2,width:'85%'}}
         />
         <Box>
           Delivery Location
           <br />
           560002 CHANGE
         </Box>
       </Box>
       <Box sx={{ display: 'flex', alignItems: 'center' }}>
       {navItems.map((item, index) => (
           <Box
             key={index}
             display="flex"
             alignItems="center"
             flexDirection="column"
             onMouseEnter={() => handleMouseEnter(index)}
             onMouseLeave={handleMouseLeave}
             sx={{
               bgcolor: hoverIndex === index ? '#036cb9' : 'transparent',
               transition: 'background-color 0.3s ease',
               cursor:'pointer',
               borderRadius:2
             }}
           >
             <IconButton color="inherit" aria-label={item.label} sx={{ display: 'block' ,p:0}}>
               {item.icon}
             </IconButton>
             <Typography variant="subtitle1" sx={{ mx: 2 }}>
               {item.label}
             </Typography>
           </Box>
         ))}
       </Box>
     </Box>
   </Box>
    ):
    <Box sx={{ px: 1, py: 1.5 ,bgcolor:'#0093ff',color:'white'}}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
         <IconButton color="inherit" >
           <MenuIcon/>
         </IconButton>
         <Box>
           <Typography variant='h5'>E-Commerce</Typography>
        </Box>
    </Box>
    <Button variant='outlined'size='small' sx={{color:'white'}}>Sign In</Button>    
    <Box sx={{fontSize:'12px'}}>
           Delivery Location
           <br />
           560002 CHANGE
         </Box>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, px:1,mt:0.5}}>
         <InputBase
           placeholder="Search..."
           endAdornment={<IconButton><SearchIcon /></IconButton>}
           sx={{ bgcolor:'white', border: '1px solid #ffffff78',borderRadius:'10px', py: '3px', pl: '12px',  pr: '12px',mr:2,width:'100%'}}
         />
         <IconButton color='inherit'><Favorite/></IconButton>
         <IconButton color='inherit'><ShoppingCart/></IconButton>
       </Box>
    </Box>
    )}
    
    </>
  );
}

export default NavBar;
