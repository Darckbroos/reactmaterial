
import React from "react";
import {ResponsiveAppBar} from "./components/navbar"
import {Imagenes, StandardImageList} from "./components/imagen"
import {MuiDrawer} from "./components/btnder"
import { MuiDrawerLeft } from "./components/btnleft";
import { IconButton } from "@mui/material";
import { BasicModal } from "./components/btnimagen";
function App() {
  return (
    <div>
         <ResponsiveAppBar></ResponsiveAppBar>
         <MuiDrawer></MuiDrawer> 
         <MuiDrawerLeft></MuiDrawerLeft>
         
         <Imagenes></Imagenes>
         <IconButton> </IconButton>
         <BasicModal></BasicModal>
    </div>
    
  );
}

export default App;
