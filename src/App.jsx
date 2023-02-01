
import React from "react";
import {ResponsiveAppBar} from "./components/navbar"
import {Imagenes, StandardImageList} from "./components/imagen"
import { IconButton } from "@mui/material";
import { MuiDrawerLeftts } from "./components/btns";
import { MyButton } from "./components/prueba";



function App() {
  return (
    <div>
         <ResponsiveAppBar></ResponsiveAppBar>
         <MuiDrawerLeftts></MuiDrawerLeftts>
         <Imagenes></Imagenes>
         <IconButton> </IconButton>
         <MyButton></MyButton>

         
    </div>
    
    
  );
}

export default App;
