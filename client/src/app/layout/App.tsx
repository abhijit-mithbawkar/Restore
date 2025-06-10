import React, { useEffect, useState } from "react";
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Button, Container, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import Navbar from "./Navbar";

function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7058/api/products")
    .then(response => response.json())
    .then(data => setProducts(data));
  }, [])

  //const darkMode = true;
  const palleteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default : (palleteType === 'light' ? "#eaeaea" : "#121212")
      }
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }


  // const addProduct = () => {
  //   setProducts(prevState => [...prevState, 
  //   {
  //     id: prevState.length + 1,
  //     name:'product' + (prevState.length + 1), 
  //     price:(prevState.length * 100) + 100,
  //     quantityInStock: 100,
  //     description: 'test',
  //     pictureUrl: 'https://picsum/photos/200',
  //     type: 'test',
  //     brand: 'test'
  //   }]);
  // }
  
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline></CssBaseline>
    <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}></Navbar>
    <Box sx={{minHeight:'100vh', 
      background: darkMode ? 'radial-gradient(circle, #1e3aba, #111b27)'
      : 'radial-gradient(circle, #baecf9, #f0f9ff)',
      py: 6
      }}>
      <Container maxWidth='xl' sx={{mt:14}}>
        <Catalog products ={products} />
      </Container>
    </Box>
    </ThemeProvider>
  )
}

export default App
