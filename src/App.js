import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/register' element={<Register/>}/>
    <Route exact path='/product' element={<Product/>}/>
    <Route exact path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
