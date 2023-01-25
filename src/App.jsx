
import React from "react";
import {ResponsiveAppBar} from "./components/navbar"
import {IconButtonSizes} from "./components/bottons"
import {Imagenes, StandardImageList} from "./components/imagen"
import { SwipeableTemporaryDrawer } from "./components/drawe";
function App() {
  return (
    <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <IconButtonSizes></IconButtonSizes>
        <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
        <Imagenes></Imagenes>
    </div>
    
  );
}

export default App;
