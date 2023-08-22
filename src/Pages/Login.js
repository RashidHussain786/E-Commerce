import React from "react";
import Paper from "@mui/material/Paper";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import NavBar from "../Components/NavBar";


const Login = () => {
    const paperStyle = {
        padding: 30,
        minHeight: "45vh",
        width: 300,
      };
  return (
    <>
    <NavBar/>
     <Grid sx={{background:'#00b3ff',height:'91vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <h2>Sign In</h2>
          </Grid>

          <TextField
            sx={{ marginTop: 5 }}
            label="Username"
            placeholder="Enter username"
            spacing={3}
            fullWidth
            required
          />

          <TextField
            sx={{ marginTop: 2 }}
            label="Password"
            placeholder="Enter password"
            spacing={3}
            type="password"
            fullWidth
            required
          />

          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Sign in
          </Button>
          <Typography>Forgot password ?</Typography>
          <Typography> Do you have an account ? Sign Up</Typography>
        </Paper>
      </Grid>
    </>
  )
}

export default Login