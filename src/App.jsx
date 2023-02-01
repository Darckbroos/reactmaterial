
import React from "react";
import {ResponsiveAppBar} from "./components/navbar"
import {Imagenes, } from "./components/imagen"
import { IconButton } from "@mui/material";
import { MuiDrawerLeftts } from "./components/btns";



function App() {
  return (
    <div>
         <ResponsiveAppBar></ResponsiveAppBar>
         <MuiDrawerLeftts></MuiDrawerLeftts>
         <Imagenes></Imagenes>
         <IconButton> </IconButton>
         

         
    </div>
    
    
  );
}

export default App;
