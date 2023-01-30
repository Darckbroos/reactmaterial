
import React from "react";
import {ResponsiveAppBar} from "./components/navbar"
import {Imagenes, StandardImageList} from "./components/imagen"
import { IconButton } from "@mui/material";
import { MuiDrawerLeft } from "./components/btnleft";
import { MuiDrawer } from "./components/btnder";



function App() {
  return (
    <div>
         <ResponsiveAppBar></ResponsiveAppBar>
         <MuiDrawerLeft></MuiDrawerLeft>
         <MuiDrawer></MuiDrawer>
         
         <Imagenes></Imagenes>
         <IconButton> </IconButton>
    </div>
    
    
  );
}

export default App;
