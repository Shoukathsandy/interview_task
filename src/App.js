import './App.css';
import * as React from 'react';
import { Register } from './Register';
import { Home } from "./Home";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
export default function App() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (

    <ThemeProvider theme={theme} >
      <Paper elevation={3}  style={{ minWidth: "100vh" }} >
      <div>
        <AppBar position="static">
          <Toolbar className="dkp">
            <Button color="inherit" >REGISTRATION FORM</Button>
            
            <Button className='dk'
              startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              color="inherit" onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
              {/* Dark mode */} {mode === 'dark' ? " Light Mode" : "Dark Mode"}
            </Button>
        
          </Toolbar>
        </AppBar>

        <Routes>
          <Route exact path='/' element={<Register />} />
          <Route exact path='/Home' element={<Home />} />

        </Routes>
      </div>
    </Paper >
    </ThemeProvider >
  
  );
}



